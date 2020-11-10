import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ContentItem} from '../../common/_models/content-item';
import {MenuItem} from '../../../../../../src/app/_models/menu-item';
import {Color} from 'projects/gpn-wp-lib/src/lib/common/_models/color';
import {SelectionModel} from '@angular/cdk/collections';
import {MatListOption, MatSelectionList} from '@angular/material/list';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-content-dialog',
  templateUrl: './content-dialog.component.html',
  styleUrls: ['./content-dialog.component.scss']
})
export class ContentDialogComponent implements OnInit, AfterViewInit {
  @ViewChild('logos_list', {static: false}) private selectionList: MatSelectionList;

  /**
   * Базовый путь для изображений.
   */
  imagePath = '';

  /**
   * Выбранный цвет.
   */
  currentColor: Color = new Color();

  showEditMenu = false;
  addingColor = false;
  currentFontSize: string;

  /**
   * Список доступных шрифтов.
   */
  fontList = [
    {
      name: 'DinPro',
      data: ['DinProRegular', 'DinProLight', 'DinProMedium', 'DinProBold']
    },
    {
      name: 'BankGothicMd',
      data: ['BankGothicMd']
    },
    {
      name: 'Arial',
      data: ['arial']
    },
    {
      name: 'GPN.GO',
      data: ['GPN.GO']
    }
  ];

  /**
   * Список доступных шрифтов.
   */
  textStyleList = [
    {
      name: 'мелкий',
      class: 'text-block-small'
    },
    {
      name: 'стандарт',
      class: 'text-block-standart'
    }
  ];

  /**
   * Типы контентных блоков.
   */
  menuList: MenuItem[] = [{
    text: 'Картина',
    icon: 'image',
    value: 'image'
  }, {
    text: 'Файл',
    icon: 'insert_drive_file',
    value: 'file'
  }, {
    text: 'Слоган',
    icon: 'error',
    value: 'slogan'
  }, {
    text: 'Текст',
    icon: 'format_align_center',
    value: 'text',
    selected: true,
  }, {
    text: 'Цвет',
    icon: 'style',
    value: 'color-swatch'
  }, {
    text: 'Шрифт',
    icon: 'font_download',
    value: 'font'
  }, {
    text: 'Список',
    icon: 'format_list_bulleted',
    value: 'list'
  }, {
    text: 'Нумер.',
    icon: 'format_list_numbered',
    value: 'list-ordinal'
  }];

  /**
   * Конструктор.
   * @param dialogRef диалоговое окно.
   * @param data
   */
  constructor(
    public dialogRef: MatDialogRef<ContentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ContentItem) {
  }

  /**
   * Устанавливает выделенный элемент.
   * @param selectedItem
   */
  setSelected(selectedItem: MenuItem) {
    for (const item of this.menuList) {
      item.selected = false;
    }
    selectedItem.selected = true;
    this.data.type = selectedItem.value;
  }

  /**
   * Действия при закрытии окна.
   */
  onNoClick(): void {
    this.dialogRef.close();
  }

  /**
   * Загружает изображение.
   */
  uploadImage(image) {
    this.data.img = image.item(0);
  }

  /**
   * Загружает файл.
   * @param file файл.
   */
  uploadFile(file): void {
  }

  /**
   * Загружает файл в формате AI.
   * @param file файл.
   */
  uploadAi(file): void {
  }

  /**
   * Загружает файл в формате EPS.
   * @param file - файл.
   */
  uploadEps(file): void {
  }

  /**
   * Добавление цвета
   */
  addColor() {
    this.showEditMenu = true;
    this.addingColor = true;
    this.currentColor = new Color();
  }

  /**
   * Сохранение цвета
   */
  saveColor() {
    if (this.addingColor) {
      const colorArray = this.data.dataColors ? this.data.dataColors : [];
      colorArray.push(new Color(this.currentColor));
      this.data.dataColors = colorArray;
      this.currentColor = new Color();
    }
    this.cancelEditColor();
  }

  /**
   * Удаление цвета
   */
  deleteColor(index) {
    this.data.dataColors.splice(index, 1);
  }

  /**
   * Удаление цвета
   */
  deleteFontSize(index) {
    this.data.dataFontSize.splice(index, 1);
  }

  /**
   * Отмена редактирования цвета
   */
  cancelEditColor() {
    this.showEditMenu = false;
    this.addingColor = false;
  }

  /**
   * Редактирование цвета
   */
  editColor(index) {
    this.currentColor = this.data.dataColors[index];
    this.showEditMenu = true;
    this.addingColor = false;
  }

  ngAfterViewInit() {
    if (this.selectionList) {
      this.selectionList.selectedOptions = new SelectionModel<MatListOption>(false);
    }
  }

  /**
   * Действия при инициализации компонента.
   */
  ngOnInit(): void {
    for (const item of this.menuList) {
      item.selected = (item.value === this.data.type);
    }
  }
}
