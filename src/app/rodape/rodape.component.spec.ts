import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RodapeComponent } from './rodape.component';

describe('RodapeComponent', () => {
  let component: RodapeComponent;
  let fixture: ComponentFixture<RodapeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RodapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RodapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
