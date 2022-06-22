import { css } from '@emotion/react';
import React from 'react';

const SpeedMeter = ({ speed }) => {
   const styles = {
      wrap: css({
         display: 'flex',
         position: 'absolute',
         left: 10,
         height: '80%',
         width: '15%',
         backgroundColor: 'rgba(0,0,0,0.1)',
         border: '1px solid white',
         alignItems: 'flex-end',
         overflow: 'hidden'
      }),
      inner: css({
         height: '450%',
         width: '100%',
         justifyContent: 'flex-end',
         paddingLeft: 0,
         transform: `translateY(${(1 + speed) * 100 / 18}%)`
      }),
      img: css({
         height: '100%',
         maxWidth: '100%',
      })
   }
   return (
      <div css={styles.wrap}>
         <div css={styles.inner}>
            <img src='svg/speedTape.svg' css={styles.img} alt="speed tape" />
         </div>
      </div>
   )
}

export default SpeedMeter