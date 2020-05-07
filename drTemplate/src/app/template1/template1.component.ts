import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css']
})
export class Template1Component implements OnInit {

  constructor(public http:HttpClient) { }

  // dataUrl = "https://www.ziffytech.com/doctor/get_doctor_list";

  ngOnInit() {
    // this.http.get(this.dataUrl).subscribe((data:any) => {console.log('data',data);});
  }

  doctorList=[{
    "ID":1,
    "FirstName":'Satish',
    "LastName":'Patange',
    "Exp":'12',
    "Degree":'BDS (Dental Surgeon)'
  },{
    "ID":2,
    "FirstName":'Krushna',
    "LastName":'Mohalkar',
    "Exp":'12',
    "Degree":'BDS (Dental Surgeon)'
  },{
    "ID":1,
    "FirstName":'Nilamma',
    "LastName":'Patange',
    "Exp":'12',
    "Degree":'BDS (Dental Surgeon)'
  },{
    "ID":1,
    "FirstName":'Satish',
    "LastName":'Patange',
    "Exp":'12',
    "Degree":'BDS (Dental Surgeon)'
  }];

  collectedData(event){
    console.log(event);
  }
}
