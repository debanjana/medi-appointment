import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DoctorHomePageModule } from '../doctor-home/doctor-home.module';
import { Observable } from 'rxjs';
import { Paitent } from '../model/paitent';
import { map } from 'rxjs/operators'
import { ParserError } from '@angular/compiler';

@Injectable()
export class ConfigService {
    paitentList = [];
    constructor(private http: HttpClient) { }

    // getPaitent(): Observable<Paitent[]> {
    //     return this.http.get('http://localhost:3000/paitent').pipe(
    //         map((response => {
    //             return response as Paitent[]

    //         })));
    // }

    getDoctors() : Observable<any> {
        return this.http.get('http://localhost:8080', { responseType : 'json'}).pipe(
            map((response => {
                var parsedResponse = JSON.parse(JSON.stringify(response));
                console.log(JSON.parse(JSON.stringify(response)));
                console.log (parsedResponse.Doctors )

                return parsedResponse.Doctors.mDPPC8bn5JEJDrrr;

            })));
    }

}

