import React from 'react'
import { Polyline } from 'react-native-maps'
import Coordinates from './coordinates'
export default () => {
    return (
        <>
            <Polyline
                coordinates={[
                    Coordinates.Platform,
                    Coordinates.OkiIslandPoint,
                    Coordinates.KodomonoKuni,
                    Coordinates.ChikubuIslandPoint,
                    Coordinates.Platform,
                ]}
                strokeColor='#ff69b4'
                strokeWidth={3}
                zIndex={1}
            />
            <Polyline
                coordinates={[
                    Coordinates.HalfLinePoint1,
                    Coordinates.HalfLinePoint2,
                ]}
                strokeColor='#808080'
                strokeWidth={1}
                zIndex={1}
            />
        </>
    )
}
