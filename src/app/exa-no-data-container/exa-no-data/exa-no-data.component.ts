import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'exa-no-data',
  templateUrl: './exa-no-data.component.html',
  styleUrls: ['./exa-no-data.component.scss']
})
export class ExaNoDataComponent {
  /** icon displayed in the component - representation of no data */
  @Input() icon: string;
  /** title */
  @Input() title: string;
  /** description */
  @Input() description: string;
  /** text of the acton button */
  @Input() actionBtnTxt: string;
  /** acton triggered on acton button click */
  @Output() btnAction = new EventEmitter();
  constructor() {}

  onActionBtnClick = () => this.btnAction.emit();
}
