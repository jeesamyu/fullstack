import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormControl , FormGroup, Validators } from '@angular/forms';
import { passvalidation } from '../login/login.directive'



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  [x: string]: any;

  totalform!: FormGroup;
  submitted=false;
 

  
constructor(private builder: FormBuilder) {}

ngOnInit() {

  this.totalform = this.builder.group({

    firstName: new FormControl('',[Validators.required ]),

    lastName: new FormControl('',[Validators.required]),

    phone: new FormControl('',[Validators.required,Validators.minLength(10) ]),

    dob : new FormControl('',[Validators.required]),

    images : new FormControl('',[Validators.required]),

    emails: new FormControl('',[Validators.required]),

  }, 
    );
  }

  PassWord=new FormGroup({
    passbox1: new FormControl('',[Validators.required,Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!--])/) ]),
    passbox2 : new FormControl('',[Validators.required]) 
  },
    [passvalidation.MatchValidator( 'passbox1' , 'passbox2' )]
  );

  get passwordMatchError(){
    return (
      this.PassWord.getError('mismatch') && 
      this.PassWord.get('passbox2')?.touched
    )
  }

  callingFunction() {
    this.submitted=true

    if( this.totalform.invalid , this.PassWord.invalid ){
      return this.submitted=false
    }else{
      return console.log(this.totalform.value) , console.log(this.PassWord.value)
    }
    
    
    
   }

  }
