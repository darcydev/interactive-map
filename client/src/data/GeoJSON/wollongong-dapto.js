/*
import { CITIES } from '../../data/cities';
import { fetchPolyline } from '../../helpers/fetch-polyline';

const cityA = 'Wollongong';
const cityB = 'Dapto';

function getPolyline() {
  fetchPolyline(
    `${CITIES[cityA].lat},${CITIES[cityA].long}`,
    `${CITIES[cityB].lat},${CITIES[cityB].long}`
  );
}

getPolyline();
*/

export const WollongongDapto = {
  type: 'LineString',
  coordinates: [
    [150.89033, -34.42383],
    [150.89019, -34.42387],
    [150.88999, -34.42385],
    [150.88956, -34.4238],
    [150.88942, -34.4238],
    [150.88927, -34.42388],
    [150.88921, -34.42396],
    [150.88918, -34.42406],
    [150.88886, -34.4256],
    [150.88883, -34.42572],
    [150.88866, -34.42575],
    [150.88848, -34.42576],
    [150.88792, -34.42582],
    [150.88749, -34.42581],
    [150.88724, -34.42574],
    [150.88626, -34.42537],
    [150.88602, -34.4253],
    [150.8857, -34.42526],
    [150.88505, -34.42525],
    [150.88462, -34.42527],
    [150.88441, -34.42528],
    [150.88412, -34.42533],
    [150.883, -34.4256],
    [150.88214, -34.42582],
    [150.88181, -34.42591],
    [150.88131, -34.42606],
    [150.88099, -34.42611],
    [150.88042, -34.42613],
    [150.87946, -34.42609],
    [150.87702, -34.42599],
    [150.87594, -34.42594],
    [150.87544, -34.42586],
    [150.87501, -34.42573],
    [150.87442, -34.42553],
    [150.87394, -34.42538],
    [150.87352, -34.42533],
    [150.87289, -34.42527],
    [150.8725, -34.42527],
    [150.8723, -34.42533],
    [150.87195, -34.4254],
    [150.87167, -34.4255],
    [150.87129, -34.4257],
    [150.87073, -34.4261],
    [150.87059, -34.42617],
    [150.87035, -34.42635],
    [150.87013, -34.42654],
    [150.87001, -34.42666],
    [150.86987, -34.42684],
    [150.86969, -34.42712],
    [150.86965, -34.42721],
    [150.86964, -34.42725],
    [150.86949, -34.42743],
    [150.86932, -34.42758],
    [150.86911, -34.42771],
    [150.8686, -34.42793],
    [150.86848, -34.42799],
    [150.86833, -34.42807],
    [150.86827, -34.42817],
    [150.86823, -34.42821],
    [150.86791, -34.42856],
    [150.86775, -34.42878],
    [150.86765, -34.42894],
    [150.86759, -34.42904],
    [150.86754, -34.42921],
    [150.86751, -34.42935],
    [150.8675, -34.42959],
    [150.86754, -34.42993],
    [150.86758, -34.4301],
    [150.86775, -34.43066],
    [150.86816, -34.43184],
    [150.8683, -34.43229],
    [150.8683, -34.43232],
    [150.86827, -34.43241],
    [150.8683, -34.43251],
    [150.86843, -34.433],
    [150.86849, -34.43339],
    [150.86854, -34.43394],
    [150.86853, -34.43447],
    [150.86849, -34.43492],
    [150.86835, -34.43563],
    [150.86821, -34.43609],
    [150.86799, -34.43665],
    [150.86771, -34.43718],
    [150.86716, -34.43796],
    [150.86669, -34.43853],
    [150.86439, -34.4412],
    [150.86211, -34.44386],
    [150.86174, -34.44435],
    [150.86153, -34.44468],
    [150.86128, -34.44513],
    [150.86099, -34.44572],
    [150.86082, -34.44613],
    [150.86067, -34.44653],
    [150.86062, -34.44668],
    [150.86046, -34.44731],
    [150.86029, -34.44821],
    [150.85994, -34.45021],
    [150.85975, -34.45096],
    [150.85949, -34.45185],
    [150.85915, -34.4527],
    [150.85882, -34.45335],
    [150.85836, -34.45411],
    [150.85695, -34.45603],
    [150.85594, -34.45741],
    [150.85363, -34.46052],
    [150.85309, -34.46125],
    [150.85259, -34.46186],
    [150.8522, -34.46227],
    [150.85187, -34.4626],
    [150.85132, -34.46308],
    [150.85077, -34.4635],
    [150.85031, -34.46382],
    [150.84945, -34.46432],
    [150.8487, -34.46469],
    [150.84789, -34.46502],
    [150.84742, -34.46518],
    [150.84696, -34.46533],
    [150.84606, -34.46555],
    [150.84324, -34.46622],
    [150.84199, -34.4666],
    [150.84063, -34.46716],
    [150.84007, -34.46744],
    [150.83936, -34.46782],
    [150.83872, -34.46822],
    [150.8382, -34.46858],
    [150.83772, -34.46892],
    [150.83739, -34.46917],
    [150.83675, -34.46972],
    [150.83578, -34.47058],
    [150.83313, -34.47282],
    [150.83207, -34.47373],
    [150.82882, -34.47652],
    [150.82753, -34.47765],
    [150.8267, -34.47834],
    [150.82577, -34.47913],
    [150.82358, -34.48104],
    [150.82266, -34.4818],
    [150.82197, -34.48229],
    [150.82106, -34.48285],
    [150.82006, -34.48337],
    [150.81934, -34.48371],
    [150.81794, -34.48425],
    [150.81312, -34.48597],
    [150.81302, -34.48606],
    [150.81212, -34.48644],
    [150.81113, -34.4869],
    [150.81043, -34.48728],
    [150.80963, -34.48777],
    [150.80956, -34.48779],
    [150.80903, -34.4881],
    [150.80859, -34.48777],
    [150.8073, -34.48686],
    [150.80636, -34.48617],
    [150.80501, -34.48519],
    [150.8038, -34.48434],
    [150.80259, -34.48344],
    [150.80253, -34.48343],
    [150.80224, -34.48326],
    [150.80222, -34.48327],
    [150.80217, -34.48327],
    [150.80175, -34.48374],
    [150.80166, -34.4838],
    [150.80114, -34.48443],
    [150.799, -34.48701],
    [150.79795, -34.48827],
    [150.79765, -34.48866],
    [150.79748, -34.48893],
    [150.7974, -34.48911],
    [150.79741, -34.48918],
    [150.7974, -34.48926],
    [150.79721, -34.49],
    [150.79723, -34.49002],
    [150.79725, -34.49006],
    [150.79723, -34.49011],
    [150.7972, -34.49014],
    [150.79697, -34.49058],
    [150.79685, -34.49075],
    [150.7967, -34.49092],
    [150.79565, -34.49223],
    [150.79474, -34.49337],
  ],
};