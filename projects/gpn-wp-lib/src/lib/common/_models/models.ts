/**
 * Основа для дата-классов, заполняемых значениями из API
 */
export abstract class Models {

  /**
   * Заполнение полей данными, полученными из API, без изменения формата данных
   * @param source - ответ API
   * @param fields - список полей для заполнения без изменения формата
   */
  protected fillFields (source: any, fields: string[]) {
    for (const fieldName of fields) {
      if (source.hasOwnProperty(fieldName)) {
        this[fieldName] = source[fieldName];
      }
    }
  }

  protected fillField (source: any, fieldName: string, value: any = '') {
    if (source.hasOwnProperty(fieldName)) {
      this[fieldName] = source[fieldName];
    }
  }

  protected fillFieldNames (source: any, fields: Map<string,string>) {
    fields.forEach((propertyName, fieldName) => {
      if (source.hasOwnProperty(fieldName)) {
        this[propertyName] = source[fieldName];
      }
    });
  }
}
