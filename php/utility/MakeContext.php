<?php
declare(strict_types=1);

// Emojihub SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class EmojihubMakeContext
{
    public static function call(array $ctxmap, ?EmojihubContext $basectx): EmojihubContext
    {
        return new EmojihubContext($ctxmap, $basectx);
    }
}
