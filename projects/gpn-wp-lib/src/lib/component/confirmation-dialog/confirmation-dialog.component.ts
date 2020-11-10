import {Component, Inject, OnInit} from '@angular/core';
import {ContentItem} from '../../common/_models/content-item';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

interface ConfirmationData {
  title: string;
  message: string;
}

@Component({
  selector: 'gpnwp-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  /**
   * Заголовок диалога
   */
  title = 'Подтвреждение';

  /**
   * подробновсти
   */
  message = 'Подтвердите действие';

  /**
   * Конструктор.
   * @param dialogRef диалоговое окно.
   * @param data
   */
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationData) {
    this.message = data.message??this.message;
    this.title = data.title??this.title;
  }

  /**
   * Действия при закрытии окна.
   */
  onNoClick(): void {
    this.dialogRef.close(false);
  }

  /**
   * Действия при закрытии окна.
   */
  onYesClick(): void {
    this.dialogRef.close(true);
  }

  /**
   * Действия при инициализации компонента.
   */
  ngOnInit(): void {
  }
}
