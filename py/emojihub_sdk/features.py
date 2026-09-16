# Emojihub SDK feature factory

from emojihub_sdk.feature.base_feature import EmojihubBaseFeature
from emojihub_sdk.feature.ratelimit_feature import EmojihubRatelimitFeature
from emojihub_sdk.feature.retry_feature import EmojihubRetryFeature
from emojihub_sdk.feature.test_feature import EmojihubTestFeature
from emojihub_sdk.feature.timeout_feature import EmojihubTimeoutFeature


_FEATURES = {
    "base": lambda: EmojihubBaseFeature(),
    "ratelimit": lambda: EmojihubRatelimitFeature(),
    "retry": lambda: EmojihubRetryFeature(),
    "test": lambda: EmojihubTestFeature(),
    "timeout": lambda: EmojihubTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
