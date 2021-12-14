import HttpConnection from "@walletconnect/http-connection";
import { IRPCMap, IConnector, IJsonRpcResponseSuccess, IWalletConnectProviderOptions, IQRCodeModalOptions } from "@walletconnect/types";
declare class WalletConnectProvider {
    bridge: string;
    qrcode: boolean;
    qrcodeModal: {
        open: (uri: string, cb: any, qrcodeModalOptions?: IQRCodeModalOptions | undefined) => void;
        close: () => void;
    };
    qrcodeModalOptions: IQRCodeModalOptions | undefined;
    rpc: IRPCMap | null;
    infuraId: string;
    http: HttpConnection | null;
    wc: IConnector;
    isConnecting: boolean;
    connected: boolean;
    connectCallbacks: any[];
    accounts: string[];
    chainId: number;
    chainIds: Map<string, number>;
    rpcUrl: string;
    providers: {};
    event: any;
    constructor(opts: IWalletConnectProviderOptions);
    get isWalletConnect(): boolean;
    get connector(): IConnector;
    get walletMeta(): import("@walletconnect/types").IClientMeta | null;
    enable: () => Promise<string[]>;
    setRpcProvider: (_chainId: number) => Promise<void>;
    request: (payload: any, _chainId: number) => Promise<any>;
    send: (payload: any, _chainId: number, callback?: any) => Promise<any>;
    onConnect: (callback: any) => void;
    triggerConnect: (result: any) => void;
    disconnect(): Promise<void>;
    close(): Promise<void>;
    handleRequest(payload: any, _chainId: number): Promise<any>;
    handleOtherRequests(payload: any, _chainId: number): Promise<IJsonRpcResponseSuccess>;
    handleReadRequests(payload: any, _chainId: number): Promise<IJsonRpcResponseSuccess>;
    formatResponse(payload: any, result: any): {
        id: any;
        jsonrpc: any;
        result: any;
    };
    getWalletConnector(opts?: {
        disableSessionCreation?: boolean;
    }): Promise<IConnector>;
    subscribeWalletConnector(): Promise<void>;
    onDisconnect(): Promise<void>;
    updateState(sessionParams: any): Promise<void>;
    updateRpcUrl(_chainId: number, _rpcUrl?: string | undefined): void;
    updateHttpConnection(_chainId: number, _rpcUrl: any): void;
    sendAsyncPromise(method: string, params: any, _chainId: number): Promise<any>;
    initialize(_chainId: number, _rpcUrl?: string | undefined): void;
    private configWallet;
}
export default WalletConnectProvider;
//# sourceMappingURL=index.d.ts.map