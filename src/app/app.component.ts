import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  keyword:string = 'test';

   changeSearchKey(keywordsearch){
   this.keyword = keywordsearch.value;
 }
  EnterSearchKey(input) {

      this.keyword = input.value;
  }
}
