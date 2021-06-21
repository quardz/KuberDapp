import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

 // Unpkg imports
declare var Web3: any;
declare var Web3Modal: any;
declare var WalletConnectProvider: any;
declare var Fortmatic: any;
declare var evmChains: any;


@Injectable({
  providedIn: 'root'
})

export class W3Service {

  web3js: any;
  provider: any;

  accounts: any;
  dWalletConnectProvider: any;
  dWeb3Modal: any;

  _isConnected: boolean

  private accountStatusSource = new Subject<any>();
  accountStatus$ = this.accountStatusSource.asObservable();


  constructor() { 

    var _WalletConnectProvider = WalletConnectProvider.default;
    var _Web3Modal = Web3Modal.default;

    this._isConnected = false;

    const providerOptions = {
      walletconnect: {
        package: _WalletConnectProvider, // required
        options: {
          infuraId: "434b1b1b6da24d7b9ea4b49287e72d8e" // required
        }
      }
    };

    this.dWeb3Modal = new _Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
      theme: {
        background: "rgb(39, 49, 56)",
        main: "rgb(199, 199, 199)",
        secondary: "rgb(136, 136, 136)",
        border: "rgba(195, 195, 195, 0.14)",
        hover: "rgb(16, 26, 32)"
      }
    });
  }

  async load() {
    return [1,2,3,4];
  }

  //connect to the network
  async connectAccount() {

    this.provider = await this.dWeb3Modal.connect(); // set provider
    this.web3js = new Web3(this.provider); // create web3 instance
    this.accounts = await this.web3js.eth.getAccounts(); 
    console.log("connected accounts :: ", this.accounts);
    if(this.accounts) {
      this._isConnected = true;
    }
    return this.accounts;
  }

  public isConnected() {
    return this._isConnected;
  }

  public getAccount(first = false){
    return this.accounts;  
  }

  async disconnectAccount() {
    // TODO: Which providers have close method?
    if(this.provider && this.provider.close) {
      await this.provider.close();

      // If the cached provider is not cleared,
      // WalletConnect will default to the existing session
      // and does not allow to re-scan the QR code with a new wallet.
      // Depending on your use case you may want or want not his behavior.
      await this.dWeb3Modal.clearCachedProvider();
      this.provider = false;
      
    }
    this._isConnected = false;
  }

}
