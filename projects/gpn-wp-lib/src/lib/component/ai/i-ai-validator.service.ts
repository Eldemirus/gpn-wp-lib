import {Observable} from 'rxjs';

export interface IAiValidatorService {
  validateFileByAI: (objId) => Observable<any>;
}
