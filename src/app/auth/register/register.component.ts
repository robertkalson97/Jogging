import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  firstName:string='';
  lastName:string='';
  username:string='';
  password:string='';

  constructor(private router: Router, private api: UserService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'username' : [null, Validators.required],
      'password' : [null, Validators.required],
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.register(form)
      .subscribe(res => {
        //   let id = res['_id'];
          this.router.navigate(['/login']);
        }, (err) => {
          console.log(err);
        });
  }
}
