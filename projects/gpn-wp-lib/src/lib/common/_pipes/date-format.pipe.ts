import {Pipe, PipeTransform} from '@angular/core';
import {hasOwnProperty} from 'tslint/lib/utils';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date, format = ''): any {
    if (!value) {
      return value;
    }
    if (!(value instanceof Date)) {
      value = new Date(value);
      // return value;
    }
    if (!(value instanceof Date)) {
      return '';
    }
    if (isNaN(value.getDate())) {
      return '';
    }
    if (format === '') {
      const day = ('0' + value.getDate()).slice(-2);
      const month = ('0' + (value.getMonth() + 1)).slice(-2);
      const year = value.getFullYear();
      return day + '.' + month + '.' + year;
    } else {
      const options = {
        // era: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        // weekday: 'long',
        // timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        // second: 'numeric'
      };

      return value.toLocaleString('ru', options);
    }

  }

}
