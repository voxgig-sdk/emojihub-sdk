<?php
declare(strict_types=1);

// Emojihub SDK utility: feature_add

class EmojihubFeatureAdd
{
    public static function call(EmojihubContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
