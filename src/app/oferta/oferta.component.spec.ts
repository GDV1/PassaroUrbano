import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OfertaComponent } from './oferta.component';

describe('OfertaComponent', () => {
  let component: OfertaComponent;
  let fixture: ComponentFixture<OfertaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
