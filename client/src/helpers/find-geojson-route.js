// sydney
import { SydneyEpping } from '../data/GeoJSON/sydney-epping';
import { SydneyKatoomba } from '../data/GeoJSON/sydney-katoomba';
import { SydneyCampbelltown } from '../data/GeoJSON/sydney-campbelltown';
import { SydneySutherland } from '../data/GeoJSON/sydney-sutherland';
// northern
import { EppingGosford } from '../data/GeoJSON/epping-gosford';
import { GosfordTuggerah } from '../data/GeoJSON/gosford-tuggerah';
import { TuggerahLakeMacquarie } from '../data/GeoJSON/tuggerah-lakemacquarie';
import { LakeMacquarieNewcastle } from '../data/GeoJSON/lakemacquarie-newcastle';
import { NewcastleTaree } from '../data/GeoJSON/newcastle-taree';
import { TareePortMacquarie } from '../data/GeoJSON/taree-portmacquarie';
// western
import { KatoombaLithgow } from '../data/GeoJSON/katoomba-lithgow';
import { LithgowBathurst } from '../data/GeoJSON/lithgow-bathurst';
import { BathurstOrange } from '../data/GeoJSON/bathurst-orange';
import { OrangeParkes } from '../data/GeoJSON/orange-parkes';
// southern inland
import { CampbelltownMittagong } from '../data/GeoJSON/campbelltown-mittagong';
import { MittagongGoulburn } from '../data/GeoJSON/mittagong-goulburn';
import { GoulburnCanberra } from '../data/GeoJSON/goulburn-canberra';
// southern
import { SutherlandWollongong } from '../data/GeoJSON/sutherland-wollongong';
import { WollongongDapto } from '../data/GeoJSON/wollongong-dapto';
import { DaptoShellharbour } from '../data/GeoJSON/dapto-shellharbour';
import { ShellharbourKiama } from '../data/GeoJSON/shellharbour-kiama';
import { KiamaBombaberry } from '../data/GeoJSON/kiama-bomdaberry';

export default function findGeoJsonRoute(fromLocation, toLocation) {
  switch (fromLocation) {
    case 'Sydney':
      return findSydneyRoute(toLocation);
    // northern
    case 'Epping':
      return findEppingRoute(toLocation);
    case 'Gosford':
      return findGosfordRoute(toLocation);
    case 'Tuggerah':
      return findTuggerahRoute(toLocation);
    case 'Lake Macquarie':
      return findLakeMacquarieRoute(toLocation);
    case 'Newcastle':
      return findNewcastleRoute(toLocation);
    case 'Taree':
      return findTareeRoute(toLocation);
    case 'Port Macquarie':
      return findPortMacquarieRoute(toLocation);
    // western
    case 'Katoomba':
      return findKatoombaRoute(toLocation);
    case 'Lithgow':
      return findLithgowRoute(toLocation);
    case 'Bathurst':
      return findBathurstRoute(toLocation);
    case 'Orange':
      return findOrangeRoute(toLocation);
    case 'Parkes':
      return findParkesRoute(toLocation);
    // southern inland
    case 'Campbelltown':
      return findCampbelltownRoute(toLocation);
    case 'Mittagong':
      return findMittagongRoute(toLocation);
    case 'Goulburn':
      return findGoulburnRoute(toLocation);
    case 'Canberra':
      return findCanberraRoute(toLocation);
    // southern
    case 'Sutherland':
      return findSutherlandRoute(toLocation);
    case 'Wollongong':
      return findWollongongRoute(toLocation);
    case 'Dapto':
      return findDaptoRoute(toLocation);
    case 'Shellharbour':
      return findShellharbourRoute(toLocation);
    case 'Kiama':
      return findKiamaRoute(toLocation);
    case 'Bomdaberry':
      return findBomdaberryRoute(toLocation);
  }
}

