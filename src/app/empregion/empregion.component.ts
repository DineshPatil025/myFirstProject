import { Component } from '@angular/core';
import { Iempregiondetails } from '../models/empregiondetails';

@Component({
  selector: 'empregion-root',
  templateUrl: './empregion.component.html',
  styleUrls: ['./empregion.component.scss']
})
export class EmpRegionComponent {

    empregionheaders :Array<string> = ["ID", "Name", "Age", "Gender", "Country"];

  empregionrows : Array<Iempregiondetails>= [
    {
      ID : "1",
      Name : "Rahul",
      Age : "21",
      Gender : "Male",
      Country : "India"
    },
    {
      ID : "2",
      Name : "Ajay",
      Age : "25",
      Gender : "Male",
      Country : "India"
    },
    {
      ID : "3",
      Name : "Vikram",
      Age : "31",
      Gender : "Male",
      Country : "Australia"
    },
    {
      ID : "4",
      Name : "Riya",
      Age : "20",
      Gender : "Female",
      Country : "India"
    },
    {
      ID : "5",
      Name : "John",
      Age : "23",
      Gender : "Male",
      Country : "USA"
    },
    {
      ID : "6",
      Name : "Raman",
      Age : "27",
      Gender : "Male",
      Country : "India"
    },
    {
      ID : "7",
      Name : "Mohan",
      Age : "39",
      Gender : "Male",
      Country : "India"
    },
    {
      ID : "8",
      Name : "Shreya",
      Age : "21",
      Gender : "Female",
      Country : "India"
    }
  ]

}