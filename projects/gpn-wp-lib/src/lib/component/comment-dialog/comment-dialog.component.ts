import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AppService} from '../../../../../../src/app/app.service';
import {Comment} from '../../common/_models/comment';

/**
 *  параметры диалога
 *  title - необязательный заголовок окна
 *  comment-list - текст комментария
 */
interface ICommentData {
  title?: string;
  comment: string;
  commentsList?: Comment[];
}

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.scss']
})
export class CommentDialogComponent implements OnInit {

  /**
   * Конструктор.
   */
  constructor(
    private appService: AppService,
    public dialogRef: MatDialogRef<CommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICommentData) {
  }

  /**
   * Действия при закрытии окна.
   */
  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    const comment: Comment = new Comment({post_message: this.data.comment});
    comment.authorName = this.appService.getUser().email;
    this.data.commentsList.push(comment);
  }

  ngOnInit() {

  }
}
