import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.sass'],
})
export class RadioComponent implements OnInit {

  @Input() item: any;
  @Input() classList: string;
  @Input() name: string;
  public classes: any;

  constructor() {

  }

  ngOnInit() {
    this.classes = [];
  }
}
