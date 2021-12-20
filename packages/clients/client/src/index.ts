import Connector from "@eidoo/walletconnect-monorepo/packages/clinets/core";
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
