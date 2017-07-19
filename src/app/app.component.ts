import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';
import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fetching = 'Fetching:';
}
