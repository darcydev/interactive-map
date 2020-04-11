import React, { useState, useEffect, useCallback } from 'react';
import DeckGL from '@deck.gl/react';
import { PathLayer, IconLayer, GeoJsonLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import styled from 'styled-components';
import media from 'styled-media-query';
import Select from 'react-select';

import InfoBox from './InfoBox';
import Header from './Header';
import Sliders from './Sliders';
import Key from './Key';
import Tooltip from './Tooltip';
import NewText from './NewText';
import { journeyTimes } from '../data/journeyTimes';
import { CITIES } from '../data/cities';
import { convertKeysToOption } from '../helpers/convertKeysToOption';
import findExactRoute from '../helpers/findExactRoute';
import findGeoJsonRoute from '../helpers/find-geojson-route';
import { allRoutes } from '../data/route-layers';
import { SydneyPortMacquarie } from '../data/GeoJSON/sydney-portmacquarie';
import { SydneyParkes } from '../data/GeoJSON/sydney-parkes';
import { SydneyCanberra } from '../data/GeoJSON/sydney-canberra';
// import {SydneyCanberra} from '../data/GeoJSON/sydney-canberra';

export default function Map() {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [routeSelected, setRouteSelected] = useState(allRoutes);
  const [toolTip, setToolTip] = useState({
    title: '',
    visible: false,
  });
  const [viewport, setViewport] = useState({
    latitude: -33.87364,
    longitude: 151.206913,
    zoom: 7,
    bearing: 0,
    pitch: 0,
  });
  const [geoJsonLayer, setGeoJsonLayer] = useState('');
  const [layers, setLayers] = useState({
    northern: SydneyPortMacquarie,
    western: SydneyParkes,
    southernInland: SydneyCanberra,
    southern: null,
  });

  let beforeTime, afterTime;

  // GET THE STATION MARKERS
  const NEW_MARKERS = [];
  for (let [key, value] of Object.entries(CITIES)) {
    NEW_MARKERS.push({
      name: key,
      exists: 2214,
      coordinates: value.coordinates,
      routes: value.routes,
      icon:
        'https://targetresearchgroup.com/wp-content/uploads/2016/04/green-target.png',
    });
  }

  // GET THE TRAIN ROUTES
  let features_list = [];
  Object.entries(layers).map((v) => {
    const route = v[0];
    const layer = v[1];

    if (layer) {
      features_list.push({
        type: 'Feature',
        id: route,
        properties: { ID: route },
        geometry: layer,
      });
    }
  });

  if (
    fromLocation &&
    toLocation &&
    fromLocation !== toLocation &&
    journeyTimes[fromLocation][toLocation]
  ) {
    beforeTime = journeyTimes[fromLocation][toLocation][0];
    afterTime = journeyTimes[fromLocation][toLocation][1];
  }

  const onIconHover = (d) => {
    if (d.object) {
      setToolTip({
        title: d.object.name,
        visible: true,
        routes: d.object.routes,
      });
    } else {
      setToolTip({
        visible: false,
      });
    }
  };

  const onMapClicked = (event) => {
    if (!event.object) return;
    const { name } = event.object;

    if (name === fromLocation) return;
    else if (fromLocation === '' && toLocation === '') {
      setFromLocation(name);
    } else if (toLocation === '') {
      setToLocation(name);
    } else {
      setFromLocation(name);
      setToLocation('');
    }
  };

  const clearForm = () => {
    setFromLocation('');
    setToLocation('');
    setRouteSelected(allRoutes);
    clearLayers();
  };

  const clearLayers = () => {
    setLayers({
      northern: SydneyPortMacquarie,
      western: SydneyParkes,
      southernInland: SydneyCanberra,
      southern: null,
    });
  };

  const updateRouteLayer = useCallback(() => {
    if (fromLocation === 'Sydney') setRouteSelected(allRoutes);
    else {
      // set all layers to null
      clearLayers();

      const ROUTES = CITIES[fromLocation].routes;

      if (ROUTES.includes('northern-route'))
        setLayers({ northern: SydneyPortMacquarie });
      if (ROUTES.includes('western-route'))
        setLayers({ western: SydneyParkes });
      if (ROUTES.includes('southern-inland-route'))
        setLayers({ southernInland: SydneyCanberra });
      // if (ROUTES.includes('southern-route')) setLayers({southern: SydneyBomdaberry})
    }
  }, [fromLocation]);

  useEffect(() => {
    if (fromLocation && !toLocation) {
      updateRouteLayer();
    } else if (fromLocation && toLocation) {
      const exactRoute = findExactRoute(fromLocation, toLocation);
      setRouteSelected(exactRoute);

      const geoJsonRoute = findGeoJsonRoute(fromLocation, toLocation);
      setGeoJsonLayer(geoJsonRoute);
    }
  }, [fromLocation, toLocation, updateRouteLayer]);

  return (
    <StyledContainer>
      <div className='sider'>
        <Header />
        <StyledControlPanel>
          <h1>Travel times</h1>
          <div className='select-bars'>
            <div className='select-bar'>
              <h5 style={{ textAlign: 'left' }}>From:</h5>
              <StyledSelect
                placeholder={fromLocation ? fromLocation : 'SELECT LOCATION'}
                onFocus={() => setFromLocation('')}
                onChange={(e) => setFromLocation(e.value)}
                options={convertKeysToOption(journeyTimes)}
              />
            </div>
            <div className='select-bar'>
              <h5 style={{ textAlign: 'left' }}>To:</h5>
              <StyledSelect
                placeholder={toLocation ? toLocation : 'SELECT LOCATION'}
                onChange={(e) => setToLocation(e.value)}
                options={
                  fromLocation
                    ? convertKeysToOption(journeyTimes[fromLocation])
                    : null
                }
              />
            </div>
          </div>
          <Sliders before={beforeTime} after={afterTime} />
          {fromLocation ? (
            <div className='info-box-container'>
              <InfoBox className='info-box' fromLocation={fromLocation} />
              <button className='clear-form-btn' onClick={clearForm}>
                Clear destinations
              </button>
            </div>
          ) : (
            <NewText />
          )}
        </StyledControlPanel>
      </div>
      <div className='map'>
        <Tooltip toolTip={toolTip} />
        <div style={{ position: 'relative', height: '100vh' }}>
          <DeckGL
            initialViewState={viewport}
            controller={true}
            onClick={onMapClicked}
            onViewportChange={(viewport) => setViewport(viewport)}
            layers={[
              new GeoJsonLayer({
                id: 'geojson-layer',
                data: {
                  type: 'FeatureCollection',
                  features: features_list,
                },
                pickable: true,
                stroked: false,
                extruded: true,
                lineWidthMinPixels: 7,
                getLineColor: [50, 168, 82],
                getRadius: 100,
                getElevation: 30,
              }),
              new IconLayer({
                id: 'icon-layer',
                data: NEW_MARKERS,
                pickable: true,
                getIcon: (d) => ({
                  url:
                    'https://targetresearchgroup.com/wp-content/uploads/2016/04/green-target.png',
                  width: 328,
                  height: 328,
                  anchorY: 128,
                }),
                sizeScale: 15,
                getPosition: (d) => d.coordinates,
                getSize: () => 2.5,
                getColor: (d) => [Math.sqrt(d.exits), 140, 0],
                onHover: (d) => onIconHover(d),
              }),
            ]}
          >
            <StaticMap
              mapStyle='mapbox://styles/mapbox/streets-v11'
              mapboxApiAccessToken={process.env.REACT_APP_MAP_GL_ACCESS_TOKEN}
            />
            <Key />
          </DeckGL>
        </div>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;

  .sider {
    width: 35%;
    background: #fff;

    .select-bars {
      .select-bar {
        width: 48%;

        h5 {
          font-size: 21px;
        }
      }
    }
  }

  .map {
    width: 65%;
  }

  ${media.lessThan('700px')`
    .sider {
      width: 100%;
      height: 100vh;

      .select-bars {
        flex-direction: column;

        .select-bar {
          width: 100%;
          padding: 10px 0;

          h5 {
            font-size: 22px;
            margin-bottom: 0;
          }
        }
      }
    }

    .map {
      display: none;
    }
  `}
`;

const StyledControlPanel = styled.div`
  padding: 20px 40px;

  h1 {
    font-weight: 600;
    font-size: 45px;

    ${media.lessThan('1200px')`
      font-size: 35px;
    `}

    ${media.lessThan('850px')`
      font-size: 25px;
    `}

    ${media.lessThan('700px')`
      font-size: 45px;
    `}

    ${media.lessThan('450px')`
      font-size: 30px;
    `}
  }

  .clear-form-btn {
    margin: 15px 0;
    border-radius: 15px;
    font-size: 10px;
    background-color: #808080;
    border: none;
    color: white;
    padding: 8px;
    width: 130px;

    ${media.lessThan('700px')`
      position: relative;
      font-size: 18px;
      width: 210px;
    `}
  }

  .select-bars {
    display: flex;
    justify-content: space-between;
  }

  .sliders {
    padding-top: 20px;
  }
`;

const StyledSelect = styled(Select)`
  font-size: 15px;

  ${media.lessThan('700px')`
		font-size: 16px;

		.css-yk16xz-control {
			height: 64px;
		}
	`}
`;
