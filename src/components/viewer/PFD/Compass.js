import { css } from '@emotion/react';
import React from 'react';

const Compass= ({ direction }) => {
    const styles = {
        wrap: css({
            position: 'absolute',
            top: 8,
            height: '10%',
            width: '60%',
            backgroundColor: 'rgba(0,0,0,0.1)',
            border: '1px solid white',
            display: 'flex',
            justifyContent: 'center',
            overflow: 'hidden',
        }),
        inner: css({
            height: '100%',
            width: `${880 * 5 / 6}%`,
            transform: `translateX(${(220 - (direction > 30 ? direction : direction + 360)) * 25 / 110}%)`,
            position: 'absolute',
        }),
        img: css({
            maxHeight: '100%',
            width: '100%',
        }),
        centerBar: css({
            backgroundColor: 'yellow',
            height: '100%',
            width: '0.5%'
        })
    }
    return (
        <div css={styles.wrap} >
            <div css={styles.inner}>
                <img src='svg/CompassTape.svg' css={styles.img} alt='compass tape'/>
            </div>
            <div css={styles.centerBar} />
        </div>
    )
}

export default Compass
