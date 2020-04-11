import { SydneyPortMacquarie } from '../data/GeoJSON/sydney-portmacquarie';
import { SydneyParkes } from '../data/GeoJSON/sydney-parkes';
import { SydneyCanberra } from '../data/GeoJSON/sydney-canberra';
import { SydneyGoulburn } from '../data/GeoJSON/sydney-goulburn';
import { SydneyMittagong } from '../data/GeoJSON/sydney-mittagong';

export default function findGeoJsonRoute(fromLocation, toLocation) {
  if (fromLocation === 'Sydney') {
    switch (toLocation) {
      case 'Port Macquarie':
        return SydneyPortMacquarie;
      case 'Parkes':
        return SydneyParkes;
      case 'Canberra':
        return SydneyCanberra;
      case 'Goulburn':
        return SydneyGoulburn;
      case 'Mittagong':
        return SydneyMittagong;
    }
  } else if (fromLocation === 'Port Macquarie') {
    switch (toLocation) {
      case 'Sydney':
        return SydneyPortMacquarie;
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
