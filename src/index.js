import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const SCButton = styled.button`
  all: unset;
`

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);
