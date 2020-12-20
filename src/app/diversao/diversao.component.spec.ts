import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DiversaoComponent } from './diversao.component';

describe('DiversaoComponent', () => {
  let component: DiversaoComponent;
  let fixture: ComponentFixture<DiversaoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DiversaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
