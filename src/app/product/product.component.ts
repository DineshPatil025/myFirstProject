import { Component } from "@angular/core";
import { Istudent } from "../models/students";
import { Iemployee } from "../models/employee";




@Component({
    selector: "product-root",
    templateUrl: "./product.component.html",
    styleUrls: ["./product.component.scss"]

})
export class ProductComponent {
    pName: string = "samsung"
    pId: string = "p-123"
    products: Array<string> = ["product1", "product2", "product3", "product3", "product4", "product5"];
    title: string = "student information"
    students: Array<Istudent> = [
        {
            stdName: "student1",
            stdAge: 11,
            stdContact: 111111,
            stdClass: "1",
        },
        {
            stdName: "student2",
            stdAge: 12,
            stdContact: 111112,
            stdClass: "2",
        },  {
            stdName: "student3",
            stdAge: 13,
            stdContact: 111113,
            stdClass: "3",
        },  {
            stdName: "student4",
            stdAge: 14,
            stdContact: 111114,
            stdClass: "4",
        },  {
            stdName: "student5",
            stdAge: 15,
            stdContact: 111115,
            stdClass: "5",
        }
    ]
    empDetails : Array<Iemployee> = [

        {
            empName : "employe1",
            empDept : "department1",
            empEmail : "email@1",
            empContact : 1111
        },
        {
            empName : "employe2",
            empDept : "department2",
            empEmail : "email@2",
            empContact : 1112
        },
        {
            empName : "employe3",
            empDept : "department3",
            empEmail : "email@3",
            empContact : 1113
        },
        {
            empName : "employe4",
            empDept : "department4",
            empEmail : "email@4",
            empContact : 1114
        },
        {
            empName : "employe5",
            empDept : "department5",
            empEmail : "email@5",
            empContact : 1115
        }
    ]
}

