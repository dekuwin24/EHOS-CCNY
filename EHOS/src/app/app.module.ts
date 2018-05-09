import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { AppRoutingModule } from './/app-routing.module';
import { WasteComponent } from './waste/waste.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ItemComponent,
    WasteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
