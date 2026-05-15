<?php
declare(strict_types=1);

// Emojihub SDK utility: result_headers

class EmojihubResultHeaders
{
    public static function call(EmojihubContext $ctx): ?EmojihubResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
