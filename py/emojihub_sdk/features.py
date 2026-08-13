# Emojihub SDK feature factory

from emojihub_sdk.feature.base_feature import EmojihubBaseFeature
from emojihub_sdk.feature.test_feature import EmojihubTestFeature


def _make_feature(name):
    features = {
        "base": lambda: EmojihubBaseFeature(),
        "test": lambda: EmojihubTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
