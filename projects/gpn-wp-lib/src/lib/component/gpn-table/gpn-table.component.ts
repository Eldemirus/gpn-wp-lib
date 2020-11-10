import {AfterViewInit, Component, ContentChild, ContentChildren, Input, OnInit, QueryList, TemplateRef, ViewChild} from '@angular/core';
import {MatSelectionList} from '@angular/material/list';
import {MatSelect} from '@angular/material/select';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {TableColumnDirective} from '../../table-column.directive';

export interface GpnColumn {
  code: string;
  name: string;
  show?: boolean;
  class?: string;
  type?: string;
  param?: string;
  callback?: any;
  options?: Map<string,string>;
}


export interface GpnFilter {
  id: string;
  name: string;
  type: string;
  value?: string;
  active?: boolean;
  edit?: boolean;
  options?: Map<string, string>;
}

@Component({
  selector: 'gpnwp-gpn-table',
  templateUrl: './gpn-table.component.html',
  styleUrls: ['./gpn-table.component.scss']
})
export class GpnTableComponent implements OnInit, AfterViewInit{
  @Input()
  datasource: MatTableDataSource<any>;

  @Input()
  columns: GpnColumn[];

  @Input()
  filters: GpnFilter[];

  @ContentChildren(TableColumnDirective) templates: QueryList<TableColumnDirective>;

  @ViewChild('addFilter', {static: false}) selectionList: MatSelect;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;

  activeFilters: GpnFilter[];

  columnsShow = [];

  addFilterMode = false;

  filterChanged: (() => void);

  get unusedFilters() {
    return this.filters.filter(i1 => !this.activeFilters.some(i2 => i1.id === i2.id));
  }

  constructor() {
  }

  applyFilter(filter?) {
    if (filter) {
      filter.edit = false;
    }
    if (this.filterChanged) {
      this.filterChanged();
    }
    // this.datasource.filteredData = this.datasource.data.filter(d => this.localFilter(d, ''));
    // console.log(this.datasource.filteredData);
  }

  localFilter(data: any, filterString: string): boolean {
    const filters = JSON.parse(filterString);
    if (filters && filters.length)
    for (const filter of filters) {
      if (filter.value && (!data[filter.id] || (
        data[filter.id]?.toString().startsWith(filter.value) === false &&
        data[filter.id]?.toString().indexOf(filter.value) === -1
      ))) {
        return false;
      }
    }
    console.log(data, filterString, filters);
    return true;
  }


  selectNewFilter() {
    this.addFilterMode = true;
    this.selectionList?.open();
  }

  addFilterAction(value: string) {
    const filter = this.filters.find(a => a.id === value);
    filter.active = true;
    this.activeFilters.push(filter);
    this.editFilterAction(filter);
    this.addFilterMode = false;
  }

  deleteFilterAction(id: string) {
    this.activeFilters = this.activeFilters.filter(f => f.id !== id);
    this.applyFilter();
  }

  editFilterAction(filter: GpnFilter) {
    this.activeFilters.forEach(f => {
      f.edit = false;
    });
    filter.edit = true;
  }

  ngOnInit(): void {
    this.columnsShow = this.columns.map(a => a.code);
    this.activeFilters = this.filters.filter(f => f.active);
    this.datasource.filterPredicate = this.localFilter;
    this.datasource.filter = JSON.stringify(this.activeFilters);
    this.filterChanged = () => {
      this.datasource.filter = JSON.stringify(this.activeFilters);
    }
  }

  ngAfterViewInit(): void {
    console.log('TEMPLATES', this.templates);
  }

  getTemplate(element: any) {
    const templ = this.templates.find(f => f.columnName === element.code);
    return templ.template;
  }
}
