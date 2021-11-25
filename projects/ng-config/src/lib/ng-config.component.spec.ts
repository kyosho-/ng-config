import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgConfigComponent } from './ng-config.component';

describe('NgConfigComponent', () => {
  let component: NgConfigComponent;
  let fixture: ComponentFixture<NgConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
