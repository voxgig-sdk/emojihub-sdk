# ProjectName SDK exists test

import pytest
from emojihub_sdk import EmojihubSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = EmojihubSDK.test(None, None)
        assert testsdk is not None
