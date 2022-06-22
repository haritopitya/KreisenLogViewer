import { css } from '@emotion/react';
import React from 'react';

const AirplaneSymbol = () => {
   return (
      <div css={style}>
         <img src='svg/AirplaneSymbol.svg' width='100%' height='100%' alt='airplane symbol'/>
      </div>
   )
};

const style = css({
   position: 'absolute',
   width: '65%',
   height: '30%'
})

export default AirplaneSymbol
