import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageReceivedComponent } from './message-received.component';

describe('MessageReceivedComponent', () => {
  let component: MessageReceivedComponent;
  let fixture: ComponentFixture<MessageReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageReceivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
