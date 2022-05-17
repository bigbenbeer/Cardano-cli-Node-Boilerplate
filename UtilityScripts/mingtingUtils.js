const cardano = require("./cardano")

module.exports = {
    getMintScript: function (walletName) {
        // Load the wallet first
        const wallet = cardano.wallet(walletName)

        // Create the mintScript
        const mintScript = {
            keyHash: cardano.addressKeyHash(wallet.name),
            type: "sig"
        }

        return mintScript
    },

    getPolicyID: function (mintScript) {
        return policyId = cardano.transactionPolicyid(mintScript)
    },

    createAssetID: function(policyID, assetName) {
        return String(policyID + '.' + convertToHexa(assetName)) 
    }


}

const convertToHexa = (str = '') => {
    const res = [];
    const { length: len } = str;
    for (let n = 0, l = len; n < l; n++) {
        const hex = Number(str.charCodeAt(n)).toString(16);
        res.push(hex);
    };
    return res.join('');
}
