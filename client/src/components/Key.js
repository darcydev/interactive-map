import React from 'react';
import styled from 'styled-components';

export default function Key() {
  return (
    <StyledContainer>
      <div className='row'>
        <span className='dot__blue' />
        Northern route
      </div>
      <div className='row'>
        <span className='dot__red' />
        Southern route
      </div>
      <div className='row'>
        <span className='dot__green' />
        Southern inland route
      </div>
      <div className='row'>
        <span className='dot__orange' />
        Western route
      </div>
      <div className='row'>
        <span className='dot__black' />
        Station Marker
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  position: absolute;
  padding: 27px;
  right: 30px;
  bottom: 30px;
  background: white;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 500;

  .row {
    display: flex;
    padding: 6px 0;
    text-align: left;

    span {
      height: 6px;
      width: 30px;
      border-radius: 50%;
      display: inline-block;
      border-radius: 10px;
      align-self: center;
      margin-right: 15px;
    }

    .dot__blue {
      background-color: #6593f5;
    }

    .dot__green {
      background-color: green;
    }

    .dot__red {
      background-color: red;
    }

    .dot__orange {
      background-color: orange;
    }

    .dot__black {
      background-color: black;
      border: 3px solid #fff;
      box-shadow: 0 0 0 2px black;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      margin-left: 3px;
    }
  }
`;
