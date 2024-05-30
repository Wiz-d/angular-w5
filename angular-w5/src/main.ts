import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { FoxPicComponent } from './fox-pic/fox-pic.component';
import { CatPicComponent } from './cat-pic/cat-pic.component';
import { provideHttpClient } from '@angular/common/http';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
{
  path: 'fox',
  component: FoxPicComponent
},
{
  path: 'cat',
  component: CatPicComponent
}
  ])]
})
  .catch((err) => console.error(err));
