import { CITIES } from '../../data/cities';
import { fetchPolyline } from '../../helpers/fetch-polyline';

/* fetchPolyline(
  `${CITIES.Sydney.lat},${CITIES.Sydney.long}`,
  `${CITIES.Tuggerah.lat},${CITIES.Tuggerah.long}`
); */

export const SydneyTuggerah = {
  type: 'LineString',
  coordinates: [
    [151.20704, -33.87297],
    [151.20637, -33.87278],
    [151.2057, -33.87275],
    [151.2055, -33.87069],
    [151.20503, -33.86662],
    [151.20451, -33.86359],
    [151.20435, -33.86294],
    [151.20492, -33.86181],
    [151.2055, -33.86077],
    [151.20651, -33.85884],
    [151.2091, -33.85469],
    [151.21231, -33.84967],
    [151.2127, -33.84792],
    [151.21188, -33.84538],
    [151.2109, -33.84285],
    [151.21023, -33.84076],
    [151.21027, -33.83917],
    [151.21083, -33.83566],
    [151.21202, -33.8326],
    [151.21312, -33.83067],
    [151.21348, -33.82942],
    [151.21348, -33.82807],
    [151.21303, -33.82667],
    [151.21224, -33.82556],
    [151.21046, -33.82439],
    [151.20817, -33.82376],
    [151.20666, -33.82307],
    [151.20429, -33.82089],
    [151.20269, -33.81893],
    [151.20026, -33.81531],
    [151.19945, -33.8141],
    [151.19825, -33.81306],
    [151.19659, -33.8124],
    [151.19496, -33.81229],
    [151.19113, -33.81332],
    [151.18793, -33.81379],
    [151.18442, -33.81355],
    [151.17972, -33.81244],
    [151.17764, -33.81228],
    [151.17325, -33.81261],
    [151.17101, -33.8124],
    [151.16859, -33.81179],
    [151.16028, -33.80999],
    [151.1578, -33.8092],
    [151.15594, -33.80829],
    [151.15257, -33.8061],
    [151.14965, -33.80483],
    [151.14715, -33.80342],
    [151.14514, -33.80175],
    [151.14276, -33.80021],
    [151.14068, -33.7994],
    [151.13867, -33.79828],
    [151.13724, -33.79688],
    [151.13448, -33.79442],
    [151.13181, -33.79235],
    [151.12671, -33.78851],
    [151.12585, -33.78783],
    [151.12576, -33.78776],
    [151.12585, -33.78741],
    [151.12653, -33.7868],
    [151.12761, -33.78586],
    [151.12812, -33.78538],
    [151.1299, -33.78361],
    [151.13158, -33.78199],
    [151.13463, -33.77898],
    [151.13522, -33.77784],
    [151.13539, -33.77692],
    [151.13531, -33.77495],
    [151.13528, -33.77413],
    [151.13552, -33.77162],
    [151.13651, -33.76838],
    [151.1368, -33.76735],
    [151.13676, -33.76507],
    [151.13698, -33.76345],
    [151.13784, -33.76111],
    [151.13809, -33.75907],
    [151.13759, -33.75714],
    [151.1384, -33.75572],
    [151.13967, -33.75505],
    [151.14132, -33.75411],
    [151.14321, -33.75257],
    [151.14505, -33.75175],
    [151.14622, -33.75135],
    [151.14693, -33.75081],
    [151.14667, -33.74998],
    [151.1462, -33.74939],
    [151.14546, -33.74844],
    [151.14496, -33.74661],
    [151.14382, -33.74577],
    [151.1422, -33.74518],
    [151.14116, -33.74436],
    [151.13938, -33.74225],
    [151.13603, -33.73923],
    [151.13304, -33.73634],
    [151.13144, -33.73372],
    [151.13046, -33.73321],
    [151.12751, -33.73348],
    [151.12675, -33.73311],
    [151.12545, -33.73157],
    [151.12377, -33.73021],
    [151.1204, -33.72819],
    [151.11982, -33.72751],
    [151.11959, -33.72623],
    [151.11923, -33.72482],
    [151.11817, -33.72235],
    [151.1173, -33.72081],
    [151.117, -33.72026],
    [151.11489, -33.71917],
    [151.11367, -33.71886],
    [151.1115, -33.71883],
    [151.10993, -33.71857],
    [151.10987, -33.71833],
    [151.11163, -33.71606],
    [151.1152, -33.712],
    [151.11669, -33.70933],
    [151.11728, -33.70772],
    [151.11792, -33.70411],
    [151.11814, -33.70013],
    [151.11876, -33.69859],
    [151.12065, -33.69558],
    [151.12122, -33.6942],
    [151.12143, -33.69262],
    [151.12068, -33.68508],
    [151.12024, -33.68055],
    [151.1198, -33.67534],
    [151.12002, -33.67299],
    [151.12088, -33.66986],
    [151.12275, -33.66621],
    [151.12589, -33.66272],
    [151.12953, -33.66014],
    [151.13567, -33.65639],
    [151.13668, -33.65527],
    [151.13732, -33.65399],
    [151.13775, -33.65078],
    [151.13833, -33.64658],
    [151.13928, -33.6449],
    [151.14173, -33.64306],
    [151.14391, -33.64134],
    [151.1451, -33.63958],
    [151.14732, -33.63622],
    [151.14905, -33.6329],
    [151.14967, -33.63007],
    [151.1501, -33.62831],
    [151.1509, -33.62664],
    [151.15329, -33.62406],
    [151.15628, -33.62183],
    [151.15888, -33.6191],
    [151.16014, -33.61648],
    [151.16053, -33.6148],
    [151.16117, -33.61172],
    [151.16174, -33.60971],
    [151.16329, -33.60658],
    [151.1674, -33.60228],
    [151.17046, -33.59925],
    [151.17206, -33.59728],
    [151.17269, -33.59531],
    [151.17269, -33.59199],
    [151.173, -33.59081],
    [151.17395, -33.5893],
    [151.17535, -33.58804],
    [151.17699, -33.58718],
    [151.18411, -33.58481],
    [151.18795, -33.58288],
    [151.19056, -33.58059],
    [151.1922, -33.578],
    [151.19278, -33.5759],
    [151.19298, -33.5739],
    [151.19242, -33.56926],
    [151.19187, -33.56618],
    [151.19194, -33.56426],
    [151.19229, -33.56138],
    [151.19251, -33.55724],
    [151.1925, -33.55259],
    [151.19347, -33.55079],
    [151.19548, -33.54819],
    [151.19702, -33.54479],
    [151.19884, -33.53832],
    [151.20003, -33.53379],
    [151.20043, -33.53145],
    [151.19997, -33.52953],
    [151.19873, -33.52786],
    [151.19707, -33.52591],
    [151.19618, -33.52393],
    [151.19591, -33.52258],
    [151.19633, -33.52099],
    [151.19657, -33.51953],
    [151.19624, -33.51803],
    [151.19531, -33.51663],
    [151.19415, -33.51557],
    [151.19169, -33.51288],
    [151.1908, -33.51101],
    [151.19015, -33.50857],
    [151.1888, -33.50521],
    [151.18895, -33.50384],
    [151.1895, -33.50194],
    [151.18921, -33.49989],
    [151.18877, -33.49862],
    [151.18772, -33.49706],
    [151.18695, -33.49557],
    [151.18635, -33.49422],
    [151.18501, -33.4922],
    [151.18415, -33.49072],
    [151.18392, -33.48984],
    [151.18396, -33.4883],
    [151.1847, -33.48628],
    [151.18491, -33.48528],
    [151.18439, -33.48345],
    [151.18369, -33.48139],
    [151.1838, -33.48056],
    [151.18462, -33.47921],
    [151.19081, -33.47563],
    [151.19269, -33.4737],
    [151.19351, -33.47125],
    [151.19463, -33.46493],
    [151.19546, -33.46327],
    [151.19785, -33.4608],
    [151.20314, -33.45752],
    [151.20528, -33.45534],
    [151.20766, -33.45355],
    [151.21029, -33.4524],
    [151.21468, -33.45105],
    [151.21672, -33.44985],
    [151.21823, -33.44772],
    [151.21848, -33.44515],
    [151.21835, -33.44186],
    [151.2188, -33.43915],
    [151.22344, -33.43134],
    [151.2251, -33.42862],
    [151.22706, -33.42697],
    [151.22939, -33.42592],
    [151.2323, -33.42548],
    [151.23518, -33.42576],
    [151.23744, -33.42658],
    [151.23914, -33.42767],
    [151.24123, -33.42906],
    [151.24337, -33.42985],
    [151.24802, -33.43031],
    [151.25003, -33.43074],
    [151.25315, -33.43199],
    [151.26015, -33.43482],
    [151.26218, -33.43521],
    [151.26416, -33.43524],
    [151.26547, -33.43506],
    [151.26802, -33.43423],
    [151.2709, -33.43216],
    [151.27372, -33.42915],
    [151.27842, -33.42666],
    [151.2888, -33.42162],
    [151.2916, -33.42015],
    [151.29427, -33.41811],
    [151.29616, -33.41598],
    [151.29707, -33.41458],
    [151.29792, -33.4128],
    [151.29857, -33.41052],
    [151.29871, -33.40688],
    [151.29786, -33.40313],
    [151.29693, -33.39879],
    [151.29697, -33.39499],
    [151.29841, -33.38807],
    [151.29877, -33.38393],
    [151.30008, -33.38017],
    [151.30156, -33.37801],
    [151.30412, -33.3756],
    [151.30532, -33.37457],
    [151.30692, -33.37265],
    [151.30859, -33.36993],
    [151.3103, -33.36795],
    [151.31237, -33.36695],
    [151.31504, -33.36666],
    [151.32111, -33.36705],
    [151.32702, -33.36741],
    [151.32968, -33.367],
    [151.33158, -33.36593],
    [151.33269, -33.3647],
    [151.33401, -33.36218],
    [151.33569, -33.3606],
    [151.33876, -33.35954],
    [151.34172, -33.35873],
    [151.34448, -33.35744],
    [151.34602, -33.35699],
    [151.34788, -33.3569],
    [151.35013, -33.35685],
    [151.35198, -33.35628],
    [151.35499, -33.35394],
    [151.35675, -33.35275],
    [151.35808, -33.35227],
    [151.36092, -33.35169],
    [151.36241, -33.3511],
    [151.36326, -33.35055],
    [151.36536, -33.3484],
    [151.36881, -33.34486],
    [151.37091, -33.34286],
    [151.37229, -33.34096],
    [151.37372, -33.33822],
    [151.37493, -33.33648],
    [151.37672, -33.33491],
    [151.38161, -33.33257],
    [151.38385, -33.33126],
    [151.38559, -33.32956],
    [151.39044, -33.32307],
    [151.39422, -33.31927],
    [151.39618, -33.31705],
    [151.39819, -33.31416],
    [151.39986, -33.31077],
    [151.40076, -33.30817],
    [151.40099, -33.30628],
    [151.40061, -33.3049],
    [151.40078, -33.30449],
    [151.40184, -33.30468],
    [151.40284, -33.30485],
    [151.40314, -33.30483],
    [151.40333, -33.30488],
    [151.40715, -33.30556],
    [151.40938, -33.30581],
    [151.41485, -33.30668],
    [151.41572, -33.30696],
    [151.41592, -33.30703],
    [151.41549, -33.30774],
    [151.41526, -33.30766],
    [151.41561, -33.30721],
  ],
};