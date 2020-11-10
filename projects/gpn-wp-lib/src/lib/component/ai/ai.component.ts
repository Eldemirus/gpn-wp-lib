import {Component, Input, OnInit} from '@angular/core';
import {AiValidatorService} from './ai-validator.service';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.scss']
})
export class AiComponent implements OnInit {

  @Input() image: string;

  public validatorService: AiValidatorService;
  /**
   * Признак выполнения проверки.
   */
  inProgress: boolean;

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

  /**
   * Конструктор.
   */
  constructor() {
    this.validatorService = new AiValidatorService();
    this.validatorService.init();
  }

  getImgSize(e) {
    this.width = e.target.naturalWidth;
    this.height = e.target.naturalHeight;
  }

  /**
   * Запускает проверку.
   */
  start() {
    this.validatorService.start(1, this.width, this.height);
  }

  /**
   * Действия при инициализации.
   */
  ngOnInit() {
  }

}
