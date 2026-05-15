# Emojihub SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module EmojihubFeatures
  def self.make_feature(name)
    case name
    when "base"
      EmojihubBaseFeature.new
    when "test"
      EmojihubTestFeature.new
    else
      EmojihubBaseFeature.new
    end
  end
end
