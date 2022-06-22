import React from 'react';
import { Marker, Popup } from 'react-map-gl';
import coordinates from './coordinates';

export default () => {
    return (
        <>
            {
                coordinates.map(e => (
                    <>
                        <Marker longitude={e.lon} latitude={e.lat} />
                        <Popup longitude={e.lon} latitude={e.lat} css={{color:'black'}}>
                            {e.name}
                        </Popup>
                    </>
                ))
            }
        </>
    )
}
