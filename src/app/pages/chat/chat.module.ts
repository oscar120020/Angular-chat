import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { UserNameComponent } from 'src/app/components/user-name/user-name.component';
import { ChatComponent } from './chat.component';
import { MainSidebarModule } from 'src/app/components/sidebar/main-sidebar.module';
import { MainSidebarComponent } from 'src/app/components/sidebar/main-sidebar.component';
import { BoxChatModule } from 'src/app/components/chat/box-chat.module';
import { BoxChatComponent } from 'src/app/components/chat/box-chat.component';

@NgModule({
  declarations: [
    MainSidebarComponent,
    UserNameComponent,
    BoxChatComponent
  ],
  exports: [
    MainSidebarComponent,
    UserNameComponent,
    BoxChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    MainSidebarModule,
    BoxChatModule
  ],
  bootstrap: [ChatComponent]
})
export class ChatModule { }
