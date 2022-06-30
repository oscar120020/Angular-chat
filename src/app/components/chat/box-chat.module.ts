import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoxChatComponent } from './box-chat.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { ChatInboxHeadComponent } from './chat-inbox-head/chat-inbox-head.component';
import { ChatInfoComponent } from './chat-info/chat-info.component';
import { MessageCardComponent } from './message-card/message-card.component';
import { MessageReceivedComponent } from './message-received/message-received.component';
import { MessageSentComponent } from './message-sent/message-sent.component';
import { SearchMessageFormComponent } from './search-message-form/search-message-form.component';
import { SearchMessageHeadComponent } from './search-message-head/search-message-head.component';
import { SearchMessageResultsComponent } from './search-message-results/search-message-results.component';


@NgModule({
  declarations: [
    ChatFormComponent,
    ChatInboxHeadComponent,
    MessageCardComponent,
    MessageSentComponent,
    MessageReceivedComponent,
    SearchMessageFormComponent,
    SearchMessageHeadComponent,
    SearchMessageResultsComponent,
    ChatInfoComponent
  ],
  exports: [
    ChatFormComponent,
    ChatInboxHeadComponent,
    MessageCardComponent,
    MessageSentComponent,
    MessageReceivedComponent,
    SearchMessageFormComponent,
    SearchMessageHeadComponent,
    SearchMessageResultsComponent,
    ChatInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  bootstrap: [BoxChatComponent]
})
export class BoxChatModule { }