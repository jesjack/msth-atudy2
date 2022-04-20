import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MathjaxModule } from 'mathjax-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProblemComponent } from './components/problem/problem.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeRouteComponent } from './routes/home-route/home-route.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ContactRouteComponent } from './routes/contact-route/contact-route.component';
import { NotesRouteComponent } from './routes/notes-route/notes-route.component';
import { ProfileRouteComponent } from './routes/profile-route/profile-route.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { WelcomeRouteComponent } from './routes/welcome-route/welcome-route.component';
import { XpBarComponent } from './components/xp-bar/xp-bar.component';
import { SignRouteComponent } from './routes/sign-route/sign-route.component';
import { CampaignRouteComponent } from './routes/campaign-route/campaign-route.component';
import { NgxMathFunctionPlotterModule } from 'ngx-math-function-plotter';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    ProblemComponent,
    NavbarComponent,
    SidebarComponent,
    HomeRouteComponent,
    ContactRouteComponent,
    NotesRouteComponent,
    ProfileRouteComponent,
    WelcomeRouteComponent,
    XpBarComponent,
    SignRouteComponent,
    CampaignRouteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    MathjaxModule.forRoot(),
    SweetAlert2Module.forRoot(),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    }),
    NgxMathFunctionPlotterModule,
    QRCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
