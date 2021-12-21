import Connector from "@eidoo/walletconnect-monorepo/packages/clients/core";
import * as cryptoLib from "@walletconnect/iso-crypto";
class WalletConnect extends Connector {
    constructor(connectorOpts, pushServerOpts) {
        super({
            cryptoLib,
            connectorOpts,
            pushServerOpts,
        });
    }
}
export default WalletConnect;
//# sourceMappingURL=index.js.map