import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jogging',
  templateUrl: './jogging.component.html',
  styleUrls: ['./jogging.component.css']
})
export class JoggingComponent implements OnInit {

  joggings: any;
  displayedColumns = ['distance', 'title', 'enddate', 'speed', 'comment'];
  dataSource = new JoggingDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getJoggings()
      .subscribe(res => {
        console.log(res);
        this.joggings = res;
      }, err => {
        console.log(err);
      });
  }
}

export class JoggingDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getJoggings();
  }

  disconnect() {

  }
}
