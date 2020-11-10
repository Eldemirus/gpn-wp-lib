/**
 * Содержит контент для слайда.
 */
import {Color} from './color';
import {SourceFile} from './source-file';
import {Models} from './models';

export class ContentItem extends Models {
  static IMAGE = 'image';
  static TEXT = 'paragraph';
  static ORDINAL_LIST = 'list-ordinal';
  static LIST = 'list';
  static SLOGAN = 'slogan';
  static FONT = 'font';
  static COLOR = 'color';

  static FULL_WIDTH = 100;
  static HALF_WIDTH = 50;

  /**
   * Идентификатор контентного блока.
   */
  contentId: number;

  /**
   * Идентификатор слайда.
   */
  slideId: number;

  /**
   * Тип контентного блока, из предопределенного списка (см. выше).
   */
  type: string;

  /**
   * Номе контентной зоны.
   */
  zone: string;

  /**
   * Порядок следования.
   */
  order: number;

  /**
   * Изображение.
   */
  img?: string;

  /**
   * Id лого, связан с Layout.id.
   */
  logoId?: string;

  logoPath?: string;

  /**
   * Файл.
   */
  file?: string;

  /**
   * Имя файла.
   */
  fileName?: string;

  /**
   * Размер файла.
   */
  fileSize?: number;

  sourceFiles?: SourceFile[];
  /**
   * Имя EPS файла.
   */
  fileEpsName?: string;

  /**
   * Ссылка EPS файла.
   */
  fileEps?: string;

  /**
   * Имя AI файла.
   */
  fileAiName?: string;

  /**
   * Ссылка AI файла.
   */
  fileAi?: string;

  /**
   *  Данные для компонента палитры.
   */
  dataColors?: Color[] = [];

  /**
   *  Данные для компонента шрифта.
   */
  dataFont?: string;

  /**
   *  Данные для компонента шрифта.
   */
  dataFontSize?: string[] = [];

  /**
   *  Заголовок.
   */
  title: string;

  /**
   * Текстовое содержимое.
   */
  text: string;

  /**
   * Стиль текстового содержимого.
   */
  textStyle: string;

  /**
   * Отображать заголовок.
   */
  titleEnabled: boolean;

  /**
   * Признак удаленности.
   */
  deleted?: boolean;

  /**
   * Новый контентный блок.
   */
  isNew?: boolean;

  /**
   * Ширина в процентах.
   */
  width: string;

  /**
   * Ширина содержимого в процентах.
   */
  contentWidth: string;

  /**
   * Конструктор.
   * @param data - данные для инициализации.
   */
  constructor(data = {}) {
    super();
    this.fillFields(data, [
      'fileEps', 'fileAi', 'fileEpsName', 'fileAiName', 'slideId',
      'contentId', 'img', 'logoId', 'file', 'fileName', 'fileSize', 'type', 'zone',
      'order', 'title', 'text', 'dataColors', 'dataFont', 'dataFontSize'
    ]);

    let fieldName = 'width';
    this.width = '100';
    if (data.hasOwnProperty(fieldName)) {
      this.width = '' + data[fieldName];
    }

    fieldName = 'contentWidth';
    this.contentWidth = '100';
    if (data.hasOwnProperty(fieldName)) {
      this.contentWidth = data[fieldName];
    }

    fieldName = 'titleEnabled';
    if (data.hasOwnProperty(fieldName)) {
      this.titleEnabled = !!data[fieldName];
    }
  }
}
