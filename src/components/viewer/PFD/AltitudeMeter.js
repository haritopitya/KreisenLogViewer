import { css } from '@emotion/react';
import React from 'react';

const AltitudeMeter= ({ altitude }) => {
   const styles = {
      wrap: css({
         display: 'flex',
         position: 'absolute',
         right: 10,
         height: '80%',
         width: '15%',
         backgroundColor: 'rgba(0,0,0,0.1)',
         border: '1px solid white',
         alignItems: 'flex-end',
         overflow: 'hidden',
      }),
      inner: css({
         height: '450%',
         width: '100%',
         justifyContent: 'flex-end',
         paddingLeft: 0,
         transform: `translateY(${(1 + altitude)*100/18}%)`,
      }),
      img: css({
         height: '100%',
         maxWidth: '100%',
      })
   }
   return (
      <>
         <div css={styles.wrap}>
            <div css={styles.inner}>
               <img src='svg/altitudeTape.svg' css={styles.img} alt='altitude tape' />
            </div>
         </div>
         {/* <View style={{
            position: 'absolute',
            right: 0,
            width: '18%',
            height: '20%',
            flexDirection: 'row',
         }}>

            <AltBox height='100%' width='100%' >
               <View style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
               }}>
                  <View style={{ flex: 1, backgroundColor: 'blue' }}></View>
                  <View style={{ flex: 1, backgroundColor: 'green' }}></View>
                  <View style={{ flex: 1, backgroundColor: 'yellow' }}></View>
               </View>
            </AltBox>
         </View> */}
      </>
   )
}

export default AltitudeMeter
