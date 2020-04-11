import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

export default function NewText() {
  return (
    <StyledContainer>
      <br />
      <p>
        Economic modelling shows ONE HOUR is the accepted business/commute time.
        <br />
        <br />
        Research shows people will travel TWO HOURS for a social interaction.
      </p>
      <h1>Overview</h1>
      <p>
        Sint dolore tempor duis laboris cillum ex non culpa non amet cillum ut
        aute veniam. Aute dolor enim enim cupidatat velit. Esse fugiat tempor.
      </p>
      <p className='overview'>
        Velit elit ex adipisicing velit elit. Ad exercitation elit aliqua
        cupidatat magna. Occaecat non ad eiusmod velit consectetur aliqua quis
        veniam ex labore velit. Minim in est ut aliqua irure sunt sunt duis aute
        labore magna. Ut nostrud magna aliquip id commodo aliqua occaecat nulla.
      </p>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  ${media.lessThan('1200px')`
		.overview {
			display: none;
		}
	`}
`;
