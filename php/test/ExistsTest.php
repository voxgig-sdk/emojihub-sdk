<?php
declare(strict_types=1);

// Emojihub SDK exists test

require_once __DIR__ . '/../emojihub_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = EmojihubSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
