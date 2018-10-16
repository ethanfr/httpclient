import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules, Router, Routes } from '@angular/router';
import { ToolsComponent } from './components/tools/tools.component';
import { MarketComponent } from './components/market/market.component';
import { NewsComponent } from './components/news/news.component';
import { GituserComponent } from './components/gituser/gituser.component';
import { ProductComponent } from './components/product/product.component';
//import { ProductComponent } from './components/products/product.component';

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
    },
    {
      path: 'products',
      component: ProductComponent 
    }
  
  ];



@NgModule({
    imports: [


        RouterModule.forRoot(routes),
        //wild card matching
        RouterModule.forRoot([
    //        { path: '', component: ProductComponent },
            //wild card should be last matched
            { 
                path: '**', 
                redirectTo: '', 
                pathMatch: 'full'
            }
        ])

    ],
    exports: [ RouterModule
        ]
})

export class AppRoutingModule{}