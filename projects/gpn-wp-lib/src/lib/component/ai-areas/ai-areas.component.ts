import {Component, EventEmitter, Input, Output} from '@angular/core';
import {coerceBooleanProperty} from '@angular/cdk/coercion';

interface IBox {
  id: number;
  left: number;
  top: number;
  bottom: number;
  right: number;
  active: boolean;
  error: boolean;
  class: string;
  comment: any[];
}

@Component({
  selector: 'app-ai-areas',
  templateUrl: './ai-areas.component.html',
  styleUrls: ['./ai-areas.component.scss']
})
export class AiAreasComponent {
  @Input() areas: IBox[];
  @Input()
  get info() {return this.iInfo; }
  set info(value: any) {this.iInfo  = coerceBooleanProperty(value); }
  @Output() select = new EventEmitter<any>();

  private iInfo: boolean;


  constructor() { }

  selectBox(box: any) {
    this.select.emit(box);
  }

  showBox(ibox: any) {
    for (const box of this.areas) {
      box.active = (ibox.id === box.id);
    }
  }
}
