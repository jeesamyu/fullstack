import { Component, OnInit } from "@angular/core"
import { FormControl,FormGroup,Validators } from "@angular/forms";
import { passvalidation } from "./login.directive";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passwordbox1=new FormControl('',[Validators.required])

  passfrom= new FormGroup(
    {
      password1: new FormControl('',[Validators.required,Validators.minLength(6)]),
      password2: new FormControl('',[Validators.required]),

    },
    [passvalidation.MatchValidator( 'password1' , 'password2' )]
  );

  get passwordMatchError(){
    return (
      this.passfrom.getError('mismatch') && 
      this.passfrom.get('password2')?.touched
    )
  }
  // ,Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!-*])/) 


  firstname = new FormControl('', [Validators.required , Validators.maxLength(20)]);
  lastname = new FormControl('',[Validators.required,Validators.maxLength(20)]);
  phone = new FormControl('',[Validators.required , Validators.maxLength(15)]);
  email = new FormControl ('',[Validators.required,Validators.email]);
  pass = new FormControl ('',[Validators.required ,Validators.minLength(6)]);
  pass2 = new FormControl ('',[Validators.required])

consol(){

}

  constructor() {
   }

ngOnInit(){
  }

    
}






