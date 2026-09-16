# Emojihub SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module EmojihubFeatures
  def self.make_feature(name)
    case name
    when "base"
      EmojihubBaseFeature.new
    when "ratelimit"
      EmojihubRatelimitFeature.new
    when "retry"
      EmojihubRetryFeature.new
    when "test"
      EmojihubTestFeature.new
    when "timeout"
      EmojihubTimeoutFeature.new
    else
      EmojihubBaseFeature.new
    end
  end
end
