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
  // pages
  {path: '', component: MainComponent, data: {animation: 'home'}},
  {path: 'catalog', component: CatalogComponent, data: {animation: 'catalog'}},
  {path: 'custom-built', component: CustomBuiltComponent, data: {animation: 'custom-built'}},
  {path: 'media', component: MediaComponent, data: {animation: 'media'}},
  {path: 'about', component: AboutComponent, data: {animation: 'about'}},
  {path: 'how-to-order', component: HowToOrderComponent, data: {animation: 'how-to-order'}},
  {path: 'contact', component: ContactComponent, data: {animation: 'contact'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
