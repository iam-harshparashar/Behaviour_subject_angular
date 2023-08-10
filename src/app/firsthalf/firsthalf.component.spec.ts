import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsthalfComponent } from './firsthalf.component';

describe('FirsthalfComponent', () => {
  let component: FirsthalfComponent;
  let fixture: ComponentFixture<FirsthalfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirsthalfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirsthalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
