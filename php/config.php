<?php
declare(strict_types=1);

// Emojihub SDK configuration

class EmojihubConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Emojihub",
                "slug" => "emojihub",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://emojihub.yurace.pro/api",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "all" => [],
                    "category" => [],
                    "group" => [],
                    "random" => [],
                    "search" => [],
                    "similar" => [],
                ],
            ],
            "entity" => [
        'all' => [
          'fields' => [
            [
              'name' => 'category',
              'req' => true,
              'short' => 'The category the emoji belongs to',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'group',
              'req' => true,
              'short' => 'The group the emoji belongs to',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'htmlCode',
              'req' => true,
              'short' => 'Array of HTML entity codes for the emoji',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'name',
              'req' => true,
              'short' => 'The name of the emoji',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'unicode',
              'req' => true,
              'short' => 'Array of Unicode code points for the emoji',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'all',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/all',
                  'parts' => [
                    'all',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'category' => [
          'fields' => [
            [
              'name' => 'category',
              'req' => true,
              'short' => 'The category the emoji belongs to',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'group',
              'req' => true,
              'short' => 'The group the emoji belongs to',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'htmlCode',
              'req' => true,
              'short' => 'Array of HTML entity codes for the emoji',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'name',
              'req' => true,
              'short' => 'The name of the emoji',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'unicode',
              'req' => true,
              'short' => 'Array of Unicode code points for the emoji',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'category',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/categories',
                  'parts' => [
                    'categories',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'category_name',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/all/category/{category-name}',
                  'parts' => [
                    'all',
                    'category',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'category-name' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'category_name',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/random/category/{category-name}',
                  'parts' => [
                    'random',
                    'category',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'category-name' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'group' => [
          'fields' => [
            [
              'name' => 'category',
              'req' => true,
              'short' => 'The category the emoji belongs to',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'group',
              'req' => true,
              'short' => 'The group the emoji belongs to',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'htmlCode',
              'req' => true,
              'short' => 'Array of HTML entity codes for the emoji',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'name',
              'req' => true,
              'short' => 'The name of the emoji',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'unicode',
              'req' => true,
              'short' => 'Array of Unicode code points for the emoji',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'group',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/groups',
                  'parts' => [
                    'groups',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'group_name',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/all/group/{group-name}',
                  'parts' => [
                    'all',
                    'group',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'group-name' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'group_name',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/random/group/{group-name}',
                  'parts' => [
                    'random',
                    'group',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'group-name' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'random' => [
          'fields' => [
            [
              'name' => 'category',
              'req' => true,
              'short' => 'The category the emoji belongs to',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'group',
              'req' => true,
              'short' => 'The group the emoji belongs to',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'htmlCode',
              'req' => true,
              'short' => 'Array of HTML entity codes for the emoji',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'name',
              'req' => true,
              'short' => 'The name of the emoji',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'unicode',
              'req' => true,
              'short' => 'Array of Unicode code points for the emoji',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'random',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/random',
                  'parts' => [
                    'random',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'search' => [
          'fields' => [
            [
              'name' => 'category',
              'req' => true,
              'short' => 'The category the emoji belongs to',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'group',
              'req' => true,
              'short' => 'The group the emoji belongs to',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'htmlCode',
              'req' => true,
              'short' => 'Array of HTML entity codes for the emoji',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'name',
              'req' => true,
              'short' => 'The name of the emoji',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'unicode',
              'req' => true,
              'short' => 'Array of Unicode code points for the emoji',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'search',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'smile',
                        'kind' => 'query',
                        'name' => 'q',
                        'orig' => 'q',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/search',
                  'parts' => [
                    'search',
                  ],
                  'select' => [
                    'exist' => [
                      'q',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'similar' => [
          'fields' => [
            [
              'name' => 'category',
              'req' => true,
              'short' => 'The category the emoji belongs to',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'group',
              'req' => true,
              'short' => 'The group the emoji belongs to',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'htmlCode',
              'req' => true,
              'short' => 'Array of HTML entity codes for the emoji',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'name',
              'req' => true,
              'short' => 'The name of the emoji',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'unicode',
              'req' => true,
              'short' => 'Array of Unicode code points for the emoji',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'similar',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'cat',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'name',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/similar/{name}',
                  'parts' => [
                    'similar',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'name' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return EmojihubFeatures::make_feature($name);
    }
}
