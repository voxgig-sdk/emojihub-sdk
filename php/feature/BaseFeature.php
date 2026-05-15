<?php
declare(strict_types=1);

// Emojihub SDK base feature

class EmojihubBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(EmojihubContext $ctx, array $options): void {}
    public function PostConstruct(EmojihubContext $ctx): void {}
    public function PostConstructEntity(EmojihubContext $ctx): void {}
    public function SetData(EmojihubContext $ctx): void {}
    public function GetData(EmojihubContext $ctx): void {}
    public function GetMatch(EmojihubContext $ctx): void {}
    public function SetMatch(EmojihubContext $ctx): void {}
    public function PrePoint(EmojihubContext $ctx): void {}
    public function PreSpec(EmojihubContext $ctx): void {}
    public function PreRequest(EmojihubContext $ctx): void {}
    public function PreResponse(EmojihubContext $ctx): void {}
    public function PreResult(EmojihubContext $ctx): void {}
    public function PreDone(EmojihubContext $ctx): void {}
    public function PreUnexpected(EmojihubContext $ctx): void {}
}
