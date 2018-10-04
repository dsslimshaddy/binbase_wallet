const a =  {
    "BTC": {
        "explorer": {
            "main":"https://blocktrail.com/BTC",
            "test": "https://test-insight.bitpay.com"
        },
        "api": {
            "main": "https://insight.bitpay.com/api",
            "test": "https://test-insight.bitpay.com/api"
        },
        "code": 0,
        "decimals": 10**8,
    },
    "LTC": {
        "explorer": {
            "main":"https://insight.litecore.io",
            "test": "https://testnet.litecore.io"
        },
        "api": {
            "main": "https://insight.bitpay.com/api",
            "test": "https://test-insight.bitpay.com/api"
        },
        "code": 2,
        "decimals": 10 ** 8
    },
    "DASH": {
        "explorer": {
            "main":"https://insight.dash.org",
            "test": "https://testnet-insight.dashevo.org/insight"
        },
        "api": {
            "main": "https://insight.dash.org/api",
            "test": "https://testnet-insight.dashevo.org/insight-api-dash"
        },
        "code": 5,
        "decimals": 10 ** 8,
    },
    "ETH": {
        "explorer": {
            "main": "https://etherscan.io",
            "test": "https://rinkeby.etherscan.io"
        },
        "api": {
            "main": "https://api.etherscan.io/api",
            "test": "https://api.rinkeby.etherscan.io/api"
        },
        "code": 60,
        "decimals": 10 ** 18,
    },
    "NEO": {
        "explorer": {
            "main": "https://neoscan.io/",
            "test": "https://neoscan-testnet.io/"
        },
        "api": {
            "main": "https://api.neoscan.io/api/main_net/v1",
            "test": "https://api.neoscan.io/api/test_net/v1"
        },
        "code": 888,
        "assets": {
            "main": require("./neo_assets.json")
        },
        "decimals": 10 ** 0,
    }
}

export default a;