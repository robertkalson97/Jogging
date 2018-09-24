import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-jogging-edit',
  templateUrl: './jogging-edit.component.html',
  styleUrls: ['./jogging-edit.component.css']
})
export class JoggingEditComponent implements OnInit {

  joggingForm: FormGroup;
  id:string = '';
  distance:string = '';
  title:string = '';
  speed:string = '';
  enddate:string = '';
  comment:string = '';
  published_year:string = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getJogging(this.route.snapshot.params['id']);
    this.joggingForm = this.formBuilder.group({
      'distance' : [null, Validators.required],
      'title' : [null, Validators.required],
      'speed' : [null, Validators.required],
      'enddate' : [null, Validators.required],
      'comment' : [null, Validators.required],
      'published_year' : [null, Validators.required]
    });
  }

  getJogging(id) {
    this.api.getJogging(id).subscribe(data => {
      this.id = data._id;
      this.joggingForm.setValue({
        distance: data.distance,
        title: data.title,
        speed: data.speed,
        enddate: data.enddate,
        comment: data.comment,
        published_year: data.published_year
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.updateJogging(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/jogging-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  joggingDetails() {
    this.router.navigate(['/jogging-details', this.id]);
  }
}
