import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/product/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { PageComponent } from './pages/product/page/page.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
