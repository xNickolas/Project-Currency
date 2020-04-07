import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DollarComponent } from './dollar.component';

describe('DollarComponent', () => {
  let component: DollarComponent;
  let fixture: ComponentFixture<DollarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DollarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DollarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
