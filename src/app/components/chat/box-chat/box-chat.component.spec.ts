import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxChatComponent } from './box-chat.component';

describe('BoxChatComponent', () => {
  let component: BoxChatComponent;
  let fixture: ComponentFixture<BoxChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
