import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpnTableComponent } from './gpn-table.component';

describe('GpnTableComponent', () => {
  let component: GpnTableComponent;
  let fixture: ComponentFixture<GpnTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpnTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpnTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
