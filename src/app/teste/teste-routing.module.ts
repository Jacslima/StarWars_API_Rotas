import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestePage } from './teste.page';

const routes: Routes = [
  {
    path: '',
    component: TestePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestePageRoutingModule {}