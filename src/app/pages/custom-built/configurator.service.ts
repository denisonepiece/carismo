import { Injectable } from '@angular/core';
import {Option} from './option';

@Injectable({
  providedIn: 'root'
})
export class ConfiguratorService {
  public items: Array<Option>;

  constructor() {

    this.items = [
      {
        label: 'CARBON',
        name: 'carbon',
        options: [
          {
            label: 'Option',
            value: 'Option'
          },
          {
            label: 'Regular 2x2 carbon matte',
            value: 'regular-2x2-carbon-matte'
          },
          {
            label: 'Forged carbon gloss',
            value: 'forged-carbon-gloss'
          },
          {
            label: 'Forged carbon matte',
            value: 'forged-carbon-matte'
          }
        ]
      },
      {
        label: 'GRIP',
        name: 'grip',
        options: [
          {
            label: 'Leather',
            value: 'leather'
          },
          {
            label: 'Leather perforated',
            value: 'leather-perforated'
          },
          {
            label: 'Alcantara',
            value: 'alcantara'
          }
        ]
      },
      {
        label: 'STRIPE',
        name: 'stripe',
        options: [
          {
            label: 'Red',
            value: 'red'
          },
          {
            label: 'White',
            value: 'white'
          },
          {
            label: 'Orange',
            value: 'orange'
          },
          {
            label: 'No stripe',
            value: 'no-stripe'
          },
          {
            label: 'Special request',
            value: 'special-request'
          }
        ]
      },
      {
        label: 'STITCHING',
        name: 'stitching',
        options: [
          {
            label: 'Red',
            value: 'red'
          },
          {
            label: 'White',
            value: 'white'
          },
          {
            label: 'Orange',
            value: 'orange'
          },
          {
            label: 'No stripe',
            value: 'no-stripe'
          },
          {
            label: 'Special request',
            value: 'special-request'
          }
        ]
      },
      {
        label: 'EXTRAS',
        name: 'extras',
        options: [
          {
            label: 'Flat top',
            value: 'flat-top',
          },
          {
            label: 'Paddles',
            value: 'paddles'
          },
          {
            label: 'Carbon trim',
            value: 'carbon-trim'
          },
          {
            label: 'Led',
            value: 'led'
          },
          {
            label: 'Cut top',
            value: 'cut-top'
          }
        ]
      },
    ];
  }
}
