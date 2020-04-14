import { SydneyEpping } from './sydney-epping';
import { EppingGosford } from './epping-gosford';
import { GosfordTuggerah } from './gosford-tuggerah';
import { TuggerahLakeMacquarie } from './tuggerah-lakemacquarie';

export const SydneyLakeMacquarie = {
  type: 'LineString',
  coordinates: [
    ...SydneyEpping.coordinates,
    ...EppingGosford.coordinates,
    ...GosfordTuggerah.coordinates,
    ...TuggerahLakeMacquarie.coordinates,
  ],
};
