"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const esm_1 = (0, tslib_1.__importDefault)(require("./../../core/dist/esm"));
const cryptoLib = (0, tslib_1.__importStar)(require("@walletconnect/iso-crypto"));
class WalletConnect extends esm_1.default {
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