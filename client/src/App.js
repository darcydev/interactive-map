import React from 'react';
import styled from 'styled-components';

import Map from './components/Map';

export default function App() {
  // fetch custom api data
  fetch('http://localhost:8000/api')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

  return (
    <StyledMain>
      <Map />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  min-height: 100vh;
`;
