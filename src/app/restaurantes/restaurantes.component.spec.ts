import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RestaurantesComponent } from './restaurantes.component';

describe('RestaurantesComponent', () => {
  let component: RestaurantesComponent;
  let fixture: ComponentFixture<RestaurantesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
