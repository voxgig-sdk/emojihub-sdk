# Emojihub SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

EmojihubUtility.registrar = ->(u) {
  u.clean = EmojihubUtilities::Clean
  u.done = EmojihubUtilities::Done
  u.make_error = EmojihubUtilities::MakeError
  u.feature_add = EmojihubUtilities::FeatureAdd
  u.feature_hook = EmojihubUtilities::FeatureHook
  u.feature_init = EmojihubUtilities::FeatureInit
  u.fetcher = EmojihubUtilities::Fetcher
  u.make_fetch_def = EmojihubUtilities::MakeFetchDef
  u.make_context = EmojihubUtilities::MakeContext
  u.make_options = EmojihubUtilities::MakeOptions
  u.make_request = EmojihubUtilities::MakeRequest
  u.make_response = EmojihubUtilities::MakeResponse
  u.make_result = EmojihubUtilities::MakeResult
  u.make_point = EmojihubUtilities::MakePoint
  u.make_spec = EmojihubUtilities::MakeSpec
  u.make_url = EmojihubUtilities::MakeUrl
  u.param = EmojihubUtilities::Param
  u.prepare_auth = EmojihubUtilities::PrepareAuth
  u.prepare_body = EmojihubUtilities::PrepareBody
  u.prepare_headers = EmojihubUtilities::PrepareHeaders
  u.prepare_method = EmojihubUtilities::PrepareMethod
  u.prepare_params = EmojihubUtilities::PrepareParams
  u.prepare_path = EmojihubUtilities::PreparePath
  u.prepare_query = EmojihubUtilities::PrepareQuery
  u.result_basic = EmojihubUtilities::ResultBasic
  u.result_body = EmojihubUtilities::ResultBody
  u.result_headers = EmojihubUtilities::ResultHeaders
  u.transform_request = EmojihubUtilities::TransformRequest
  u.transform_response = EmojihubUtilities::TransformResponse
}
