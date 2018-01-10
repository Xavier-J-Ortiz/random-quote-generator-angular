import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GeneratorBlockComponent } from './generator-block/generator-block.component';
import { AppRoutingModule } from './/app-routing.module';
import { QuoteService } from './quote.service';


@NgModule({
  declarations: [
    AppComponent,
    GeneratorBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
