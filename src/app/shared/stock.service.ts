import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';


@Injectable({
  providedIn: 'root'
})
export class StockService {
  readonly BaseUri = 'https://localhost:36816/api/v1.0/market/Stock';

  constructor(private http:HttpClient) { }

  addStock(stock : Stock){
    return this.http.post(this.BaseUri+'/add/'+stock.CompanyCode, stock);
  }

  getStockByCompanyCode(code : string){
    return this.http.get(this.BaseUri+'/get/'+code);
  }

  getStocks(code : string, sDate : string, eDate : string){
    return this.http.get(this.BaseUri+'/get/'+code+'/'+sDate+'/'+eDate);
  }

  getAverageStock(code : string){
    return this.http.get(this.BaseUri+'/getAvg/'+code);
  }
}
