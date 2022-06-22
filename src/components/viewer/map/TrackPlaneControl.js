import { faPlaneUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useMap } from 'react-map-gl';

const TrackPlaneButton = React.memo(({ setIsTrack, setIsMoveFromFunc, position }) => {
    const map = useMap();
    const onClickTrack = () => {
        setIsTrack(true)
        setIsMoveFromFunc(true)
        map.current.flyTo({
            center: [position.longitude, position.latitude]
        })
    }
    const onClick3D = () => {
        setIsMoveFromFunc(true)
        map.current.flyTo({
            pitch: 60
        })
    }
    const onClick2D = () => {
        setIsMoveFromFunc(true)
        map.current.flyTo({
            pitch: 0
        })
    }
    return (
        <div className='mapboxgl-control-container'>
            <div className='mapboxgl-ctrl-top-left'>
                <div className='mapboxgl-ctrl mapboxgl-ctrl-group'>
                    <button onClick={onClickTrack}>
                        <FontAwesomeIcon icon={faPlaneUp} />
                    </button>
                    <button onClick={onClick2D}>
                        2D
                    </button>
                    <button onClick={onClick3D}>
                        3D
                    </button>
                </div>
            </div>
        </div>
    )
})
export default TrackPlaneButton