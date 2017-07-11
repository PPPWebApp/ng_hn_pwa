import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HackerNewsAPIService } from '../hackernews-api.service';

@Component({
  selector: 'app-item-and-comments',
  templateUrl: './item-and-comments.component.html',
  styleUrls: ['./item-and-comments.component.scss']
})
export class ItemAndCommentsComponent implements OnInit {
  sub: any;
  item;

  constructor( private _hackerNewsAPIService: HackerNewsAPIService,
               private route: ActivatedRoute) { }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        
        let itemID = +params['id'];
        this._hackerNewsAPIService.fetchComments(itemID)
            .subscribe(data => {
                this.item = data;
            },  error => console.log('Could not load item'
                                     + itemID));
     });
   }
}
