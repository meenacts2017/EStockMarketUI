import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  readonly BaseUri = 'https://localhost:44395/api/v1.0/market/Company';

  constructor(private http:HttpClient) { }

getCompanyList():Observable<any[]>{
  return this.http.get<any>(this.BaseUri+'/info/getAll');
}

getCompanyByCompanyCode(code: string) {
  return this.http.get(this.BaseUri+'/info/'+code);
}

registerCompany(company : Company){
  return this.http.post(this.BaseUri+'/register',company);
}

deleteCompany(code : string){
  return this.http.delete(this.BaseUri+'/delete/'+code);
}
}
