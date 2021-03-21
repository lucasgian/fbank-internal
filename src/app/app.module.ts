import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PrimengModule } from './shared/primeng/primeng.module'
import { NavigationLeftBarComponent } from './core/navigation-left-bar/navigation-left-bar.component'
import { TopBarComponent } from './core/top-bar/top-bar.component'
import { FooterComponent } from './core/footer/footer.component'
import { SaleService } from './service/sale.service'
import { UserService } from 'src/app/service/user.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ProductService } from './service/product.service'
import { CookieModule } from 'ngx-cookie'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ErrorInterceptor } from './shared/auth/error'
import { JwtInterceptor } from './shared/auth/jwt'

@NgModule({
  declarations: [
    AppComponent,
    NavigationLeftBarComponent,
    TopBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PrimengModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CookieModule.forRoot()
  ],
  exports: [
    BrowserModule
  ],
  providers: [
    SaleService,
    ProductService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
