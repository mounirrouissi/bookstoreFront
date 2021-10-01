import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlSliderComponent } from './owl-slider.component';

describe('OwlSliderComponent', () => {
  let component: OwlSliderComponent;
  let fixture: ComponentFixture<OwlSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
