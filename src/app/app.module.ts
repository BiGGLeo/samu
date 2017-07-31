import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { UFService } from './services/uf.service';
import { SamuService } from './services/samu.service';
import { AllService } from './services/all';
import { AppComponent } from './app.component';
import { AllComponent } from './all.component';
import { DadosComponent} from './dados.component';
import { ResumoComponent} from './resumo.component';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    DadosComponent,
    ResumoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'all',
        component: AllComponent
      },
      {
        path: 'resumo',
        component: ResumoComponent
      },
      {
        path: 'dados',
        component: DadosComponent
      },
      InMemoryWebApiModule.forRoot(InMemoryDataService)

    ])
  ],
  providers: [UFService, SamuService, AllService],
  bootstrap: [AppComponent]
})
export class AppModule { }
