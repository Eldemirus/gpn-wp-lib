import {Injectable} from '@angular/core';
import {IAiValidatorService} from './i-ai-validator.service';
import {ApiResponse} from '../../common/_models/api-response';

@Injectable()
export class AiValidatorService {

  validateService: IAiValidatorService;

  id: number;

  /**
   * Признак выполнения проверки.
   */
  public inProgress: boolean;

  /**
   * Признак окончания работы ИИ.
   */
  done: boolean;

  /**
   * ответ от нейросети
   */
  public comment: string;

  /**
   * рамки распознанных объектов
   */
  public boxes = [];

  /**
   * ширина изображения
   */
  width: number;

  /**
   * высота изображения
   */
  height: number;

  constructor() {
  }

  /**
   * инициализация
   */
  init(): void {
    // this.validateService = serviceProvider;
    this.inProgress = false;
    this.done = false;
  }

  /**
   * Запускает проверку.
   */
  start(objectId: number, width: number, height: number): void {

    this.width = width;
    this.height = height;
    this.id = objectId;
    this.inProgress = true;
    this.validateFileByAI(0);
  }

  /**
   * Проверка через AI.
   * @param retry - номер повтора запроса
   */
  private validateFileByAI(retry: number): void {
    window.setTimeout(() => {
      this.inProgress = false;
      this.done = true;
      this.comment = 'Обработка завершена';
      const response = new ApiResponse(JSON.parse('{"code":0,"result":{"id":200,"data":{"errors":[],"results":[{"class":"pylon_main","bbox":[4,1,[1134,212,1971,3382]],"violations":[]},{"class":"pylon_enterexit","bbox":[6,0.99,[1719,3070,1976,3564]],"violations":["Повреждения или загрязнение указателя Въезда-Выезда"]},{"class":"pylon_gdrive_tag","bbox":[3,0.98,[1331,1356,1885,1568]],"violations":[]},{"class":"pylon_price_tag","bbox":[2,0.93,[1477,1941,1835,2097]],"violations":[]},{"class":"pylon_price_tag","bbox":[2,0.9,[1477,1578,1850,1739]],"violations":[]},{"class":"pylon_product_tag","bbox":[1,0.86,[1341,1941,1477,2082]],"violations":[]},{"class":"pylon_product_tag","bbox":[1,0.83,[1351,1568,1492,1709]],"violations":[]},{"class":"pylon_price_tag","bbox":[2,0.79,[1482,1759,1840,1916]],"violations":[]},{"class":"pylon_product_tag","bbox":[1,0.76,[1331,2112,1477,2258]],"violations":[]},{"class":"pylon_price_tag","bbox":[2,0.76,[1487,2122,1845,2289]],"violations":[]},{"class":"pylon_product_tag","bbox":[1,0.75,[1346,1754,1477,1896]],"violations":[]}],"rid":"bbe279e7-0242-41f1-9fe3-de67021112f2"}}}'));
      this.drawBox(response.result.data.results);
    }, 1000);
  }

  /**
   * подготовка списка областей
   * @param results - ответ нейросети
   */
  drawBox(results: any) {
    let i = 0;
    for (const result of results) {
      console.log(result);
      const box = {
        left: result.bbox[2][0] / this.width * 100,
        top: result.bbox[2][1] / this.height * 100,
        right: 100 - result.bbox[2][2] / this.width * 100,
        bottom: 100 - result.bbox[2][3] / this.height * 100,
        class: 'Объект: ' + result.class,
        active: false,
        error: result.violations.length > 0,
        id: i++,
        comment: result.violations.length
          ? result.violations : ['нет нарушений']
      };
      this.boxes.push(box);
    }
  }
}
