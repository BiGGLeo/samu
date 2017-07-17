import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { UFService } from './services/uf.service';
import { SamuService } from './services/samu.service';

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
      }

    ])
  ],
  providers: [UFService, SamuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
