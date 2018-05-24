import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HsdmNavComponent } from './components/hsdm-nav/hsdm-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './shared/material/material.module';
import { AfiliadoComponent } from './components/afiliado/afiliado.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { AfiliadoDetailsComponent } from './components/afiliado-details/afiliado-details.component';
import { FormsModule } from '@angular/forms';
import { AfiliadosService } from './afiliados.service';

@NgModule({
  declarations: [
    AppComponent,
    HsdmNavComponent,
    AfiliadoComponent,
    ActividadesComponent,
    AfiliadoDetailsComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    /*LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule*/
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [AfiliadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
