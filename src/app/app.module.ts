import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { RouterModule } from '@angular/router';
import { APP_BASE_HREF} from '@angular/common';  
import { ReactiveFormsModule } from "@angular/forms";
import{ QuienessomosComponent } from "./components/quienessomos/quienessomos.component";
import{ LogeoComponent } from "./components/logeo/logeo.component";
import{ SatelitesComponent } from "./components/satelites/satelites.component";


import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import {
  NgbPaginationModule,
  NgbModalModule
} from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { MenuComponent } from "./components/menu/menu.component";
import { InicioComponent } from "./components/inicio/inicio.component";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
QuienessomosComponent,
LogeoComponent,
SatelitesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([

      { path: 'inicio', component: InicioComponent },
      { path: 'quienesSomos', component: QuienessomosComponent },
      { path: 'logeo', component: LogeoComponent },
      { path: 'satelites', component: SatelitesComponent },
    ]),
    NgbPaginationModule,
    NgbModalModule,
  ],

  bootstrap: [AppComponent]
 }
 )
 
export class AppModule {}
