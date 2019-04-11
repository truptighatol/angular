import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule, RoutingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MoviesService } from "./core/movies.service";
import { PeopleService } from "./core/people.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { InterceptorService } from "./core/interceptor.service";
import { PersonDetailsComponent } from "./person-details/person-details.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RoutingComponents,
    PersonDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [
    MoviesService,
    PeopleService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
