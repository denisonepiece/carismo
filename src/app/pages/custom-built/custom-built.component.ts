import {Component, OnInit} from '@angular/core';
import {ConfiguratorService} from './configurator.service';
import {Option} from './option';

@Component({
  selector: 'app-custom-built',
  templateUrl: './custom-built.component.html',
  styleUrls: ['./custom-built.component.sass']
})

export class CustomBuiltComponent implements OnInit {
  public options: Array<Option>;
  public selectedOption: Option;

  constructor(
    confService: ConfiguratorService,
  ) {
    this.options = confService.items;
    this.selectedOption = confService.items[2];
  }

  public getPosition(index: number) {
    return (50 - index * (100 / this.options.length)) - (50 / this.options.length);
  }

  public getPositionSelected(index: number) {
    let distance = 180 - 50;

    return (distance + index * (100 / this.selectedOption.options.length)) + (50 / this.selectedOption.options.length);
  }

  public selectOption(item: Option) {
    this.selectedOption = item;
  }

  ngOnInit() {}
}
