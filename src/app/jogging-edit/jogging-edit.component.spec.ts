import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoggingEditComponent } from './jogging-edit.component';

describe('JoggingEditComponent', () => {
  let component: JoggingEditComponent;
  let fixture: ComponentFixture<JoggingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoggingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoggingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
