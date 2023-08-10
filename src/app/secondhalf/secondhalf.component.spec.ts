import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondhalfComponent } from './secondhalf.component';

describe('SecondhalfComponent', () => {
  let component: SecondhalfComponent;
  let fixture: ComponentFixture<SecondhalfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondhalfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondhalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
