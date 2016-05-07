SystemJS.config({
  transpiler: "plugin-typescript",
  meta: {
    "*.tsx": {
      "loader": "plugin-typescript"
    },
    "*.ts": {
      "loader": "plugin-typescript"
    }
  },
  typescriptOptions: {
    "typeCheck": true,
    "tsconfig": true
  },
  packages: {
    "app": {}
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "events": "github:jspm/nodelibs-events@0.1.1",
    "jquery": "npm:jquery@2.2.3",
    "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.1",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "react": "npm:react@0.14.7",
    "react-dom": "npm:react-dom@0.14.7",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha"
  },
  packages: {
    "github:frankwallis/plugin-typescript@4.0.1": {
      "map": {
        "typescript": "npm:typescript@1.8.2"
      }
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "map": {
        "events": "npm:events@1.0.2"
      }
    },
    "npm:react@0.14.7": {
      "map": {
        "fbjs": "npm:fbjs@0.6.1"
      }
    }
  }
});
