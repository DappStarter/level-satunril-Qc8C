require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey close off success strong radar spike punch include enter army gauge'; 
let testAccounts = [
"0xd3448b58392dd09c34467f2a0e48c2850e53c2c2561df6f3b9af4a9702e944a6",
"0x476b4de5bc8cc53d0f03e6900be196e3018774eb67f50f59cbb73c7991537f23",
"0xfff6773dc3fffc3deb31e81111417f9e99bcb377e407785c0ab9ad79a6a40465",
"0x25fb58abd3842cc00afa1ff6e4859f105b2ae54f6b4cb824a5ed77e5acd90d83",
"0xce321927da7cb3438516caff329309ba7ed1571911d202d62328fba55ad01ccf",
"0x3071beeaf1cf118c7c8d13497417edadad629ad175d0f2fd250db01ff4173193",
"0x9388cd23f26fbc5cec8556c4161fe83333e08391337b5db38d11f9c2b6375247",
"0x61d07e7c84e4d10b408e5d3baa90b1e98414bf939ca82d86c404e198865c70f8",
"0x0038834ca3521901c25bb2db6f9d858b8e80f98e0556a68e1a4356c36b35bca3",
"0xef8ee2cc6a145097bc4d289887f24f69170555ee12775ad93bc0882ac68c202e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
            version: '^0.8.0'
        }
    }
};

