import { EppingGosford } from './epping-gosford';
import { GosfordTuggerah } from './gosford-tuggerah';

export const EppingTuggerah = {
  type: 'LineString',
  coordinates: [...EppingGosford.coordinates, ...GosfordTuggerah.coordinates],
};
