import Connector from "./../../core/dist/esm";
import { IWalletConnectOptions, IPushServerOptions } from "@walletconnect/types";
import * as cryptoLib from "@walletconnect/iso-crypto";
class WalletConnect extends Connector {
  constructor(connectorOpts: IWalletConnectOptions, pushServerOpts?: IPushServerOptions) {
    super({
      cryptoLib,
      connectorOpts,
      pushServerOpts,
    });
  }
}

export default WalletConnect;
