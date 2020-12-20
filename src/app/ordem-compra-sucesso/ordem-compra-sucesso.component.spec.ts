import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso.component';

describe('OrdemCompraSucessoComponent', () => {
  let component: OrdemCompraSucessoComponent;
  let fixture: ComponentFixture<OrdemCompraSucessoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdemCompraSucessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemCompraSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
