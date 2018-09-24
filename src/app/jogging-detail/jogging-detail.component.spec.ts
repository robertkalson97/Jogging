import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoggingDetailComponent } from './jogging-detail.component';

describe('JoggingDetailComponent', () => {
  let component: JoggingDetailComponent;
  let fixture: ComponentFixture<JoggingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoggingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoggingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
