require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast frame ski stove crawl oil puppy install cloth equal gauge'; 
let testAccounts = [
"0x81cab8e86722248303dea3aeb34481de37eadcfe76a6c29b4d19782c03f15a98",
"0x9f0b8a1382e78fbc9756da186d90186249bf7d3de649b4dd2400c4b3946b288f",
"0x49d2d146fe9abdcc0c31f4c157635bb24fd4319127857b9485e9cf60cae9c941",
"0xb70fae00877d1975feef26dd73266b58139d18704bbb2392dc00a938e6ebf366",
"0x08e14f5f9719c8394b70ed55522c63594f27caadac04db0ca48a4313a7f19a45",
"0x96494edaa0d2015fdd5bd954a001f215463876c8e8eb8b78db2fbbb135c65157",
"0xe1fbeb150d40c9c0935b83c472a7c0a2787a1562136ac33f074e76876a1f1adc",
"0x573b713ba3aca02ffb6774af39e8b9d2c95116b3f79b72a1d1abc1bc459f51c9",
"0x777d582269893b2850bd0620f9a0613d7d28180f19c0c4ca31a1b6df79190a8c",
"0xa7022e3605df51011d6e0174807b9a7cb01c812c4c307dc6da3cdc3bd575f952"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
