import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRouteComponent } from './home-route/home-route.component';
import { NotesRouteComponent } from './notes-route/notes-route.component';
import { ContactRouteComponent } from './contact-route/contact-route.component';
import { ProfileRouteComponent } from './profile-route/profile-route.component';
import { WelcomeRouteComponent } from './welcome-route/welcome-route.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
