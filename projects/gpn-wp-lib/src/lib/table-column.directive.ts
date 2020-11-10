import {Directive, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: '[gpnwpTableColumn]'
})
export class TableColumnDirective {

  @Input('gpnwpTableColumn') columnName: string;

  constructor(public readonly template: TemplateRef<any>) {
  }

}
