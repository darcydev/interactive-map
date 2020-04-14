import { SydneyEpping } from './sydney-epping';
import { EppingGosford } from './epping-gosford';

export const SydneyGosford = {
  type: 'LineString',
  coordinates: [...SydneyEpping.coordinates, ...EppingGosford.coordinates],
};
