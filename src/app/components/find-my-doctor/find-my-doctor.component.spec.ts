import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMyDoctorComponent } from './find-my-doctor.component';

describe('FindMyDoctorComponent', () => {
  let component: FindMyDoctorComponent;
  let fixture: ComponentFixture<FindMyDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindMyDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindMyDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
