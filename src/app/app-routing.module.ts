import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheWhyComponent } from './the-why/the-why.component';
import { GeneratorBlockComponent } from './generator-block/generator-block.component';

const routes: Routes = [
  { path: '', redirectTo: '/generator', pathMatch: 'full' },
  { path: 'why', component: TheWhyComponent },
  { path: 'generator', component: GeneratorBlockComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]

})
export class AppRoutingModule { }
