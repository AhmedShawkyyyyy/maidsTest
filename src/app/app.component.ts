import { Component } from '@angular/core';
import { LoaderService } from './userPanel/controllers/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'maidsTest';
  showLoader$ = this.LoaderService.loadingAction;

  constructor(private LoaderService: LoaderService) {}
}
