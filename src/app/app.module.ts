import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//RestAPIコールに利用するモジュール追加
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';

//商品情報取得用serviceを追加
import { ItemService } from './services/item.Service';

@NgModule({
  declarations: [
    AppComponent,
    //DashboardComponentを読み込めるように追加
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    //RestAPIコールに利用するモジュール追加
    HttpModule,
    JsonpModule
  ],
  providers: [
      //商品情報取得用serviceをDIできるように追加
      ItemService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
