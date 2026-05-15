<?php
declare(strict_types=1);

// Emojihub SDK utility: prepare_body

class EmojihubPrepareBody
{
    public static function call(EmojihubContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
