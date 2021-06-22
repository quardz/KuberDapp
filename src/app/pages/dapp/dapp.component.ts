import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
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

  dateModel: Date = new Date();

  stringDateModel: string = new Date().toString();

  model = { 
    ID: 0,
    prediction_asset: 'USD',
    prediction_price: '',
  };


  fields: FormlyFieldConfig[] = [];

  ngOnInit(): void {
    this.form = new FormGroup({
      activeEndDate:  new FormControl(new Date(), {validators: [Validators.required, DateTimeValidator]})
    }, { updateOn: 'change' });
  }


  


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
    this.toastr.success("Error", "Its in development.");

  }
}


export const DateTimeValidator = (fc: FormControl) => {
    const date = new Date(fc.value);
    const isValid = !isNaN(date.valueOf());
    return isValid ? null : {
        isValid: {
            valid: false
        }
    };
};