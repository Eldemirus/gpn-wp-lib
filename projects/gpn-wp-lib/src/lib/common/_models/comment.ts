import {Models} from './models';

export class Comment extends Models {

  id: string;
  active: boolean; // Y | N
  refId: number;
  refType: string; // mock | brand_book | audit | audit_schedule
  parentId: number;
  subRefId: number;
  subRefType: string;
  postDate: string;
  postMessage: string;
  authorName: string;
  authorEmail: string;
  authorId: string;
  login: string;
  personalPhoto?: string; // null or URL
  replies?: Comment[];

  /**
   * Признак удаленности.
   */
  deleted?: boolean;

  /**
   * Конструктор.
   * @param data - объект, содержащий информацию для конструктора.
   */
  constructor(data = {}) {
    super();
    let fieldName;
    this.fillFields(data, ['id', 'login']);
    this.fillFieldNames(data, new Map([
      ['parentId', 'parent_id'],
      ['postDate', 'post_message'],
      ['refId', 'ref_id'],
      ['refType', 'ref_type'],
      ['subRefId', 'subref_id'],
      ['subRefType', 'subref_type'],
      ['postDate', 'post_date'],
      ['authorId', 'user_id'],
      ['personalPhoto', 'personal_photo'],
    ]));

    fieldName = 'active';
    if (data[fieldName]) {
      this.active = data[fieldName] === 'Y';
    }
  }
}
