# Emojihub SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Emojihub",
            "slug": "emojihub",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://emojihub.yurace.pro/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "all": {},
                "category": {},
                "group": {},
                "random": {},
                "search": {},
                "similar": {},
            },
        },
        "entity": {
      "all": {
        "fields": [
          {
            "name": "category",
            "req": True,
            "short": "The category the emoji belongs to",
            "type": "`$STRING`",
          },
          {
            "name": "group",
            "req": True,
            "short": "The group the emoji belongs to",
            "type": "`$STRING`",
          },
          {
            "name": "htmlCode",
            "req": True,
            "short": "Array of HTML entity codes for the emoji",
            "type": "`$ARRAY`",
          },
          {
            "name": "name",
            "req": True,
            "short": "The name of the emoji",
            "type": "`$STRING`",
          },
          {
            "name": "unicode",
            "req": True,
            "short": "Array of Unicode code points for the emoji",
            "type": "`$ARRAY`",
          },
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
                    "lit": "all",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "all",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "category": {
        "fields": [
          {
            "name": "category",
            "req": True,
            "short": "The category the emoji belongs to",
            "type": "`$STRING`",
          },
          {
            "name": "group",
            "req": True,
            "short": "The group the emoji belongs to",
            "type": "`$STRING`",
          },
          {
            "name": "htmlCode",
            "req": True,
            "short": "Array of HTML entity codes for the emoji",
            "type": "`$ARRAY`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "The name of the emoji",
            "type": "`$STRING`",
          },
          {
            "name": "unicode",
            "req": True,
            "short": "Array of Unicode code points for the emoji",
            "type": "`$ARRAY`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "categories",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "categories",
                ],
              },
            ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/all/category/{category-name}",
                "rename": {
                  "param": {
                    "category-name": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "all",
                  },
                  {
                    "lit": "category",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "all",
                  "category",
                  "{id}",
                ],
              },
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "category_name",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/random/category/{category-name}",
                "rename": {
                  "param": {
                    "category-name": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "random",
                  },
                  {
                    "lit": "category",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "random",
                  "category",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "group": {
        "fields": [
          {
            "name": "category",
            "req": True,
            "short": "The category the emoji belongs to",
            "type": "`$STRING`",
          },
          {
            "name": "group",
            "req": True,
            "short": "The group the emoji belongs to",
            "type": "`$STRING`",
          },
          {
            "name": "htmlCode",
            "req": True,
            "short": "Array of HTML entity codes for the emoji",
            "type": "`$ARRAY`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "The name of the emoji",
            "type": "`$STRING`",
          },
          {
            "name": "unicode",
            "req": True,
            "short": "Array of Unicode code points for the emoji",
            "type": "`$ARRAY`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "groups",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "groups",
                ],
              },
            ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/all/group/{group-name}",
                "rename": {
                  "param": {
                    "group-name": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "all",
                  },
                  {
                    "lit": "group",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "all",
                  "group",
                  "{id}",
                ],
              },
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "group_name",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/random/group/{group-name}",
                "rename": {
                  "param": {
                    "group-name": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "random",
                  },
                  {
                    "lit": "group",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "random",
                  "group",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "random": {
        "fields": [
          {
            "name": "category",
            "req": True,
            "short": "The category the emoji belongs to",
            "type": "`$STRING`",
          },
          {
            "name": "group",
            "req": True,
            "short": "The group the emoji belongs to",
            "type": "`$STRING`",
          },
          {
            "name": "htmlCode",
            "req": True,
            "short": "Array of HTML entity codes for the emoji",
            "type": "`$ARRAY`",
          },
          {
            "name": "name",
            "req": True,
            "short": "The name of the emoji",
            "type": "`$STRING`",
          },
          {
            "name": "unicode",
            "req": True,
            "short": "Array of Unicode code points for the emoji",
            "type": "`$ARRAY`",
          },
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
                    "lit": "random",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "random",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "search": {
        "fields": [
          {
            "name": "category",
            "req": True,
            "short": "The category the emoji belongs to",
            "type": "`$STRING`",
          },
          {
            "name": "group",
            "req": True,
            "short": "The group the emoji belongs to",
            "type": "`$STRING`",
          },
          {
            "name": "htmlCode",
            "req": True,
            "short": "Array of HTML entity codes for the emoji",
            "type": "`$ARRAY`",
          },
          {
            "name": "name",
            "req": True,
            "short": "The name of the emoji",
            "type": "`$STRING`",
          },
          {
            "name": "unicode",
            "req": True,
            "short": "Array of Unicode code points for the emoji",
            "type": "`$ARRAY`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/search",
                "segments": [
                  {
                    "lit": "search",
                  },
                ],
                "select": {
                  "exist": [
                    "q",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "search",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "similar": {
        "fields": [
          {
            "name": "category",
            "req": True,
            "short": "The category the emoji belongs to",
            "type": "`$STRING`",
          },
          {
            "name": "group",
            "req": True,
            "short": "The group the emoji belongs to",
            "type": "`$STRING`",
          },
          {
            "name": "htmlCode",
            "req": True,
            "short": "Array of HTML entity codes for the emoji",
            "type": "`$ARRAY`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "The name of the emoji",
            "type": "`$STRING`",
          },
          {
            "name": "unicode",
            "req": True,
            "short": "Array of Unicode code points for the emoji",
            "type": "`$ARRAY`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/similar/{name}",
                "rename": {
                  "param": {
                    "name": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "similar",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "similar",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
