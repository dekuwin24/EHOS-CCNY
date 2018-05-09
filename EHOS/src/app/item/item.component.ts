import { Component, OnInit } from '@angular/core';

import { ITEM } from '../mock';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items = ITEM;

  trash:string;

  constructor() {
    this.trash='/assets/trash.png'
}


  loadScript(src){
      var script = document.createElement("script");
      script.type = "text/javascript";
      document.getElementsByTagName("body")[0].appendChild(script);
      script.src = src;
    }
  ngOnInit() {
    this.loadScript('./assets/js/table.js')
    this.loadScript('./assets/js/tablesub.js')
  }

}
