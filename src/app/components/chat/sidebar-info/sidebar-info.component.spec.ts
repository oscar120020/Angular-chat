import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarInfoComponent } from './sidebar-info.component';

describe('SidebarInfoComponent', () => {
  let component: SidebarInfoComponent;
  let fixture: ComponentFixture<SidebarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
