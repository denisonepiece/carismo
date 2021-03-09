import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {CatalogComponent} from './pages/catalog/catalog.component';
import {MediaComponent} from './pages/media/media.component';
import {CustomBuiltComponent} from './pages/custom-built/custom-built.component';
import {ContactComponent} from './pages/contact/contact.component';
import {AboutComponent} from './pages/about/about.component';
import {HowToOrderComponent} from './pages/how-to-order/how-to-order.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'custom-built', component: CustomBuiltComponent},
  {path: 'media', component: MediaComponent},
  {path: 'about', component: AboutComponent},
  {path: 'how-to-order', component: HowToOrderComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