const findSydneyRoute = (otherLocation) => {
  switch (otherLocation) {
    case 'Port Macquarie':
      return {
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
    case 'Taree':
      return {
        type: 'LineString',
        coordinates: [
          ...SydneyEpping.coordinates,
          ...EppingGosford.coordinates,
          ...GosfordTuggerah.coordinates,
          ...TuggerahLakeMacquarie.coordinates,
          ...LakeMacquarieNewcastle.coordinates,
          ...NewcastleTaree.coordinates,
        ],
      };
    case 'Newcastle':
      return {
        type: 'LineString',
        coordinates: [
          ...SydneyEpping.coordinates,
          ...EppingGosford.coordinates,
          ...GosfordTuggerah.coordinates,
          ...TuggerahLakeMacquarie.coordinates,
          ...LakeMacquarieNewcastle.coordinates,
        ],
      };
    case 'Lake Macquarie':
      return {
        type: 'LineString',
        coordinates: [
          ...SydneyEpping.coordinates,
          ...EppingGosford.coordinates,
          ...GosfordTuggerah.coordinates,
          ...TuggerahLakeMacquarie.coordinates,
        ],
      };
    case 'Tuggerah':
      return {
        type: 'LineString',
        coordinates: [
          ...SydneyEpping.coordinates,
          ...EppingGosford.coordinates,
          ...GosfordTuggerah.coordinates,
        ],
      };
    case 'Gosford':
      return {
        type: 'LineString',
        coordinates: [
          ...SydneyEpping.coordinates,
          ...EppingGosford.coordinates,
        ],
      };
    case 'Epping':
      return SydneyEpping;
    case 'Katoomba':
      return SydneyKatoomba;
    case 'Lithgow':
      return {
        type: 'LineString',
        coordinates: [
          ...SydneyKatoomba.coordinates,
          ...KatoombaLithgow.coordinates,
        ],
      };
    case 'Bathurst':
      return {
        type: 'LineString',
        coordinates: [
          ...SydneyKatoomba.coordinates,
          ...KatoombaLithgow.coordinates,
          ...LithgowBathurst.coordinates,
        ],
      };
    case 'Orange':
      return {
        type: 'LineString',
        coordinates: [
          ...SydneyKatoomba.coordinates,
          ...LithgowBathurst.coordinates,
          ...KatoombaLithgow.coordinates,
          ...BathurstOrange.coordinates,
        ],
      };
    case 'Parkes':
      return {
        type: 'LineString',
        coordinates: [
          ...SydneyKatoomba.coordinates,
          ...LithgowBathurst.coordinates,
          ...KatoombaLithgow.coordinates,
          ...BathurstOrange.coordinates,
          ...OrangeParkes.coordinates,
        ],
      };
    case 'Campbelltown':
      return SydneyCampbelltown;
    case 'Mittagong':
      return {
        type: 'LineString',
        coordinates: [
          ...findSydneyRoute('Campbelltown').coordinates,
          ...CampbelltownMittagong.coordinates,
        ],
      };
    case 'Goulburn':
      return {
        type: 'LineString',
        coordinates: [
          ...findSydneyRoute('Mittagong').coordinates,
          ...MittagongGoulburn.coordinates,
        ],
      };
    case 'Canberra':
      return {
        type: 'LineString',
        coordinates: [
          ...findSydneyRoute('Goulburn').coordinates,
          ...GoulburnCanberra.coordinates,
        ],
      };
    case 'Sutherland':
      return SydneySutherland;
    case 'Wollongong':
      return {
        type: 'LineString',
        coordinates: [
          ...findSydneyRoute('Sutherland').coordinates,
          ...SutherlandWollongong.coordinates,
        ],
      };
    case 'Dapto':
      return {
        type: 'LineString',
        coordinates: [
          ...findSydneyRoute('Wollongong').coordinates,
          ...WollongongDapto.coordinates,
        ],
      };
    case 'Shellharbour':
      return {
        type: 'LineString',
        coordinates: [
          ...findSydneyRoute('Dapto').coordinates,
          ...DaptoShellharbour.coordinates,
        ],
      };
    case 'Kiama':
      return {
        type: 'LineString',
        coordinates: [
          ...findSydneyRoute('Shellharbour').coordinates,
          ...ShellharbourKiama.coordinates,
        ],
      };
    case 'Bomdaberry':
      return {
        type: 'LineString',
        coordinates: [
          ...findSydneyRoute('Kiama').coordinates,
          ...KiamaBombaberry.coordinates,
        ],
      };
  }
};
const findEppingRoute = (otherLocation) => {
  switch (otherLocation) {
    case 'Sydney':
      return SydneyEpping;
    case 'Epping':
      return null;
    case 'Gosford':
      return EppingGosford;
    case 'Tuggerah':
      return {
        type: 'LineString',
        coordinates: [
          ...EppingGosford.coordinates,
          ...GosfordTuggerah.coordinates,
        ],
      };
    case 'Lake Macquarie':
      return {
        type: 'LineString',
        coordinates: [
          ...EppingGosford.coordinates,
          ...GosfordTuggerah.coordinates,
          ...TuggerahLakeMacquarie.coordinates,
        ],
      };
    case 'Newcastle':
      return {
        type: 'LineString',
        coordinates: [
          ...EppingGosford.coordinates,
          ...GosfordTuggerah.coordinates,
          ...TuggerahLakeMacquarie.coordinates,
          ...LakeMacquarieNewcastle.coordinates,
        ],
      };
    case 'Taree':
      return {
        type: 'LineString',
        coordinates: [
          ...EppingGosford.coordinates,
          ...GosfordTuggerah.coordinates,
          ...TuggerahLakeMacquarie.coordinates,
          ...LakeMacquarieNewcastle.coordinates,
          ...NewcastleTaree.coordinates,
        ],
      };
    case 'Port Macquarie':
      return {
        type: 'LineString',
        coordinates: [
          ...EppingGosford.coordinates,
          ...GosfordTuggerah.coordinates,
          ...TuggerahLakeMacquarie.coordinates,
          ...LakeMacquarieNewcastle.coordinates,
          ...NewcastleTaree.coordinates,
          ...TareePortMacquarie.coordinates,
        ],
      };
  }
};
const findGosfordRoute = (otherLocation) => {
  switch (otherLocation) {
    case 'Sydney':
      return findSydneyRoute('Gosford');
    case 'Epping':
      return EppingGosford;
    case 'Gosford':
      return null;
    case 'Tuggerah':
      return GosfordTuggerah;
    case 'Lake Macquarie':
      return {
        type: 'LineString',
        coordinates: [
          ...GosfordTuggerah.coordinates,
          ...TuggerahLakeMacquarie.coordinates,
        ],
      };
    case 'Newcastle':
      return {
        type: 'LineString',
        coordinates: [
          ...GosfordTuggerah.coordinates,
          ...TuggerahLakeMacquarie.coordinates,
          ...LakeMacquarieNewcastle.coordinates,
        ],
      };
    case 'Taree':
      return {
        type: 'LineString',
        coordinates: [
          ...GosfordTuggerah.coordinates,
          ...TuggerahLakeMacquarie.coordinates,
          ...LakeMacquarieNewcastle.coordinates,
          ...NewcastleTaree.coordinates,
        ],
      };
    case 'Port Macquarie':
      return {
        type: 'LineString',
        coordinates: [
          ...GosfordTuggerah.coordinates,
          ...TuggerahLakeMacquarie.coordinates,
          ...LakeMacquarieNewcastle.coordinates,
          ...NewcastleTaree.coordinates,
          ...TareePortMacquarie.coordinates,
        ],
      };
  }
};
const findTuggerahRoute = (otherLocation) => {
  switch (otherLocation) {
    case 'Sydney':
      return findSydneyRoute('Tuggerah');
    case 'Epping':
      return findEppingRoute('Tuggerah');
    case 'Gosford':
      return GosfordTuggerah;
    case 'Tuggerah':
      return null;
    case 'Lake Macquarie':
      return TuggerahLakeMacquarie;
    case 'Newcastle':
      return {
        type: 'LineString',
        coordinates: [
          ...TuggerahLakeMacquarie.coordinates,
          ...LakeMacquarieNewcastle.coordinates,
        ],
      };
    case 'Taree':
      return {
        type: 'LineString',
        coordinates: [
          ...TuggerahLakeMacquarie.coordinates,
          ...LakeMacquarieNewcastle.coordinates,
          ...NewcastleTaree.coordinates,
        ],
      };
    case 'Port Macquarie':
      return {
        type: 'LineString',
        coordinates: [
          ...TuggerahLakeMacquarie.coordinates,
          ...LakeMacquarieNewcastle.coordinates,
          ...NewcastleTaree.coordinates,
          ...TareePortMacquarie.coordinates,
        ],
      };
  }
};
const findLakeMacquarieRoute = (otherLocation) => {
  switch (otherLocation) {
    case 'Sydney':
      return findSydneyRoute('Lake Macquarie');
    case 'Epping':
      return findEppingRoute('Lake Macquarie');
    case 'Gosford':
      return findGosfordRoute('Lake Macquarie');
    case 'Tuggerah':
      return TuggerahLakeMacquarie;
    case 'Lake Macquarie':
      return null;
    case 'Newcastle':
      return LakeMacquarieNewcastle;
    case 'Taree':
      return {
        type: 'LineString',
        coordinates: [
          ...LakeMacquarieNewcastle.coordinates,
          ...NewcastleTaree.coordinates,
        ],
      };
    case 'Port Macquarie':
      return {
        type: 'LineString',
        coordinates: [
          ...LakeMacquarieNewcastle.coordinates,
          ...NewcastleTaree.coordinates,
          ...TareePortMacquarie.coordinates,
        ],
      };
  }
};
const findNewcastleRoute = (otherLocation) => {
  switch (otherLocation) {
    case 'Sydney':
      return findSydneyRoute('Newcastle');
    case 'Epping':
      return findEppingRoute('Newcastle');
    case 'Gosford':
      return findGosfordRoute('Newcastle');
    case 'Tuggerah':
      return findTuggerahRoute('Newcastle');
    case 'Lake Macquarie':
      return LakeMacquarieNewcastle;
    case 'Newcastle':
      return null;
    case 'Taree':
      return NewcastleTaree;
    case 'Port Macquarie':
      return {
        type: 'LineString',
        coordinates: [
          ...NewcastleTaree.coordinates,
          ...TareePortMacquarie.coordinates,
        ],
      };
  }
};
const findTareeRoute = (otherLocation) => {
  switch (otherLocation) {
    case 'Sydney':
      return findSydneyRoute('Taree');
    case 'Epping':
      return findEppingRoute('Taree');
    case 'Gosford':
      return findGosfordRoute('Taree');
    case 'Tuggerah':
      return findTuggerahRoute('Taree');
    case 'Lake Macquarie':
      return findLakeMacquarieRoute('Taree');
    case 'Newcastle':
      return NewcastleTaree;
    case 'Taree':
      return null;
    case 'Port Macquarie':
      return TareePortMacquarie;
  }
};
const findPortMacquarieRoute = (otherLocation) => {
  switch (otherLocation) {
    case 'Sydney':
      return findSydneyRoute('Port Macquarie');
    case 'Epping':
      return findEppingRoute('Port Macquarie');
    case 'Gosford':
      return findGosfordRoute('Port Macquarie');
    case 'Tuggerah':
      return findTuggerahRoute('Port Macquarie');
    case 'Lake Macquarie':
      return findLakeMacquarieRoute('Port Macquaire');
    case 'Newcastle':
      return findNewcastleRoute('Port Macquarie');
    case 'Taree':
      return TareePortMacquarie;
    case 'Port Macquarie':
      return null;
  }
};
const findKatoombaRoute = (otherLocation) => {
  switch (otherLocation) {
    case 'Sydney':
      return findSydneyRoute('Katoomba');
    case 'Katoomba':
      return null;
    case 'Lithgow':
      return KatoombaLithgow;
    case 'Bathurst':
      return {
        type: 'LineString',
        coordinates: [
          ...findKatoombaRoute('Lithgow').coordinates,
          ...LithgowBathurst.coordinates,
        ],
      };
    case 'Orange':
      return {
        type: 'LineString',
        coordinates: [
          ...findKatoombaRoute('Bathurst').coordinates,
          ...BathurstOrange.coordinates,
        ],
      };
    case 'Parkes':
      return {
        type: 'LineString',
        coordinates: [
          ...findKatoombaRoute('Orange').coordinates,
          ...OrangeParkes.coordinates,
        ],
      };
  }
};
const findLithgowRoute = (otherLocation) => {
  switch (otherLocation) {
    case 'Sydney':
      return findSydneyRoute('Lithgow');
    case 'Katoomba':
      return KatoombaLithgow;
    case 'Lithgow':
      return null;
    case 'Bathurst':
      return LithgowBathurst;
    case 'Orange':
      return {
        type: 'LineString',
        coordinates: [
          ...findLithgowRoute('Bathurst').coordinates,
          ...BathurstOrange.coordinates,
        ],
      };
    case 'Parkes':
      return {
        type: 'LineString',
        coordinates: [
          ...findKatoombaRoute('Orange').coordinates,
          ...OrangeParkes.coordinates,
        ],
      };
  }
};
const findBathurstRoute = (otherLocation) => {
  switch (otherLocation) {
    case 'Sydney':
      return findSydneyRoute('Bathurst');
    case 'Katoomba':
      return findKatoombaRoute('Bathurst');
    case 'Lithgow':
      return findLithgowRoute('Bathurst');
    case 'Bathurst':
      return null;
    case 'Orange':
      return BathurstOrange;
    case 'Parkes':
      return {
        type: 'LineString',
        coordinates: [
          ...findBathurstRoute('Orange').coordinates,
          ...OrangeParkes.coordinates,
        ],
      };
  }
};
const findOrangeRoute = (otherLocation) => {
  switch (otherLocation) {
    case 'Sydney':
      return findSydneyRoute('Orange');
    case 'Katoomba':
      return findKatoombaRoute('Orange');
    case 'Lithgow':
      return findLithgowRoute('Orange');
    case 'Bathurst':
      return findBathurstRoute('Orange');
    case 'Orange':
      return null;
    case 'Parkes':
      return OrangeParkes;
  }
};
const findParkesRoute = (otherLocation) => {
  switch (otherLocation) {
    case 'Sydney':
      return findSydneyRoute('Parkes');
    case 'Katoomba':
      return findKatoombaRoute('Parkes');
    case 'Lithgow':
      return findLithgowRoute('Parkes');
    case 'Bathurst':
      return findBathurstRoute('Parkes');
    case 'Orange':
      return findOrangeRoute('Parkes');
    case 'Parkes':
      return null;
  }
};
const findCampbelltownRoute = (otherLocation) => {
  switch (otherLocation) {
    case 'Sydney':
      return SydneyCampbelltown;
    case 'Campbelltown':
      return null;
    case 'Mittagong':
      return CampbelltownMittagong;
    case 'Goulburn':
      return {
        type: 'LineString',
        coordinates: [
          ...CampbelltownMittagong.coordinates,
          ...MittagongGoulburn.coordinates,
        ],
      };
    case 'Canberra':
      return {
        type: 'LineString',
        coordinates: [
          ...CampbelltownMittagong.coordinates,
          ...MittagongGoulburn.coordinates,
          ...GoulburnCanberra.coordinates,
        ],
      };
  }
};
const findMittagongRoute = (otherLocation) => {
  switch (otherLocation) {
    case 'Sydney':
      return findSydneyRoute('Mittagong');
    case 'Campbelltown':
      return CampbelltownMittagong;
    case 'Mittagong':
      return null;
    case 'Goulburn':
      return MittagongGoulburn;
    case 'Canberra':
      return {
        type: 'LineString',
        coordinates: [
          ...findMittagongRoute('Goulburn').coordinates,
          ...GoulburnCanberra.coordinates,
        ],
      };
  }
};
const findGoulburnRoute = (otherLocation) => {
  switch (otherLocation) {
    case 'Sydney':
      return findSydneyRoute('Goulburn');
    case 'Campbelltown':
      return findCampbelltownRoute('Goulburn');
    case 'Mittagong':
      return findMittagongRoute('Goulburn');
    case 'Goulburn':
      return null;
    case 'Canberra':
      return GoulburnCanberra;
  }
};
const findCanberraRoute = (otherLocation) => {
  switch (otherLocation) {
    case 'Sydney':
      return findSydneyRoute('Canberra');
    case 'Campbelltown':
      return findCampbelltownRoute('Canberra');
    case 'Mittagong':
      return findMittagongRoute('Canberra');
    case 'Goulburn':
      return findGoulburnRoute('Canberra');
    case 'Canberra':
      return null;
  }
};
const findSutherlandRoute = (otherLocation) => {
  switch (otherLocation) {
    case 'Sydney':
      return SydneySutherland;
    case 'Sutherland':
      return null;
    case 'Wollongong':
      return SutherlandWollongong;
    case 'Dapto':
      return {
        type: 'LineString',
        coordinates: [
          ...SutherlandWollongong.coordinates,
          ...WollongongDapto.coordinates,
        ],
      };
    case 'Shellharbour':
      return {
        type: 'LineString',
        coordinates: [
          ...SutherlandWollongong.coordinates,
          ...WollongongDapto.coordinates,
          ...DaptoShellharbour.coordinates,
        ],
      };
    case 'Kiama':
      return {
        type: 'LineString',
        coordinates: [
          ...SutherlandWollongong.coordinates,
          ...WollongongDapto.coordinates,
          ...DaptoShellharbour.coordinates,
          ...ShellharbourKiama.coordinates,
        ],
      };
    case 'Bomdaberry':
      return {
        type: 'LineString',
        coordinates: [
          ...SutherlandWollongong.coordinates,
          ...WollongongDapto.coordinates,
          ...DaptoShellharbour.coordinates,
          ...ShellharbourKiama.coordinates,
          ...KiamaBombaberry.coordinates,
        ],
      };
  }
};
const findWollongongRoute = (otherLocation) => {
  switch (otherLocation) {
    case 'Sydney':
      return findSydneyRoute('Wollongong');
    case 'Sutherland':
      return null;
    case 'Wollongong':
      return SutherlandWollongong;
    case 'Dapto':
      return {
        type: 'LineString',
        coordinates: [
          ...SutherlandWollongong.coordinates,
          ...WollongongDapto.coordinates,
        ],
      };
    case 'Shellharbour':
      return {
        type: 'LineString',
        coordinates: [
          ...SutherlandWollongong.coordinates,
          ...WollongongDapto.coordinates,
          ...DaptoShellharbour.coordinates,
        ],
      };
    case 'Kiama':
      return {
        type: 'LineString',
        coordinates: [
          ...SutherlandWollongong.coordinates,
          ...WollongongDapto.coordinates,
          ...DaptoShellharbour.coordinates,
          ...ShellharbourKiama.coordinates,
        ],
      };
    case 'Bomdaberry':
      return {
        type: 'LineString',
        coordinates: [
          ...SutherlandWollongong.coordinates,
          ...WollongongDapto.coordinates,
          ...DaptoShellharbour.coordinates,
          ...ShellharbourKiama.coordinates,
          ...KiamaBombaberry.coordinates,
        ],
      };
  }
};
const findDaptoRoute = (otherLocation) => {
  switch (otherLocation) {
    case 'Sydney':
      return findSydneyRoute('Dapto');
    case 'Sutherland':
      return findSutherlandRoute('Dapto');
    case 'Wollongong':
      return WollongongDapto;
    case 'Dapto':
      return null;
    case 'Shellharbour':
      return DaptoShellharbour;
    case 'Kiama':
      return {
        type: 'LineString',
        coordinates: [
          ...DaptoShellharbour.coordinates,
          ...ShellharbourKiama.coordinates,
        ],
      };
    case 'Bomdaberry':
      return {
        type: 'LineString',
        coordinates: [
          ...DaptoShellharbour.coordinates,
          ...ShellharbourKiama.coordinates,
          ...KiamaBombaberry.coordinates,
        ],
      };
  }
};
const findShellharbourRoute = (otherLocation) => {
  switch (otherLocation) {
    case 'Sydney':
      return findSydneyRoute('Shellharbour');
    case 'Sutherland':
      return findSutherlandRoute('Shellharbour');
    case 'Wollongong':
      return findWollongongRoute('Shellharbour');
    case 'Dapto':
      return DaptoShellharbour;
    case 'Shellharbour':
      return null;
    case 'Kiama':
      return ShellharbourKiama;
    case 'Bomdaberry':
      return {
        type: 'LineString',
        coordinates: [
          ...ShellharbourKiama.coordinates,
          ...KiamaBombaberry.coordinates,
        ],
      };
  }
};
const findKiamaRoute = (otherLocation) => {
  switch (otherLocation) {
    case 'Sydney':
      return findSydneyRoute('Kiama');
    case 'Sutherland':
      return findSutherlandRoute('Kiama');
    case 'Wollongong':
      return findWollongongRoute('Kiama');
    case 'Dapto':
      return findDaptoRoute('Kiama');
    case 'Shellharbour':
      return ShellharbourKiama;
    case 'Kiama':
      return null;
    case 'Bomdaberry':
      return KiamaBombaberry;
  }
};
const findBomdaberryRoute = (otherLocation) => {
  switch (otherLocation) {
    case 'Sydney':
      return findSydneyRoute('Bomdaberry');
    case 'Sutherland':
      return findSutherlandRoute('Bomdaberry');
    case 'Wollongong':
      return findWollongongRoute('Bomdaberry');
    case 'Dapto':
      return findDaptoRoute('Bomdaberry');
    case 'Shellharbour':
      return findShellharbourRoute('Bomdaberry');
    case 'Kiama':
      return KiamaBombaberry;
    case 'Bomdaberry':
      return null;
  }
};
