import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider
} from 'angular-6-social-login';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  username:string='';
  password:string='';

  constructor(private router: Router, private api: UserService, private formBuilder: FormBuilder, private socialAuthService: AuthService) { }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.api.googleuser(userData).subscribe(result=>{
          localStorage.setItem('token',JSON.stringify(result));
          this.router.navigateByUrl('/jogging');
          console.log(result)
        })
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        // ...
            
      }
    );
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username' : [null, Validators.required],
      'password' : [null, Validators.required],
    });
  }

  onFormSubmit(form:NgForm) {
    const that = this;
    this.api.login(form)
      .subscribe(res => {
          that.router.navigate(['/joggings']);
        }, (err) => {
          console.log(err);
        });
  }
}
