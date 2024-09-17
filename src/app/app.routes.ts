import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: ":lang", loadComponent: () => import('./curriculum/curriculum.component').then(m => m.CurriculumComponent)},
  { path: "", redirectTo: "en", pathMatch: "full" },
];
