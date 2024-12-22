import React from 'react';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

function Loader() {
  return (
    <LoaderWrapper>
      <div>Loading...</div>
    </LoaderWrapper>
  );
}

export default Loader;
