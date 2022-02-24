import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  person : any;

  constructor(private homeService:HomeService,private router:Router) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.homeService.findAll().subscribe(data=>{
      this.person = data.data;
      console.log(this.person);
    });
  }

  remove(e:any){
    this.homeService.deletePerson(e.id).subscribe(res =>{
      alert("Employee Data Deleted..!")
    })
  }

  update(id : number){
    this.router.navigate(['/update',id])
  }

}
