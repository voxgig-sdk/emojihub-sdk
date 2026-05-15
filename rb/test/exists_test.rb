# Emojihub SDK exists test

require "minitest/autorun"
require_relative "../Emojihub_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = EmojihubSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
