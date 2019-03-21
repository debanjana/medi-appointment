import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-production-add-new-company',
  templateUrl: './production-add-new-company.page.html',
  styleUrls: ['./production-add-new-company.page.scss'],
})
export class ProductionAddNewCompanyPage implements OnInit {
  name ="";

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log('submitted');
  }
}
