<?php
declare(strict_types=1);

// Emojihub SDK utility: result_body

class EmojihubResultBody
{
    public static function call(EmojihubContext $ctx): ?EmojihubResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
