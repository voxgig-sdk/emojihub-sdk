<?php
declare(strict_types=1);

// Emojihub SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

EmojihubUtility::setRegistrar(function (EmojihubUtility $u): void {
    $u->clean = [EmojihubClean::class, 'call'];
    $u->done = [EmojihubDone::class, 'call'];
    $u->make_error = [EmojihubMakeError::class, 'call'];
    $u->feature_add = [EmojihubFeatureAdd::class, 'call'];
    $u->feature_hook = [EmojihubFeatureHook::class, 'call'];
    $u->feature_init = [EmojihubFeatureInit::class, 'call'];
    $u->fetcher = [EmojihubFetcher::class, 'call'];
    $u->make_fetch_def = [EmojihubMakeFetchDef::class, 'call'];
    $u->make_context = [EmojihubMakeContext::class, 'call'];
    $u->make_options = [EmojihubMakeOptions::class, 'call'];
    $u->make_request = [EmojihubMakeRequest::class, 'call'];
    $u->make_response = [EmojihubMakeResponse::class, 'call'];
    $u->make_result = [EmojihubMakeResult::class, 'call'];
    $u->make_point = [EmojihubMakePoint::class, 'call'];
    $u->make_spec = [EmojihubMakeSpec::class, 'call'];
    $u->make_url = [EmojihubMakeUrl::class, 'call'];
    $u->param = [EmojihubParam::class, 'call'];
    $u->prepare_auth = [EmojihubPrepareAuth::class, 'call'];
    $u->prepare_body = [EmojihubPrepareBody::class, 'call'];
    $u->prepare_headers = [EmojihubPrepareHeaders::class, 'call'];
    $u->prepare_method = [EmojihubPrepareMethod::class, 'call'];
    $u->prepare_params = [EmojihubPrepareParams::class, 'call'];
    $u->prepare_path = [EmojihubPreparePath::class, 'call'];
    $u->prepare_query = [EmojihubPrepareQuery::class, 'call'];
    $u->result_basic = [EmojihubResultBasic::class, 'call'];
    $u->result_body = [EmojihubResultBody::class, 'call'];
    $u->result_headers = [EmojihubResultHeaders::class, 'call'];
    $u->transform_request = [EmojihubTransformRequest::class, 'call'];
    $u->transform_response = [EmojihubTransformResponse::class, 'call'];
});
