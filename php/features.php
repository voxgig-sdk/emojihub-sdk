<?php
declare(strict_types=1);

// Emojihub SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class EmojihubFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new EmojihubBaseFeature();
            case "test":
                return new EmojihubTestFeature();
            default:
                return new EmojihubBaseFeature();
        }
    }
}
