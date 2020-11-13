import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {KeyValue} from '../../common/_models/key-value';
import {Workflow} from '../workflow/models/workflow';

@Component({
  selector: 'gpnwp-workflow-viewer',
  templateUrl: './workflow-viewer.component.html',
  styleUrls: ['./workflow-viewer.component.scss']
})
export class WorkflowViewerComponent implements OnInit {

  /**
   * История переходов статуса.
   */
  @Input()
  workflowList: Workflow[] = [];

  /**
   * Список статусов.
   */
  @Input()
  statusList: KeyValue[] = [];

  commentsList: Map<number, Comment> = new Map();

  statusModel: string;

  @Output() statusChange = new EventEmitter();

  get status(): any {
    return this.statusModel;
  }

  @Input()
  set status(status) {
    this.statusModel = status;
    this.statusChange.emit(this.statusModel);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
