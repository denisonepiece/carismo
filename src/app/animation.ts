import {animate, group, query, style, transition, trigger} from '@angular/animations';

const pages: Array<string> = ['home', 'catalog', 'custom-built', 'media', 'about', 'how-to-order', 'contact'];

export const slider = trigger('routeAnimations', getAllTransition(pages));

function getAllTransition(pagesList: Array<string>) {
  const allTransition = [];
  for (let i = 0; i < pagesList.length; i++) {
    for (let j = 0; j < pagesList.length; j++) {
      if (i < j) {
        allTransition
          .push(transition(`${pagesList[i]} => ${pagesList[j]}`, slideTo('right')));
      } else if (i > j) {
        allTransition
          .push(transition(`${pagesList[i]} => ${pagesList[j]}`, slideTo('left')));
      }
    }
  }
  return allTransition;
}



function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        [direction]: 0,
        width: '100%',
        overflowX: 'none'
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease-in-out', style({ [direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('600ms ease-in-out', style({ [direction]: '0%'}))
      ])
    ]),
  ];
}
