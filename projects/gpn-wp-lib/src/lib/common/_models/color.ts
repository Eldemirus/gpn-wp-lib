import {Models} from './models';

/**
 * Цвет для стилевого файла.
 */
export class Color extends Models{
  /**
   * Наименование цвета.
   */
  name: string;
  /**
   * Описание
   */
  description: string;
  /**
   * Параметры цвета
   */
  pantone: string;
  html: string;
  ral: string;
  cmyk: string;
  rgb: string;
  /**
   * Выбранный цвет
   */
  selected?: boolean;
  /**
   * Цвет текста.
   */
  color?: string;

  /**
   * Конструктор.
   */
  constructor(data = {}) {
    super();
    this.fillFields(data, ['name', 'description', 'pantone', 'html', 'ral', 'rgb', 'cmyk', 'color']);
  }
}
