import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { NotifyMeComponent } from './notify-me/notify-me.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'about', component: AboutComponent },
      { path: 'notify-me', component: NotifyMeComponent }
    ])
  ],
  declarations: [AppComponent, TopBarComponent, ProductListComponent, WelcomeComponent, AboutComponent, ProductAlertsComponent, NotifyMeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
