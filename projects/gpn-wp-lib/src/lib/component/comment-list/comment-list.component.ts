import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../common/_models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent  implements OnInit {
  @Input() comments: Comment[];
  @Input() actionReply?: any;
  @Input() textOnly?: boolean;

  constructor() { }

  /**
   * Действия, выполняемые при инициализации компонента.
   */
  ngOnInit() {
  }

}
