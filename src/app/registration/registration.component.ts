import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  // registrationForm = new FormGroup({
  //   username:new FormControl(''),
  //   password:new FormControl(''),
  //   confirompassword: new FormControl(''),
  //   address:new FormGroup({
  //     city:new FormControl(''),
  //     state:new FormControl(''),
  //     postalcode:new FormControl('')
  //   })
  // })

  registrationForm= this.fb.group({
    username:['Abhishek'],
    password:["Abhi123"],
    confirompassword:["Abhi123"],
    address:this.fb.group({
      city:["Nagpur"],
      state:["Nagpur"],
      postalcode:[12345]
    })
  })

  // loadApiData(){
  //   this.registrationForm.patchValue({
  //     username:'Abhi',
  //     password:'Abhi123',
  //     confirompassword:'Abhi123',
  //     // address:{
  //     //   city:'Nagpur',
  //     //   state:'Maharashtra',
  //     //   postalcode:7786

  //     // }
  //   })
  // }

  ngOnInit(): void {
  }

}
