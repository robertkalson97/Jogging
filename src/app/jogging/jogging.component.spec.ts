import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoggingComponent } from './jogging.component';

describe('JoggingComponent', () => {
  let component: JoggingComponent;
  let fixture: ComponentFixture<JoggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
