import {Component, Input, OnInit} from '@angular/core';
import {KeyValue} from '../../common/_models/key-value';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {
  /**
   * Список шагов рабочего процесса.
   */
  @Input() statusList: KeyValue[] = [];

  /**
   * Идентификатор текущего статуса.
   */
  @Input() activeStatusId: number;

  /**
   * Код текущего статуса.
   */
  @Input() code: string;

  /**
   * Конструктор.
   */
  constructor() {
  }

  /**
   * Действия при инициализации компонента.
   */
  ngOnInit() {
  }

}
