import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageService } from './landing-page/landing-page.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailPopupComponent } from './detail-popup/detail-popup.component';
import { DetailPopupService } from './detail-popup/detail-popup.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DetailPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    LandingPageService,
    DetailPopupService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DetailPopupComponent
  ]
})
export class AppModule { }
