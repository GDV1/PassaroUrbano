// Default imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { OfertaComponent } from './oferta/oferta.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';

// Route Map
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'diversao', component: DiversaoComponent },
  { path: 'oferta', component: OfertaComponent },
  { path: 'oferta/:id', component: OfertaComponent,
    children: [
      {path: '', component: ComoUsarComponent},
      {path: 'como-usar', component: ComoUsarComponent},
      {path: 'onde-fica', component: OndeFicaComponent}
    ]
  },
  {path: 'ordem-compra', component: OrdemCompraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
