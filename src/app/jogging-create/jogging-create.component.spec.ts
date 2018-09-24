import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoggingCreateComponent } from './jogging-create.component';

describe('JoggingCreateComponent', () => {
  let component: JoggingCreateComponent;
  let fixture: ComponentFixture<JoggingCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoggingCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoggingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
