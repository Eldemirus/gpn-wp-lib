import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpnWpLibComponent } from './gpn-wp-lib.component';

describe('GpnWpLibComponent', () => {
  let component: GpnWpLibComponent;
  let fixture: ComponentFixture<GpnWpLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpnWpLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpnWpLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
