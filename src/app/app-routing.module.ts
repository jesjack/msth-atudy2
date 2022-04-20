import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRouteComponent } from './routes/home-route/home-route.component';
import { NotesRouteComponent } from './routes/notes-route/notes-route.component';
import { ContactRouteComponent } from './routes/contact-route/contact-route.component';
import { ProfileRouteComponent } from './routes/profile-route/profile-route.component';
import { WelcomeRouteComponent } from './routes/welcome-route/welcome-route.component';
import { SignRouteComponent } from './routes/sign-route/sign-route.component';
import { CampaignRouteComponent } from './routes/campaign-route/campaign-route.component';

let data = {
  'title': 'msth-atudy',
}

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeRouteComponent, data },
  { path: 'notes', component: NotesRouteComponent, data },
  { path: 'contact', component: ContactRouteComponent, data },
  { path: 'profile', component: ProfileRouteComponent, data },
  { path: 'welcome', component: WelcomeRouteComponent, data },
  { path: 'login', component: SignRouteComponent, data },
  { path: 'login/:addProfile', component: SignRouteComponent, data },
  { path: 'campaign', component: CampaignRouteComponent, data }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
