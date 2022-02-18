import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxContactComponent } from './box-contact.component';

describe('BoxContactComponent', () => {
  let component: BoxContactComponent;
  let fixture: ComponentFixture<BoxContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
