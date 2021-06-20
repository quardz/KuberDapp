import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-dapp',
  templateUrl: './dapp.component.html',
  styleUrls: ['./dapp.component.scss']
})
export class DappComponent implements OnInit {

  name = 'World';


  constructor() { }

  ngOnInit(): void {
  }

}
