import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoadingComponent } from './components/loading/loading.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { PaginaTablaComponent } from './pages/pagina-tabla/pagina-tabla.component';
import { TableModule } from 'primeng/table';
import {PanelModule} from 'primeng/panel'
import { HttpClientModule } from '@angular/common/http';
import { TabMenuModule } from 'primeng/tabmenu'; 
import { MenubarModule } from 'primeng/menubar';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component'; 
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    InicioComponent,
    PaginaTablaComponent,
    MenuHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    PanelModule,
    HttpClientModule,
    TabMenuModule,
    MenubarModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
