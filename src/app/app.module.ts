import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Plato1Component } from './Platos/plato1/plato1.component';
import { Pension1Component } from './Pensiones/pension1/pension1.component';
import { Pension2Component } from './Pensiones/pension2/pension2.component';
import { Pension3Component } from './Pensiones/pension3/pension3.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { GratisComponent } from './SubPages/gratis/gratis.component';
import { NormalComponent } from './SubPages/normal/normal.component';
import { ProComponent } from './SubPages/pro/pro.component';
import { Plato2Component } from './Platos/plato2/plato2.component';
import { Plato3Component } from './Platos/plato3/plato3.component';
import { Plato4Component } from './Platos/plato4/plato4.component';
import { Pro1Component } from './Pro/pro1/pro1.component';
import { Plato5Component } from './Platos/plato5/plato5.component';
import { Pro2Component } from './Pro/pro2/pro2.component';
import { Pro3Component } from './Pro/pro3/pro3.component';
import { Pro4Component } from './Pro/pro4/pro4.component';

@NgModule({
  declarations: [
    AppComponent,
    Plato1Component,
    Pension1Component,
    Pension2Component,
    Pension3Component,
    MenuNavComponent,
    GratisComponent,
    NormalComponent,
    ProComponent,
    Plato2Component,
    Plato3Component,
    Plato4Component,
    Pro1Component,
    Plato5Component,
    Pro2Component,
    Pro3Component,
    Pro4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
