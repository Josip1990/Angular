import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './components/cats/cats.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { MouseComponent } from './components/mouse/mouse.component';

const routes: Routes = [
  {
    path: 'dogs',
    component: DogsComponent,
  },
  {
    path: 'cats',
    component: CatsComponent,
  },
  {
    path: 'mouse',
    component: MouseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
