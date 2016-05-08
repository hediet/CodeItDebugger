
export interface MapWithNodes {
    map: Field[][];
    nodes: string[][];
}

export interface MapWithEdges {
    map: Field[][];
    edges: string[][][];
}

export interface DebugContent {
    content: any;
    className: string;
}

export interface RoundState {
	map: Field[][];
    roundNumber: number;
}

export type FieldType = "WALL" | "LAND" | "BASE" | "WATER";

export interface Field {
	type: FieldType;
    owner: string;
    resourceCount: number;
    remainingResourceLifetime: number;
    unitOnField: Unit|null;
}

export interface Unit {
    health: number;
    owner: string;
    position: Position;
    unitId: number;
    unitType: UnitType;
    resourceCount: number;
}

export type UnitType = "COLLECTOR" | "WARRIOR" | "ARCHER";

export interface Position {
    x: number;
    y: number;
}