import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  showupdate :boolean =false;
  id : any;

  constructor(private formBuilder : FormBuilder,private router:Router,private homeService:HomeService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.id = params.get('id');
      if(this.id){
        this.getPerson(this.id);
      }
    })
  }

  personForm = new FormGroup({
    firstName: new FormControl(''),
    lastName : new FormControl(''),
    gender : new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    country: new FormControl('')  
  });

  savePerson(){

    this.homeService.createPerson(this.personForm.value).subscribe(response=> {
      console.log(response);
      console.log(this.personForm.value);
     
    });
    this.router.navigate(['']);

  }

  getPerson(id:any){
    this.homeService.getPerson(id).subscribe((person:any) => this.updateEmployee(person)
    );
  }

  updateEmployee(person : any){
    this.showupdate = true;
    this.personForm.patchValue({
      firstName : person.data.firstName,
      lastName : person.data.lastName,
      gender : person.data.gender,
      phoneNumber : person.data.phoneNumber,
      email : person.data.email,
      address : person.data.address,
      city : person.data.city,
      country : person.data.country
      

    });
  }

  update(){
    this.homeService.updatePerson(this.id,this.personForm.value).subscribe(response=> {
      console.log(response);
      console.log(this.personForm.value);
     
    });
    this.router.navigate(['']);
  }

}
