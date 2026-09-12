"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Emojihub',
        slug: "emojihub",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://emojihub.yurace.pro/api",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            all: {},
            category: {},
            group: {},
            random: {},
            search: {},
            similar: {},
        }
    };
    entity = {
        "all": {
            "fields": [
                {
                    "name": "category",
                    "req": true,
                    "short": "The category the emoji belongs to",
                    "type": "`$STRING`"
                },
                {
                    "name": "group",
                    "req": true,
                    "short": "The group the emoji belongs to",
                    "type": "`$STRING`"
                },
                {
                    "name": "htmlCode",
                    "req": true,
                    "short": "Array of HTML entity codes for the emoji",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "name",
                    "req": true,
                    "short": "The name of the emoji",
                    "type": "`$STRING`"
                },
                {
                    "name": "unicode",
                    "req": true,
                    "short": "Array of Unicode code points for the emoji",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "all",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/all",
                            "segments": [
                                {
                                    "lit": "all"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "all"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "category": {
            "fields": [
                {
                    "name": "category",
                    "req": true,
                    "short": "The category the emoji belongs to",
                    "type": "`$STRING`"
                },
                {
                    "name": "group",
                    "req": true,
                    "short": "The group the emoji belongs to",
                    "type": "`$STRING`"
                },
                {
                    "name": "htmlCode",
                    "req": true,
                    "short": "Array of HTML entity codes for the emoji",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "req": true,
                    "short": "The name of the emoji",
                    "type": "`$STRING`"
                },
                {
                    "name": "unicode",
                    "req": true,
                    "short": "Array of Unicode code points for the emoji",
                    "type": "`$ARRAY`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "category",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/categories",
                            "segments": [
                                {
                                    "lit": "categories"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "categories"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "category_name",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/all/category/{category-name}",
                            "rename": {
                                "param": {
                                    "category-name": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "all"
                                },
                                {
                                    "lit": "category"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "all",
                                "category",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "category_name",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/random/category/{category-name}",
                            "rename": {
                                "param": {
                                    "category-name": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "random"
                                },
                                {
                                    "lit": "category"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "random",
                                "category",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "group": {
            "fields": [
                {
                    "name": "category",
                    "req": true,
                    "short": "The category the emoji belongs to",
                    "type": "`$STRING`"
                },
                {
                    "name": "group",
                    "req": true,
                    "short": "The group the emoji belongs to",
                    "type": "`$STRING`"
                },
                {
                    "name": "htmlCode",
                    "req": true,
                    "short": "Array of HTML entity codes for the emoji",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "req": true,
                    "short": "The name of the emoji",
                    "type": "`$STRING`"
                },
                {
                    "name": "unicode",
                    "req": true,
                    "short": "Array of Unicode code points for the emoji",
                    "type": "`$ARRAY`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "group",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/groups",
                            "segments": [
                                {
                                    "lit": "groups"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "groups"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "group_name",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/all/group/{group-name}",
                            "rename": {
                                "param": {
                                    "group-name": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "all"
                                },
                                {
                                    "lit": "group"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "all",
                                "group",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "group_name",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/random/group/{group-name}",
                            "rename": {
                                "param": {
                                    "group-name": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "random"
                                },
                                {
                                    "lit": "group"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "random",
                                "group",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "random": {
            "fields": [
                {
                    "name": "category",
                    "req": true,
                    "short": "The category the emoji belongs to",
                    "type": "`$STRING`"
                },
                {
                    "name": "group",
                    "req": true,
                    "short": "The group the emoji belongs to",
                    "type": "`$STRING`"
                },
                {
                    "name": "htmlCode",
                    "req": true,
                    "short": "Array of HTML entity codes for the emoji",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "name",
                    "req": true,
                    "short": "The name of the emoji",
                    "type": "`$STRING`"
                },
                {
                    "name": "unicode",
                    "req": true,
                    "short": "Array of Unicode code points for the emoji",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "random",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/random",
                            "segments": [
                                {
                                    "lit": "random"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "random"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "search": {
            "fields": [
                {
                    "name": "category",
                    "req": true,
                    "short": "The category the emoji belongs to",
                    "type": "`$STRING`"
                },
                {
                    "name": "group",
                    "req": true,
                    "short": "The group the emoji belongs to",
                    "type": "`$STRING`"
                },
                {
                    "name": "htmlCode",
                    "req": true,
                    "short": "Array of HTML entity codes for the emoji",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "name",
                    "req": true,
                    "short": "The name of the emoji",
                    "type": "`$STRING`"
                },
                {
                    "name": "unicode",
                    "req": true,
                    "short": "Array of Unicode code points for the emoji",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "search",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "smile",
                                        "kind": "query",
                                        "name": "q",
                                        "orig": "q",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/search",
                            "segments": [
                                {
                                    "lit": "search"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "q"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "search"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "similar": {
            "fields": [
                {
                    "name": "category",
                    "req": true,
                    "short": "The category the emoji belongs to",
                    "type": "`$STRING`"
                },
                {
                    "name": "group",
                    "req": true,
                    "short": "The group the emoji belongs to",
                    "type": "`$STRING`"
                },
                {
                    "name": "htmlCode",
                    "req": true,
                    "short": "Array of HTML entity codes for the emoji",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "req": true,
                    "short": "The name of the emoji",
                    "type": "`$STRING`"
                },
                {
                    "name": "unicode",
                    "req": true,
                    "short": "Array of Unicode code points for the emoji",
                    "type": "`$ARRAY`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "similar",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "cat",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "name",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/similar/{name}",
                            "rename": {
                                "param": {
                                    "name": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "similar"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "similar",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map