

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import events from 'events';
import * as model from './Interfaces.ts';


interface WatchedExpression {
	expression: string;
	value: string;
}



class RoundStateRenderer {
	
	public static render(map: model.Field[][], f: (x: number, y: number) => JSX.Element[] = null): JSX.Element {
		if (f == null)
			f = (x, y) => [];
			
		const xMaxP1 = map.length;
		const yMaxP1 = map[0].length;
		
		const elems: JSX.Element[] = [];
		
		for(let y = 0; y < yMaxP1; y++) {
			for (let x = 0; x < xMaxP1; x++) {
				let cl: string[] = [ "field" ];
				if (x == 0)
					cl.push("nl");
				const field = map[x][y];
				
				let unitElem: JSX.Element = null;
				let unit = field.unitOnField;
				if (unit != null) {
					unitElem = <div className={unit.unitType + " unit"}></div>;
				}
				
				cl.push(field.type);
				elems.push(<div key={x + " " + y} className={cl.join(" ")}> {unitElem} { f(x, y) } </div>);
			}
		}
		
		return <div className="map"> { elems } </div>;
	}
	
}

class ValueRenderer {
	public render(expression: string): JSX.Element {
		if (expression === undefined)
			return <span>(undefined)</span>;
		
		const str = "debug-json-format:";
		if (expression.indexOf(str) === 0) {
			
			const other = expression.substr(str.length);
			const obj = JSON.parse(other) as model.DebugContent;
			return this.render2(obj);
		}
		else {
			return <pre> {expression} </pre>;
		}	
	}
	
	public render2(obj: model.DebugContent) {

		if (obj.className === "MapWithNodes") {
			const c = obj.content as model.MapWithNodes;
			return RoundStateRenderer.render(c.map, (x, y) => {
				return [<div className="nodeValue">{c.nodes[x][y]}</div>];
			});
		}
		else if (obj.className === "MapWithEdges") {
			const c = obj.content as model.MapWithEdges;
			return RoundStateRenderer.render(c.map, (x, y) => {
				return [
					<div className="edgeValue edge1">{ c.edges[x][y][0] }</div>,
					<div className="edgeValue edge2">{ c.edges[x][y][1] }</div>,
					<div className="edgeValue edge3">{ c.edges[x][y][2] }</div>,
					<div className="edgeValue edge4">{ c.edges[x][y][3] }</div>
				];
			});
		}
		else if (obj.className === "ClientRoundState") {
			const c = obj.content as model.RoundState;
			return RoundStateRenderer.render(c.map);
		}
		return null;
		
	}
}

type GUIProps = {  };
type GUIState = { expressions: WatchedExpression[] };

class GUI extends React.Component<GUIProps, GUIState> {
	
	private renderer: ValueRenderer;
	
	constructor(props: GUIProps) {
		super(props);

		this.state = { expressions:[] };
		this.renderer = new ValueRenderer();
		setInterval(() => this.update(), 100);
	}
	update() {
		$.getJSON("http://localhost:8082/list").then((data: WatchedExpression[]) => {
			this.setState({ expressions: data });
		});
	}
	render() {
		return <div>
			{this.state.expressions.map(expr =>
				<div key={ expr.expression }>
					<div>{ expr.expression }:</div>
					{ this.renderer.render(expr.value) }
					<div style={ { "clear": "both" } } />
				</div>
			)}
		</div>;
	}
}

ReactDOM.render(<GUI/>, document.querySelector("#root"));

