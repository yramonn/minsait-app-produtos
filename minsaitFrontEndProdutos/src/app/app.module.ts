import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import {MoneyFormatDirective} from './money-format.directive';
import {CodigobarrasFormatDirective} from './codigobarras-format.directive';

import {ProdutoService} from './produto.service';
import { ProdutoComponent } from './components/produto/produto.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    MoneyFormatDirective,
    CodigobarrasFormatDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [HttpClientModule, ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
