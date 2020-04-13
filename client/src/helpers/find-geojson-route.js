import { SydneyPortMacquarie } from '../data/GeoJSON/sydney-portmacquarie';
import { SydneyTaree } from '../data/GeoJSON/sydney-taree';
import { SydneyTuggerah } from '../data/GeoJSON/sydney-tuggerah';
import { SydneyEpping } from '../data/GeoJSON/sydney-epping';
import { SydneyParkes } from '../data/GeoJSON/sydney-parkes';
import { SydneyCanberra } from '../data/GeoJSON/sydney-canberra';
import { SydneyGoulburn } from '../data/GeoJSON/sydney-goulburn';
import { SydneyMittagong } from '../data/GeoJSON/sydney-mittagong';
import { SydneyBomdaberry } from '../data/GeoJSON/sydney-bomdaberry';

export default function findGeoJsonRoute(fromLocation, toLocation) {
  if (fromLocation === 'Sydney') {
    switch (toLocation) {
      case 'Port Macquarie':
        return SydneyPortMacquarie;
      case 'Taree':
        return SydneyTaree;
      case 'Tuggerah':
        return SydneyTuggerah;
      case 'Epping':
        return SydneyEpping;
      case 'Parkes':
        return SydneyParkes;
      case 'Canberra':
        return SydneyCanberra;
      case 'Goulburn':
        return SydneyGoulburn;
      case 'Mittagong':
        return SydneyMittagong;
      case 'Bomdaberry':
        return SydneyBomdaberry;
    }
  } else if (fromLocation === 'Port Macquarie') {
    switch (toLocation) {
      case 'Sydney':
        return SydneyPortMacquarie;
    }
  } else if (fromLocation === 'Taree') {
    switch (toLocation) {
      case 'Sydney':
        return SydneyTaree;
    }
  } else if (fromLocation === 'Epping') {
    switch (toLocation) {
      case 'Sydney':
        return SydneyEpping;
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
