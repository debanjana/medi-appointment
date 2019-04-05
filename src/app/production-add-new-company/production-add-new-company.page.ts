import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-production-add-new-company',
  templateUrl: './production-add-new-company.page.html',
  styleUrls: ['./production-add-new-company.page.scss'],
})
export class ProductionAddNewCompanyPage implements OnInit {
  name ="";

  constructor(private http : HttpClient) { }

  ngOnInit() {
this.initializeApp();
  }
  onSubmit(){
    console.log('submitted');
  }
  initializeApp(){
    console.log('on init called');
    this.http.get('http://localhost:8080/').subscribe((response) => {
      console.log(response);
    });
  }
}
