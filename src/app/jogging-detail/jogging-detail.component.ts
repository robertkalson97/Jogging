import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-jogging-detail',
  templateUrl: './jogging-detail.component.html',
  styleUrls: ['./jogging-detail.component.css']
})
export class JoggingDetailComponent implements OnInit {

  jogging = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getJoggingDetails(this.route.snapshot.params['id']);
  }

  getJoggingDetails(id) {
    this.api.getJogging(id)
      .subscribe(data => {
        console.log(data);
        this.jogging = data;
      });
  }

  deleteJogging(id) {
    this.api.deleteJogging(id)
      .subscribe(res => {
          this.router.navigate(['/joggings']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
