import { SydneyPortMacquarie } from '../data/GeoJSON/sydney-portmacquarie';
import { SydneyTaree } from '../data/GeoJSON/sydney-taree';
import { SydneyNewcastle } from '../data/GeoJSON/sydney-newcastle';
import { SydneyLakeMacquarie } from '../data/GeoJSON/sydney-lakemacquarie';
import { SydneyTuggerah } from '../data/GeoJSON/sydney-tuggerah';
import { SydneyGosford } from '../data/GeoJSON/sydney-gosford';
import { SydneyEpping } from '../data/GeoJSON/sydney-epping';
import { SydneyParkes } from '../data/GeoJSON/sydney-parkes';
import { SydneyCanberra } from '../data/GeoJSON/sydney-canberra';
import { SydneyGoulburn } from '../data/GeoJSON/sydney-goulburn';
import { SydneyMittagong } from '../data/GeoJSON/sydney-mittagong';
import { SydneyBomdaberry } from '../data/GeoJSON/sydney-bomdaberry';
import { EppingGosford } from '../data/GeoJSON/epping-gosford';
import { EppingTuggerah } from '../data/GeoJSON/epping-tuggerah';
import { EppingLakeMacquarie } from '../data/GeoJSON/epping-lakemacquarie';
import { EppingNewcastle } from '../data/GeoJSON/epping-newcastle';
import { EppingTaree } from '../data/GeoJSON/epping-taree';
import { EppingPortMacquarie } from '../data/GeoJSON/epping-portmacquarie';
import { GosfordTuggerah } from '../data/GeoJSON/gosford-tuggerah';
import { TuggerahLakeMacquarie } from '../data/GeoJSON/tuggerah-lakemacquarie';
import { LakeMacquarieNewcastle } from '../data/GeoJSON/lakemacquarie-newcastle';
import { NewcastleTaree } from '../data/GeoJSON/newcastle-taree';
import { TareePortMacquarie } from '../data/GeoJSON/taree-portmacquarie';

export default function findGeoJsonRoute(fromLocation, toLocation) {
  if (fromLocation === 'Sydney') {
    switch (toLocation) {
      case 'Port Macquarie':
        return SydneyPortMacquarie;
      case 'Taree':
        return SydneyTaree;
      case 'Newcastle':
        return SydneyNewcastle;
      case 'Lake Macquarie':
        return SydneyLakeMacquarie;
      case 'Tuggerah':
        return SydneyTuggerah;
      case 'Gosford':
        return SydneyGosford;
      case 'Epping':
        return SydneyEpping;
      case 'Parkes':
        return SydneyParkes;
      /*       case 'Orange':
        return SydneyOrange;
      case 'Bathurst':
        return SydneyBathurst;
      case 'Lithgow':
        return SydneyLithgow;
      case 'Katoomba':
        return SydneyKatoomba; */
      case 'Canberra':
        return SydneyCanberra;
      case 'Goulburn':
        return SydneyGoulburn;
      /*       case 'Mittagong':
        return SydneyMittagong;
      case 'Campbelltown':
        return SydneyCampbelltown;
      case 'Bomdaberry':
        return SydneyBomdaberry;
      case 'Kiama':
        return SydneyKiama;
      case 'Shellharbour':
        return SydneyShellharbour;
      case 'Dapto':
        return SydneyDapto;
      case 'Wollongong':
        return SydneyWollongong;
      case 'Sutherland':
        return SydneySutherland; */
    }
  } else if (fromLocation === 'Port Macquarie') {
    switch (toLocation) {
      case 'Sydney':
        return SydneyPortMacquarie;
      case 'Taree':
        return TareePortMacquarie;
    }
  } else if (fromLocation === 'Taree') {
    switch (toLocation) {
      case 'Sydney':
        return SydneyTaree;
      case 'Port Macquarie':
        return TareePortMacquarie;
    }
  } else if (fromLocation === 'Epping') {
    switch (toLocation) {
      case 'Sydney':
        return SydneyEpping;
      case 'Gosford':
        return EppingGosford;
      case 'Tuggerah':
        return EppingTuggerah;
      case 'Lake Macquarie':
        return EppingLakeMacquarie;
      case 'Newcastle':
        return EppingNewcastle;
      case 'Taree':
        return EppingTaree;
      case 'Port Macquarie':
        return EppingPortMacquarie;
    }
  } else if (fromLocation === 'Gosford') {
    switch (toLocation) {
      case 'Sydney':
        return SydneyGosford;
      case 'Epping':
        return EppingGosford;
      case 'Tuggerah':
        return GosfordTuggerah;
    }
  } else if (fromLocation === 'Tuggerah') {
    switch (toLocation) {
      case 'Sydney':
        return SydneyTuggerah;
      case 'Epping':
        return null;
      case 'Gosford':
        return GosfordTuggerah;
      case 'Lake Macquarie':
        return TuggerahLakeMacquarie;
      case 'Newcastle':
        return null;
      case 'Taree':
        return null;
      case 'Port Macquarie':
        return null;
    }
  } else if (fromLocation === 'Lake Macquarie') {
    switch (toLocation) {
      case 'Sydney':
        return SydneyLakeMacquarie;
      case 'Epping':
        return null;
      case 'Gosford':
        return null;
      case 'Tuggerah':
        return TuggerahLakeMacquarie;
      case 'Newcastle':
        return LakeMacquarieNewcastle;
      case 'Taree':
        return null;
      case 'Port Macquarie':
        return null;
    }
  } else if (fromLocation === 'Newcastle') {
    switch (toLocation) {
      case 'Sydney':
        return SydneyNewcastle;
      case 'Epping':
        return null;
      case 'Gosford':
        return null;
      case 'Tuggerah':
        return null;
      case 'Lake Macquarie':
        return LakeMacquarieNewcastle;
      case 'Taree':
        return NewcastleTaree;
      case 'Port Macquarie':
        return null;
    }
  } else if (fromLocation === 'Canberra') {
    switch (toLocation) {
      case 'Sydney':
        return SydneyCanberra;
      case 'Parkes':
        return SydneyParkes;
      case 'Canberra':
        return SydneyCanberra;
      case 'Goulburn':
        return SydneyGoulburn;
      case 'Mittagong':
        return SydneyMittagong;
    }
  }
}
