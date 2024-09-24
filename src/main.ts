import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationRef } from '@angular/core'; // Corrigido: ApplicationRef vem de '@angular/core'
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { take } from 'rxjs/operators';

bootstrapApplication(AppComponent, appConfig)
  .then(appRef => {
    // Aguardar a estabilização da aplicação
    const appRefInstance = appRef.injector.get(ApplicationRef);
    appRefInstance.isStable
      .pipe(take(1))
      .subscribe(() => {
        console.log('Aplicação estabilizada.');
      });
  })
  .catch((err) => console.error(err));
