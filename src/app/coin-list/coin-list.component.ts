import { HttpClient } from '@angular/common/http';
import { Component,OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css']
})
export class CoinListComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  title = 'cryptopricetracker';
  currency='INR';
displayedColumns: string[] = [ 'name', 'market_cap', 'symbol'];
newData:Object[]=[];
  @ViewChild("myPaginator")
  paginator!: MatPaginator;

  constructor(private http:HttpClient,private router:Router){

  }
  ngOnInit(){
this.http.get<Object[]>( `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`).subscribe((data)=>{
  //console.table(data);
  
  data.map((d:any)=>{
    const {name,symbol,image,id,market_cap,...rest}=d;
    this.newData.push({name,symbol,image,id,market_cap});
  })
  //console.log(this.newData);
  this.dataSource=new MatTableDataSource(this.newData);
   this.dataSource.paginator = this.paginator;

})
    
  }

  showCoin(row:any){
  //   console.log(row);
  //   this.http.get( `https://api.coingecko.com/api/v3/coins/${row.id}`).subscribe((response:any)=>{
  //     console.log(response);
  //   })
  // }
  this.router.navigate(['coin',row.id]);

  }

  


}
