import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RepositoriesService } from './services/repositories.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
  AppComponent,
  RepositoriesComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  InfiniteScrollModule
  ],
  providers: [RepositoriesService],
  bootstrap: [AppComponent,RepositoriesComponent]
})
export class AppModule { }
