import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from './shared/company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedValue: any;
  CompanyList : any;
  title = 'EStockMarket';

  searchCompany(e:any){
    if (e.target.value > 0) {
      this.router.navigate(['company/', e.target.value])
        .then(() => {
          window.location.reload();
        });
    }
  }

  constructor(private service : CompanyService, private router: Router){}

  ngOnInit(): void{
    this.service.getCompanyList().subscribe((data: any) => {
      this.CompanyList = data;
      console.log(data);
    });
  }
}
