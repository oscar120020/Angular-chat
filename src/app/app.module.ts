import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ChatComponent } from './pages/chat/chat.component';
import { SidebarComponent } from './components/chat/sidebar/sidebar.component';
import { SidebarInfoComponent } from './components/chat/sidebar-info/sidebar-info.component';
import { ContactComponent } from './components/chat/contact/contact.component';
import { BoxContactComponent } from './components/chat/box-contact/box-contact.component';
import { MessageReceivedComponent } from './components/chat/message-received/message-received.component';
import { MessageSentComponent } from './components/chat/message-sent/message-sent.component';
import { ChatFormComponent } from './components/chat/chat-form/chat-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BoxChatComponent } from './components/chat/box-chat/box-chat.component';
import { ChatInboxHeadComponent } from './components/chat/chat-inbox-head/chat-inbox-head.component';
import { CustomSocket } from './services/customSocket';
import { SidebarSearchComponent } from './components/chat/sidebar-search/sidebar-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { SearchMessageHeadComponent } from './components/searchMessages/search-message-head/search-message-head.component';
import { SearchMessageFormComponent } from './components/searchMessages/search-message-form/search-message-form.component';
import { SearchMessageResultsComponent } from './components/searchMessages/search-message-results/search-message-results.component';
import { MessageCardComponent } from './components/searchMessages/message-card/message-card.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ChatComponent,
    SidebarComponent,
    SidebarInfoComponent,
    ContactComponent,
    BoxContactComponent,
    MessageReceivedComponent,
    MessageSentComponent,
    ChatFormComponent,
    BoxChatComponent,
    ChatInboxHeadComponent,
    SidebarSearchComponent,
    SearchMessageHeadComponent,
    SearchMessageFormComponent,
    SearchMessageResultsComponent,
    MessageCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [CustomSocket],
  bootstrap: [AppComponent]
})
export class AppModule { }
