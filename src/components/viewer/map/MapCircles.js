import React from 'react'
import { Circle } from 'react-native-maps'

import Coordinates from './coordinates'

export default () => {
    return (
        <>
            <Circle
                center={Coordinates.OkiIslandPoint}
                radius={400}
                strokeColor='#000080'
                zIndex={2}
                strokeWidth={1.5}
            />
            <Circle
                center={Coordinates.ChikubuIslandPoint}
                radius={400}
                strokeColor='#000080'
                zIndex={2}
                strokeWidth={1.5}
            />
            <Circle
                center={Coordinates.Platform}
                radius={1000 * 19}
                strokeColor='#808080'
                zIndex={2}
                strokeWidth={1}
            />
            <Circle
                center={Coordinates.OkiIslandPoint}
                radius={1000 * 22}
                strokeColor='#808080'
                zIndex={2}
                strokeWidth={1}
            />
            <Circle
                center={Coordinates.ChikubuIslandPoint}
                radius={1000 * 22}
                strokeColor='#808080'
                zIndex={2}
                strokeWidth={1}
            />
        </>
    )
}