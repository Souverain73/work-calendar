import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from 'src/app/components/login-page/login-page.component';
import { RegistryPageComponent } from 'src/app/components/registry-page/registry-page.component';
import { PresenceComponent } from './components/presence/presence.component';
import { TeamComponent } from './components/team/team.component';

const swipebleRoutes: string[] = ['/presence', '/team'];

const routes: Routes = [
  { path: 'team', component: TeamComponent },
  { path: 'presence', component: PresenceComponent },
  { path: 'presence/:id', component: PresenceComponent },
  { path: 'registry', component: RegistryPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: 'presence', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public static getNext(router: Router, increment: number): string {
    const current = router.url; // '/presence'
    const idx = Math.abs(swipebleRoutes.indexOf(current) + increment) % swipebleRoutes.length;
    return swipebleRoutes[idx];
  }
}
