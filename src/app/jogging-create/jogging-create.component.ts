import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-jogging-create',
  templateUrl: './jogging-create.component.html',
  styleUrls: ['./jogging-create.component.css']
})
export class JoggingCreateComponent implements OnInit {

  joggingForm: FormGroup;
  distance:string='';
  title:string='';
  speed:string='';
  enddate:string='';
  comment:string='';
  published_year:string='';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.joggingForm = this.formBuilder.group({
      'distance' : [null, Validators.required],
      'title' : [null, Validators.required],
      'speed' : [null, Validators.required],
      'enddate' : [null, Validators.required],
      'comment' : [null, Validators.required],
      'published_year' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.postJogging(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/jogging-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
