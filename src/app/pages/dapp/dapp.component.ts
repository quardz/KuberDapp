import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



 // Unpkg imports
declare var Web3: any;
declare var Web3Modal: any;
declare var WalletConnectProvider: any;
declare var Fortmatic: any;
declare var evmChains: any;

//const web3 = window.Web3;
//const Web3Modal = window.Web3Modal.default;
//const WalletConnectProvider = window.WalletConnectProvider.default;
//const Fortmatic = window.Fortmatic;
//const evmChains = window.evmChains;

// Web3modal instance
//let web3Modal

// Chosen wallet provider given by the dialog window
//let provider;


// Address of the selected account
//let selectedAccount;


@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-dapp',
  templateUrl: './dapp.component.html',
  styleUrls: ['./dapp.component.scss']
})
export class DappComponent implements OnInit {

  name = 'World';


  constructor() { 

  }

  public async openWallet() {
    var _WalletConnectProvider = WalletConnectProvider.default;
    var _Web3Modal = Web3Modal.default;
    
    const providerOptions = {
      walletconnect: {
        package: _WalletConnectProvider,
        options: {
          infuraId: "434b1b1b6da24d7b9ea4b49287e72d8e",
        }
      }
    };

    
    var web3Modal = new _Web3Modal({
      cacheProvider: false, // optional
      providerOptions, // required
      disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    });
    
    const provider = await web3Modal.connect();

    console.log("Web3Modal instance is", provider);

    
  }


  ngOnInit(): void {



/**
 * Setup the orchestra
 */

 /*

  console.log("Initializing example");
  console.log("WalletConnectProvider is", WalletConnectProvider);
  //console.log("Fortmatic is", Fortmatic);
  //console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);

  // Check that the web page is run in a secure context,
  // as otherwise MetaMask won't be available
  if(location.protocol !== 'https:') {
    // https://ethereum.stackexchange.com/a/62217/620
  }

  // Tell Web3modal what providers we have available.
  // Built-in web browser provider (only one can exist as a time)
  // like MetaMask, Brave or Opera is added automatically by Web3modal
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        // Mikko's test key - don't copy as your mileage may vary
        infuraId: "434b1b1b6da24d7b9ea4b49287e72d8e",
      }
    },
  };

  web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: true, // optional. For MetaMask / Brave / Opera.
  });

  console.log("Web3Modal instance is", web3Modal);

  */
}



}