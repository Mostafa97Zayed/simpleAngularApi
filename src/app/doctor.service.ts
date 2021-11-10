import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { doctor } from "./doctor";
import { HttpClient } from '@angular/common/http'
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})

export class doctorService{
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getDoctors(): Observable<doctor[]>
    {
        return this.http.get<doctor[]>(`${this.apiServerUrl}/doctor`);
    }
    public addDoctor(doctor: doctor): Observable<doctor>{
        return this.http.post<doctor>(`${this.apiServerUrl}/doctor/add`, doctor);
    }

    public updateDoctor(doctor: doctor): Observable<doctor>{
        return this.http.put<doctor>(`${this.apiServerUrl}/doctor/update`,doctor);
    }
    public deleteDoctor(doctorId: number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/doctor/delete/${doctorId}`);
    }
}