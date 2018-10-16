import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StickiesComponent } from './components/stickies/stickies.component';
import { StickesDetailsComponent } from './components/stickes-details/stickes-details.component';
import { HeaderComponent } from './components/header/header.component';
import { KfcComponent } from './components/kfc/kfc.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { ParentComponent } from './components/parent/parent.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import {  HttpClientModule } from '@angular/common/http';
import { GituserComponent } from './components/gituser/gituser.component';
import { GitreposComponent } from './components/gitrepos/gitrepos.component';
import { PowerofPipe } from './pipes/powerof.pipe';
import { MypipeComponent } from './components/mypipe/mypipe.component';
import { NewsComponent } from './components/news/news.component';
import { MarketComponent } from './components/market/market.component';
import { ToolsComponent } from './components/tools/tools.component';

//Routing example
const routes: Routes = [
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'market',
    component: MarketComponent
  },
  {
    path: 'tools',
    component: ToolsComponent
  },
  {
    path: 'wykats',
    component: GituserComponent 
  }

];
@NgModule({
  declarations: [
    AppComponent,
    StickiesComponent,
    StickesDetailsComponent,
    HeaderComponent,
    KfcComponent,
    Child1Component,
    Child2Component,
    ParentComponent,
    UserInfoComponent,
    GituserComponent,
    GitreposComponent,
    PowerofPipe,
    MypipeComponent,
    NewsComponent,
    MarketComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    //for root routing
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
