import { SydneyEpping } from './sydney-epping';
import { EppingGosford } from './epping-gosford';
import { GosfordTuggerah } from './gosford-tuggerah';

export const SydneyTuggerah = {
  type: 'LineString',
  coordinates: [
    ...SydneyEpping.coordinates,
    ...EppingGosford.coordinates,
    ...GosfordTuggerah.coordinates,
  ],
};
