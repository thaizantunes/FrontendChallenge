import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('../presentation/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'summoners-rift',
    loadChildren: () =>
      import('../presentation/summoners-rift/summoners-rift.module').then(
        (m) => m.SummonersRiftModule
      ),
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
