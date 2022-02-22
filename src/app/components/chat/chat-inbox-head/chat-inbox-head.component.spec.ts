import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatInboxHeadComponent } from './chat-inbox-head.component';

describe('ChatInboxHeadComponent', () => {
  let component: ChatInboxHeadComponent;
  let fixture: ComponentFixture<ChatInboxHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatInboxHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatInboxHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
