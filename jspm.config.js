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
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "css": "npm:jspm-loader-css@1.1.0",
    "events": "github:jspm/nodelibs-events@0.1.1",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "jquery": "npm:jquery@2.2.3",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
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
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.6.0"
      }
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "map": {
        "events": "npm:events@1.0.2"
      }
    },
    "npm:buffer@4.6.0": {
      "map": {
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:css-modules-loader-core@1.0.0": {
      "map": {
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
        "postcss": "npm:postcss@5.0.10",
        "postcss-modules-extract-imports": "npm:postcss-modules-extract-imports@1.0.0",
        "postcss-modules-local-by-default": "npm:postcss-modules-local-by-default@1.0.0",
        "postcss-modules-scope": "npm:postcss-modules-scope@1.0.0",
        "postcss-modules-values": "npm:postcss-modules-values@1.1.0"
      }
    },
    "npm:css-selector-tokenizer@0.5.4": {
      "map": {
        "cssesc": "npm:cssesc@0.1.0",
        "fastparse": "npm:fastparse@1.1.1"
      }
    },
    "npm:debounce@1.0.0": {
      "map": {
        "date-now": "npm:date-now@1.0.1"
      }
    },
    "npm:jspm-loader-css@1.1.0": {
      "map": {
        "css-modules-loader-core": "npm:css-modules-loader-core@1.0.0",
        "debounce": "npm:debounce@1.0.0",
        "path": "npm:path@0.12.7",
        "toposort": "npm:toposort@0.2.12"
      }
    },
    "npm:path@0.12.7": {
      "map": {
        "process": "npm:process@0.11.2",
        "util": "npm:util@0.10.3"
      }
    },
    "npm:postcss-modules-extract-imports@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.10"
      }
    },
    "npm:postcss-modules-local-by-default@1.0.0": {
      "map": {
        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
        "postcss": "npm:postcss@5.0.10"
      }
    },
    "npm:postcss-modules-scope@1.0.0": {
      "map": {
        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
        "postcss": "npm:postcss@5.0.10"
      }
    },
    "npm:postcss-modules-values@1.1.0": {
      "map": {
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
        "postcss": "npm:postcss@5.0.10"
      }
    },
    "npm:postcss@5.0.10": {
      "map": {
        "js-base64": "npm:js-base64@2.1.9",
        "source-map": "npm:source-map@0.5.6",
        "supports-color": "npm:supports-color@3.1.2"
      }
    },
    "npm:react@0.14.7": {
      "map": {
        "fbjs": "npm:fbjs@0.6.1"
      }
    },
    "npm:supports-color@3.1.2": {
      "map": {
        "has-flag": "npm:has-flag@1.0.0"
      }
    },
    "npm:util@0.10.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    }
  }
});
