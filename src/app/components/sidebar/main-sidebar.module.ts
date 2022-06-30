import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoxContactComponent } from './box-contact/box-contact.component';
import { ContactComponent } from './contact/contact.component';
import { GroupComponent } from './group/group.component';
import { GroupsComponent } from './groups/groups.component';
import { MainSidebarComponent } from './main-sidebar.component';
import { ModalSearchComponent } from './modal-search/modal-search.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SidebarInfoComponent } from './sidebar-info/sidebar-info.component';
import { SidebarSearchComponent } from './sidebar-search/sidebar-search.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SidebarComponent,
    PerfilComponent,
    SolicitudComponent,
    BoxContactComponent,
    ContactComponent,
    GroupComponent,
    GroupsComponent,
    ModalSearchComponent,
    SidebarInfoComponent,
    SidebarSearchComponent
  ],
  exports: [
    PerfilComponent,
    SolicitudComponent,
    GroupsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  bootstrap: [MainSidebarComponent]
})
export class MainSidebarModule { }