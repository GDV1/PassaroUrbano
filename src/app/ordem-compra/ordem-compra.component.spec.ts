import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrdemCompraComponent } from './ordem-compra.component';

describe('OrdemCompraComponent', () => {
  let component: OrdemCompraComponent;
  let fixture: ComponentFixture<OrdemCompraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdemCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
