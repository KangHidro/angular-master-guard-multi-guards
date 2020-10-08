import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './page/admin/admin.component';
import { ModsComponent } from './page/mods/mods.component';
import { UserComponent } from './page/user/user.component';
import { LoginComponent } from './page/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ModsComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
