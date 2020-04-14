import { EppingGosford } from './epping-gosford';
import { GosfordTuggerah } from './gosford-tuggerah';
import { TuggerahLakeMacquarie } from './tuggerah-lakemacquarie';

export const EppingLakeMacquarie = {
  type: 'LineString',
  coordinates: [
    ...EppingGosford.coordinates,
    ...GosfordTuggerah.coordinates,
    ...TuggerahLakeMacquarie.coordinates,
  ],
};
