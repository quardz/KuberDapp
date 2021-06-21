import { Component, OnInit } from '@angular/core';
import { W3Service } from '../../services/w3.service';
import { W3apiService } from '../../services/w3api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isConnected = false;

  constructor(
    private w3s: W3Service,
    private w3api: W3apiService,
    ) { 
    this.isConnected = this.w3s.isConnected();
  }

  ngOnInit(): void {
  }

  public connectAccount() {
    this.w3s.connectAccount();
    this.isConnected = this.w3s.isConnected();
    console.log("account c");
  } 

  public disconnectAccount() {
    this.isConnected = this.w3s.isConnected();
    this.w3s.disconnectAccount();
  } 
}
