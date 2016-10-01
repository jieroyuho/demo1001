import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnChanges {

  @Input() item: any;
  //@Input() item2: any;
  @Output() deleteOut = new EventEmitter<any>();
  constructor() { } // 一開始執行

  ngOnInit() {   // 當所有的input 和 output bing後就會開始執行
  }

  ngOnChanges() { // 當input 有變化開始執行

  }
  ngDoCheck(){}  // 不要用，有變更偵測時，但效能會很差

  ngOnDestroy(){} //元件可被摧毀，但是事件不會，尤其被註冊的事件在元件消失後還沒消失

  doDelete(item) {
    this.deleteOut.emit(item);
  }
}
