import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paitent } from '../model/paitent';
import { map } from 'rxjs/operators';
import { ConfigService } from '../service/config.service';
import { DoctorHomePageModule } from './doctor-home.module';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.page.html',
  styleUrls: ['./doctor-home.page.scss'],
})
export class DoctorHomePage implements OnInit {

  doctorDetails;

  constructor(private userService : UserService, private configService : ConfigService) { 
    userService.currentUser = "doctor"
  }

  ngOnInit() {
    // get paitent list and display
  this.showPaitents();

  }

//   getPaitents(): Observable<Paitent[]> {
//  let url : "http://localhost:3000/paitent";
//  return this.httpClient.get("http://localhost:3000/paitent").pipe(map((response =>{
//    return response as Paitent[] 
//  })))
//  }
showPaitents() {
  this.configService.getDoctors().subscribe((data)=>{
  this.doctorDetails = data;
  console.log(this.doctorDetails);

    });
  }

}



