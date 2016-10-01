import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  keyword: string = 'test';

  constructor(private datasvc: DataService) {
  }


  changeSearchKey(keywordsearch) {
    this.keyword = keywordsearch.value;
  }
  EnterSearchKey(input) {

    this.keyword = input.value;
  }

}
