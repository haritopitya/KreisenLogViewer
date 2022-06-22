import { css } from '@emotion/react';
import React from 'react';

const AttitudeGrid = ({ roll, pitch }) => {
   const styles = {
      wrap: css({
         transform: `rotate(${-roll}deg)`,
         position: 'absolute',
         height: '60%',
         width: '40%',
         overflow: 'hidden',
      }),
      innner: css({
         display: 'flex',
         height: '100%',
         width: '100%',
         alignItems: 'center',
         justifyContent: 'center',
         transform: `translateY(${pitch * 2.5}%)`,
      }),
      img: css({
         height: `${5 / 2 * 100}%`,
         width: '100%',
      })
   }
   return (
      <div css={styles.wrap}>
         <div css={styles.innner}>
            <img src='svg/PFDgrid.svg' css={styles.img} alt='PFD grid' />
         </div>
      </div>
   )
}

export default AttitudeGrid
