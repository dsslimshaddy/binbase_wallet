import { runInAction, observable, action } from 'mobx';
import { allcoins, isTestnet, config } from 'app/constants';
import OmniJs from "app/omnijs/omnijs";

export class CoinStore {
    @observable keys: any;
    @observable balances: any;
    @observable mnemonic: string;
    @observable passphrase: string;

    constructor() {
        this.keys = {};
        this.balances = {};
        this.mnemonic = "connect ritual news sand rapid scale behind swamp damp brief explain ankle";
        this.passphrase = "";

        this.generateKeys();
    }

    @action
    generateKeys = () => {
        allcoins.map(o=>{
            const omni = new OmniJs(o, isTestnet, config);
            
            const seedBase = omni.generateSeed(this.mnemonic, this.passphrase)
            const k = omni.generatePKey(seedBase.seed)
            
            this.keys[o] = k;
            this.mnemonic = seedBase.mnemonic;
        })
        this.syncBalances();
    }
    @action
    syncBalances = () => {
        allcoins.map(async o=>{
            const omni = new OmniJs(o, isTestnet, config);

            const balances = await omni.getBalance(this.keys[o].address);
            runInAction(() => {
                Object.keys(balances).map(o=>{
                    this.balances[o] = balances[o];
                })
            });            
        });
    }
}

export default CoinStore;
