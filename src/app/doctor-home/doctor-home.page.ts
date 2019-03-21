import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paitent } from '../model/paitent';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.page.html',
  styleUrls: ['./doctor-home.page.scss'],
})
export class DoctorHomePage implements OnInit {

  constructor(private userService : UserService, private httpClient: HttpClient) { 
    userService.currentUser = "doctor"
  }

  ngOnInit() {
    // get paitent list and display
  this.getPaitents().subscribe(data=>{
     console.log (typeof(data));
  })

  }

  getPaitents(): Observable<Paitent[]> {
 let url : "http://localhost:3000/paitent";
 return this.httpClient.get("http://localhost:3000/paitent").pipe(map((response =>{
   return response as Paitent[] 
 })))
 }

  }

