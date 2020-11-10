/**
 * Запись о переходе на шаг рабочего процесса.
 */
import {User} from '../../../../../../../src/app/_models/user';

export class Workflow {
  id: number;
  createdBy?: number;
  createdByObject?: User;
  status?: string;
  statusName?: string;
  objectId?: number;
  userTo?: number;
  userFrom?: number;
  objectType?: string;
  created?: Date;
  updated?: Date;
  dateTo?: Date;

  /**
   * Конструктор.
   * @param step номер шага.
   * @param name наименование.
   */
  constructor(data = {}) {
    let fieldName = 'id';
    if (data[fieldName]) {
      this.id = data[fieldName];
    }

    fieldName = 'object_type';
    if (data[fieldName]) {
      this.objectType = data[fieldName];
    }

    fieldName = 'object_id';
    if (data[fieldName]) {
      this.objectId = data[fieldName];
    }

    fieldName = 'user_to';
    if (data[fieldName]) {
      this.userTo = data[fieldName];
    }

    fieldName = 'created_by';
    if (data[fieldName]) {
      this.createdBy = data[fieldName];
    }

    fieldName = 'user_from';
    if (data[fieldName]) {
      this.userFrom = data[fieldName];
    }

    fieldName = 'status';
    if (data[fieldName]) {
      this.status = data[fieldName];
    }

    fieldName = 'date_create';
    if (data[fieldName]) {
      this.created = new Date(data[fieldName]);
    }

    fieldName = 'updated';
    if (data[fieldName]) {
      this.updated = new Date(data[fieldName]);
    }

    fieldName = 'date_to';
    if (data[fieldName]) {
      this.dateTo = new Date(data[fieldName]);
    }
  }
}
