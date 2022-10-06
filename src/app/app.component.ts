import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup ,FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
// import { JeeService } from './jee.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
  user=new FormControl
  allow=new FormGroup({
    user:new FormControl
  })

title = 'fullstack';

  constructor(public http: HttpClientModule){
   
  }



  ngOnInit(){
  }

}
