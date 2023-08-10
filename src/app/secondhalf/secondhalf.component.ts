import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-secondhalf',
  templateUrl: './secondhalf.component.html',
  styleUrls: ['./secondhalf.component.css']
})
export class SecondhalfComponent implements OnInit {
  data: any=[] ;
  v = "ParaShar";
 searchText: any;
 public filter:string;
 user:any=[];
 filterTerm:any;

 allData:{FirstName:string,MiddleName:string,LastName:string,PhoneNumber:any,EmailId:any}[]=[
 ];



  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.sendData().subscribe((res)=>{
      this.data=res;
      this.allData.push(this.data);
      console.log(this.data);
    })
  }
  // enterdSearchValue:string ='';
  // @Output()
  // searchTextChanged:EventEmitter<string> = new EventEmitter<string>();

  // OnSearchTextChanged(){
  //   this.searchTextChanged.emit(this.enterdSearchValue);
  // }

}
