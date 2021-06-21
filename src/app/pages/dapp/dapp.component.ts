import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import { ToastrService } from 'ngx-toastr';




@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-dapp',
  templateUrl: './dapp.component.html',
  styleUrls: ['./dapp.component.scss']
})
export class DappComponent implements OnInit {

  name = 'World';

  form = new FormGroup({});
  model = { 
    ID: 0,
    prediction_asset: 'USD',
    prediction_price: '',
    post_url: '',
    post_author: 1,
    post_date: '',
    post_excerpt: '',
    post_name: '',
    post_parent: 0,
    post_status: 0,
    post_type: '',
    post_tags: [],
    _post_categories: [],
    _post_tags: [],
    

  };


  fields: FormlyFieldConfig[] = [];

  


  onSubmit() {
    console.log(this.model);
  }


  constructor(    private toastr: ToastrService) {


  }

  public openWallet() {
    console.log("ASD");
  } 


  onClickSubmit(formdata:any) {
    console.log("formdata", formdata);
    this.toastr.error("Error", "Nothing to delete, select atleast 1 item.");

  }



  ngOnInit(): void {


  }



}