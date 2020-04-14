import { EppingGosford } from './epping-gosford';
import { GosfordTuggerah } from './gosford-tuggerah';
import { TuggerahLakeMacquarie } from './tuggerah-lakemacquarie';
import { LakeMacquarieNewcastle } from './lakemacquarie-newcastle';

export const EppingNewcastle = {
  type: 'LineString',
  coordinates: [
    ...EppingGosford.coordinates,
    ...GosfordTuggerah.coordinates,
    ...TuggerahLakeMacquarie.coordinates,
    ...LakeMacquarieNewcastle.coordinates,
  ],
};
