/**
 * Ответ API.
 */
import {Models} from './models';

export class ApiResponse extends Models{
  /**
   * Код ответа.
   */
  code: number;
  /**
   * Содержательная часть ответа.
   */
  result: any;
  /**
   * Код ошибки.
   */
  error: any;

  /**
   * Код успешного ответа.
   */
  OK = 0;

  /**
   * Справочники.
   */
  ref: any;


  /**
   * Конструктор.
   */
  constructor(data: any) {
    super();
    this.fillFields(data, ['code', 'result', 'error']);
  }
}
