import { HttpClient } from '@angular/common/http';
import { Component,OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
//   dataSource!: MatTableDataSource<any>;
//   title = 'cryptopricetracker';
//   currency='INR';
// displayedColumns: string[] = [ 'name', 'market_cap', 'symbol'];
// newData:Object[]=[];
//   @ViewChild("myPaginator")
//   paginator!: MatPaginator;

//   constructor(private http:HttpClient){

//   }
//   ngOnInit(){
// this.http.get<Object[]>( `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`).subscribe((data)=>{
//   //console.table(data);
  
//   data.map((d:any)=>{
//     const {name,symbol,image,id,market_cap,...rest}=d;
//     this.newData.push({name,symbol,image,id,market_cap});
//   })
//   //console.log(this.newData);
//   this.dataSource=new MatTableDataSource(this.newData);
//    this.dataSource.paginator = this.paginator;

// })
    
//   }

//   showCoin(row:any){
//     console.log(row);
//     this.http.get( `https://api.coingecko.com/api/v3/coins/${row.id}`).subscribe((response:any)=>{
//       console.log(response);
//     })
//   }

ngOnInit(): void {
    
}

  

}
