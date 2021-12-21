"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = (0, tslib_1.__importDefault)(require("@eidoo/walletconnect-monorepo/packages/clients/core"));
const cryptoLib = (0, tslib_1.__importStar)(require("@walletconnect/iso-crypto"));
class WalletConnect extends core_1.default {
    constructor(connectorOpts, pushServerOpts) {
        super({
            cryptoLib,
            connectorOpts,
            pushServerOpts,
        });
    }
}
exports.default = WalletConnect;
//# sourceMappingURL=index.js.map