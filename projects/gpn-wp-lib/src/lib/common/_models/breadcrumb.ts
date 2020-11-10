/**
 * Хлебные крошки
 */
export class Breadcrumb {
  public text: string;
  public uri: string;
  public hint: string;

  /**
   * Конструктор.
   * @param text отображаемый текст
   * @param uri адрес для перехода
   * @param hint подсказка
   */
  constructor(text: string, uri: string = '', hint: string = '') {
      this.text = text;
      this.uri = uri;
      this.hint = hint;
  }
}
