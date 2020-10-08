import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterGuard } from './guard/master.guard';
import { AdminGuard } from './guard/admin.guard';
import { ModsGuard } from './guard/mods.guard';
import { UserGuard } from './guard/user.guard';
import { AdminComponent } from './page/admin/admin.component';
import { ModsComponent } from './page/mods/mods.component';
import { UserComponent } from './page/user/user.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [MasterGuard],
    data: {
      guards: [AdminGuard],
      guardsRelation: 'OR',
      fallbackUrl: 'login'
    }
  },
  {
    path: 'mods',
    component: ModsComponent,
    canActivate: [MasterGuard],
    data: {
      guards: [AdminGuard, ModsGuard],
      guardsRelation: 'OR',
      fallbackUrl: ''
    }
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [MasterGuard],
    data: {
      guards: [AdminGuard, ModsGuard, UserGuard],
      guardsRelation: 'OR',
      fallbackUrl: 'login'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
