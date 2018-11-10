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
        "forks": ["LTC", "DASH"],
        "fee_label": "Sats",
        "estimateFee": true,
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
        "decimals": 10 ** 8,
        "fee_label": "LTC",
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
        "fee_label": "DASH",
    },
    "ETH": {
        "explorer": {
            "main": "https://etherscan.io",
            "test": "https://rinkeby.etherscan.io"
        },
        "api": {
            "main": "https://api.ethplorer.io",
            "test": "https://api-rinkeby.etherscan.io/api",
            "test": "https://api.ethplorer.io",
        },
        "assets": {
            "main": require("./eth_assets.json")
        },        
        "code": 60,
        "decimals": 10 ** 18,
        "fee_label": "ETH",
        "estimateFee": true,
    },
    "NEO": {
        "explorer": {
            "main": "https://neoscan.io/",
            "test": "https://35.243.206.176:4000/"
        },
        "api": {
            "main": "https://api.neoscan.io/api/main_net/v1",
            "test": "http://35.243.206.176:4000/api/main_net/v1"
        },
        "rpc":{
            "main": "http://api.neoscan.io/api/main_net/v1",
            "test": "http://35.243.206.176:30333/api/main_net/v1"
        },
        "code": 888,
        "assets": {
            "main": require("./neo_assets.json")
        },
        "decimals": 10 ** 0,
        "fee_label": "GAS",
    },
    "NANO": {
        "explorer": {
            "main": "https://www.nanode.co",
            "test": "https://www.nanode.co"
        },
        "api": {
            "main": "http://35.227.18.245:7076/",
            "test": "http://35.227.18.245:7076/"
        },
        "code": 165,
        "decimals": 10 ** 18,
        "fee_label": "",
        "noFee": true,
    },
    "VET": {
        "explorer": {
            "main": "https://explore.veforge.com",
            "test": "https://testnet.veforge.com"
        },
        "api": {
            "main": "https://explore.veforge.com/api",
            "test": "https://testnet.veforge.com/api"
        },
        "assets": {
            "main": require("./vet_assets.json")
        },        
        "code": 818,
        "decimals": 10 ** 18,
        "fee_label": "VTHO",
    },
    /*
    "XMR": {
        "explorer": {
            "main": "https://www.nanode.co/",
            "test": "https://www.nanode.co/"
        },estimateFee
        "api": {
            "main": "http://35.227.18.245:7076/",
            "test": "http://35.227.18.245:7076/"
        },
        "code": 128,
        "decimals": 10 ** 18,
    },    */
}

export default a;