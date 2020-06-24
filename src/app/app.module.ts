// Default imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID } from '@angular/core';

// Imports for local currency formatting
import localePtBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

// Components
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { OfertaComponent } from './oferta/oferta.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso/ordem-compra-sucesso.component';

// Modules
import { AppRoutingModule } from './app-routing.module';

// Pipes
import { DescricaoReduzida } from './util/descricao-reduzida.pipe';

// Services
import { CarrinhoService } from './services/carinho.service';

registerLocaleData(localePtBr);

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzida,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    CarrinhoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
