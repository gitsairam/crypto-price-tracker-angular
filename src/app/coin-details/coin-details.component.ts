import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { merge } from 'rxjs';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css']
})
export class CoinDetailsComponent implements OnInit {
  coinList:string[]=JSON.parse(localStorage.getItem('coinList')!);
  noCoin:boolean=false;
  responseObj:any={};
  constructor(private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
 
    this.route.paramMap.subscribe((result:any)=>{
      if(this.coinList && this.coinList.includes(result.params.id)){

        this.http.get( `https://api.coingecko.com/api/v3/coins/${result.params.id}`).subscribe((response:any)=>{
          console.log(response);
          this.responseObj=response;
        })
      }
      else{
        this.noCoin=true;

      }

    })
    }

}
