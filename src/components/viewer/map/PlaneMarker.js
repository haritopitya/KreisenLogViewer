import React from 'react'
import { Marker } from 'react-map-gl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneUp } from '@fortawesome/free-solid-svg-icons'
import { css } from '@emotion/react'

const PlaneMarker = React.memo(({ position, pitch, view }) => {
    if(!position)return null
    const style = css({
        transform: `rotateX(${pitch}deg) rotate(${(position.bearing || 0) - view.bearing}deg)`

    })
    return (
        <>
            {position && position.latitude && position.longitude && (
                <Marker {...position}>
                    <div css={style}>
                        <FontAwesomeIcon
                            icon={faPlaneUp}
                            color='blue'
                            size='4x'
                        />
                    </div>
                </Marker>
            )}
        </>

    )
})

export default PlaneMarker