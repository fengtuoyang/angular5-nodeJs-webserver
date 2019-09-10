import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {FooterComponent} from './component/footer/footer.component';
import {SearchComponent} from './component/aboutProduct/search/search.component';
import {CarouselComponent} from './component/aboutProduct/carousel/carousel.component';
import {ProductComponent} from './component/aboutProduct/product/product.component';
import {StarsComponent} from './component/aboutProduct/stars/stars.component';
import {ProductDetailComponent} from './component/aboutProduct/product-detail/product-detail.component';
import {HomeComponent} from './component/aboutProduct/home/home.component';

import {RouterModule, Routes} from '@angular/router';
import {ProductService} from './shared/product.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReactivePgComponent} from './componentDemo/reactive-pg/reactive-pg.component';
import {PipeDemoComponent} from './componentDemo/pipe-demo/pipe-demo.component';
import {MultiplePipe} from './pipe/multiple.pipe';
import {FilterPipe} from './pipe/filter.pipe';
import {CommunicateInputComponent} from './componentDemo/communicate-input/communicate-input.component';
import {CommunicateOutputComponent} from './componentDemo/communicate-output/communicate-output.component';
import {CommentComponent} from './component/aboutProduct/comment/comment.component';
import {AboutProductComponent} from './component/aboutProduct/about-product/about-product.component';
import { RegistComponent } from './component/regist/regist.component';
import { TemplateFormComponent } from './componentDemo/template-form/template-form.component';
import { ReactiveFormComponent } from './componentDemo/reactive-form/reactive-form.component';
import { ReactiveRegistComponent } from './component/reactive-regist/reactive-regist.component';
import { MobileValidatorDirective } from './directives/mobile-validator.directive';
import { EqualValidatorDirective } from './directives/equal-validator.directive';
import {HttpModule} from '@angular/http';
import { HttpProductComponent } from './componentDemo/http-product/http-product.component';
import { WebsocketComponent } from './componentDemo/websocket/websocket.component';
import {WebSocketService} from "./shared/web-socket.service";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { GdMapComponent } from './component/aboutMap/gd-map/gd-map.component';

const routeConfig: Routes = [
  {
    path: '', component: AboutProductComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'product/:productId', component: ProductDetailComponent}
    ]
  },
  // {path: '', loadChildren: 'app/routing/about-product.module#AboutProductModule'},
  {path: 'regist', component: RegistComponent},
  {path: 'reactive-regist', component: ReactiveRegistComponent},
  {path: 'aboutMap', component: GdMapComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent,
    ReactivePgComponent,
    PipeDemoComponent,
    MultiplePipe,
    FilterPipe,
    CommunicateInputComponent,
    CommunicateOutputComponent,
    CommentComponent,
    AboutProductComponent,
    RegistComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    ReactiveRegistComponent,
    MobileValidatorDirective,
    EqualValidatorDirective,
    HttpProductComponent,
    WebsocketComponent,
    GdMapComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ProductService, WebSocketService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
