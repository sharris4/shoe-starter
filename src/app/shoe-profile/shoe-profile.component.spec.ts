import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeProfileComponent } from './shoe-profile.component';

describe('ShoeProfileComponent', () => {
  let component: ShoeProfileComponent;
  let fixture: ComponentFixture<ShoeProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoeProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
