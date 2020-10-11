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
            label: 'Matte forged carbon',
            value: 'matte-forged-carbon'
          },
          {
            label: 'Gloss forged carbon',
            value: 'gloss-forged-carbon'
          },
          {
            label: '2х2 Matte Carbon Fiber',
            value: '2x2-matte-carbon-fiber'
          },
          {
            label: '2х2 Gloss Carbon Fiber',
            value: '2x2-gloss-carbon-fiber'
          },
          {
            label: 'Alcatraz',
            value: 'alcatraz'
          },
          {
            label: 'Leather',
            value: 'leather'
          },
          {
            label: 'Perforated leather',
            value: 'perforated-leather'
          },
        ]
      },
      {
        label: 'GRIP',
        name: 'grip',
        options: [
          {
            label: 'Unidirectional Gloss Carbon Fiber',
            value: 'unidirectional-gloss-carbon-fiber'
          },
          {
            label: 'Matte forged carbon',
            value: 'matte-forged-carbon'
          },
          {
            label: 'Gloss forged carbon',
            value: 'gloss-forged-carbon'
          },
          {
            label: '2х2 Matte Carbon Fiber',
            value: '2x2-matte-carbon-fiber'
          },
          {
            label: '2х2 Gloss Carbon Fiber',
            value: '2x2-gloss-carbon-fiber'
          },
          {
            label: 'Alcatraz',
            value: 'alcatraz'
          },
          {
            label: 'Leather',
            value: 'leather'
          },
          {
            label: 'Perforated leather',
            value: 'perforated-leather'
          },
        ]
      },
      {
        label: 'STRIP',
        name: 'strip',
        options: [
          {
            label: 'Unidirectional Gloss Carbon Fiber',
            value: 'unidirectional-gloss-carbon-fiber'
          },
          {
            label: 'Matte forged carbon',
            value: 'matte-forged-carbon'
          },
          {
            label: 'Gloss forged carbon',
            value: 'gloss-forged-carbon'
          },
          {
            label: '2х2 Matte Carbon Fiber',
            value: '2x2-matte-carbon-fiber'
          },
          {
            label: '2х2 Gloss Carbon Fiber',
            value: '2x2-gloss-carbon-fiber'
          },
          {
            label: 'Alcatraz',
            value: 'alcatraz'
          },
          {
            label: 'Leather',
            value: 'leather'
          },
          {
            label: 'Perforated leather',
            value: 'perforated-leather'
          },
        ]
      },
      {
        label: 'STITCHING',
        name: 'stitching',
        options: [
          {
            label: 'Unidirectional Gloss Carbon Fiber',
            value: 'unidirectional-gloss-carbon-fiber'
          },
          {
            label: 'Matte forged carbon',
            value: 'matte-forged-carbon'
          },
          {
            label: 'Gloss forged carbon',
            value: 'gloss-forged-carbon'
          },
          {
            label: '2х2 Matte Carbon Fiber',
            value: '2x2-matte-carbon-fiber'
          },
          {
            label: '2х2 Gloss Carbon Fiber',
            value: '2x2-gloss-carbon-fiber'
          },
          {
            label: 'Alcatraz',
            value: 'alcatraz'
          },
          {
            label: 'Leather',
            value: 'leather'
          },
          {
            label: 'Perforated leather',
            value: 'perforated-leather'
          },
        ]
      },
      {
        label: 'EXTRAS',
        name: 'extras',
        options: [
          {
            label: 'Unidirectional Gloss Carbon Fiber',
            value: 'unidirectional-gloss-carbon-fiber'
          },
          {
            label: 'Matte forged carbon',
            value: 'matte-forged-carbon'
          },
          {
            label: 'Gloss forged carbon',
            value: 'gloss-forged-carbon'
          },
          {
            label: '2х2 Matte Carbon Fiber',
            value: '2x2-matte-carbon-fiber'
          }
        ]
      },
    ];
  }
}
