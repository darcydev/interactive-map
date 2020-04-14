import { SydneyEpping } from './sydney-epping';
import { EppingGosford } from './epping-gosford';
import { GosfordTuggerah } from './gosford-tuggerah';
import { TuggerahLakeMacquarie } from './tuggerah-lakemacquarie';
import { LakeMacquarieNewcastle } from './lakemacquarie-newcastle';
import { NewcastleTaree } from './newcastle-taree';
import { TareePortMacquarie } from './taree-portmacquarie';

export const SydneyPortMacquarie = {
  type: 'LineString',
  coordinates: [
    ...SydneyEpping.coordinates,
    ...EppingGosford.coordinates,
    ...GosfordTuggerah.coordinates,
    ...TuggerahLakeMacquarie.coordinates,
    ...LakeMacquarieNewcastle.coordinates,
    ...NewcastleTaree.coordinates,
    ...TareePortMacquarie.coordinates,
  ],
};
