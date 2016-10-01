import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HandleDirective } from './handle.directive';
import { ArticleComponent } from './article/article.component';
import { ChinesePipe } from './chinese.pipe';
import {DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HandleDirective,
    ArticleComponent,
    ChinesePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
