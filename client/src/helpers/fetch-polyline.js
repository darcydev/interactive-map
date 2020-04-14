export const fetchPolyline = (originCoords, destinationCoords) => {
  const url = `http://localhost:8000/api/?origin=${originCoords}&destination=${destinationCoords}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'OK') {
        const routePolyline = data.routes[0].overview_polyline.points;
        console.log('routePolyline :', routePolyline);
        return routePolyline;
      } else {
        console.error('Route not found');
      }
    })
    .catch((err) => console.error(err));
};
