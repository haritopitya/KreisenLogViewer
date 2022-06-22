import React, { useCallback, useEffect, useState } from "react";
import ReactMapGL, { NavigationControl } from "react-map-gl";
import { getAircraftLatLng } from '../../utils/logData';
import MapMarker from './map/MapMarker';
import PlaneMarker from './map/PlaneMarker';
import PlanePath from './map/PlanePath';
import TrackPlaneButton from './map/TrackPlaneControl';

const Map = ({ log, currentData }) => {
    const [isTrack, setIsTrack] = useState(true)
    const [isMoveFromFunc, setIsMoveFromFunc] = useState(false)
    const [view, setView] = useState({
        latitude: 35.294230,
        longitude: 136.254345,
        pitch: 60,
        zoom: 17,
        bearing: 0
    })
    console.log(currentData);
    const currentPosition = getAircraftLatLng(currentData)
    const onMove = ({ viewState, type }) => {
        setView(viewState)
    }
    const onMoveStart = () => {
        setIsTrack(false)
    }
    const onMoveEnd = () => {
        if (isMoveFromFunc) setIsTrack(true)
        setIsMoveFromFunc(false)
    }
    const setIsMoveFromFuncRef = useCallback(setIsMoveFromFunc);
    const setIsTrackRef = useCallback(setIsTrack);
    useEffect(() => {
        if (isTrack) setView(currentView => ({ ...currentView, ...(currentPosition && currentPosition.latitude && currentPosition.longitude && currentPosition) }))
    }, [isTrack, currentData])
    return (
        <ReactMapGL
            {...view}
            onMove={onMove}
            onMoveStart={onMoveStart}
            onMoveEnd={onMoveEnd}
            maxPitch={85}
            mapStyle='https://api.maptiler.com/maps/jp-mierune-dark/style.json?key=5EnTPwXqoNrnkItfoiaZ'
            style={{ height: '50%' }}
        >
            <MapMarker />
            <PlanePath log={log} />
            <NavigationControl visualizePitch={true} />
            <TrackPlaneButton setIsTrack={setIsTrackRef} setIsMoveFromFunc={setIsMoveFromFuncRef} position={currentPosition} />
            <PlaneMarker position={currentPosition} pitch={view.pitch} view={view} />
        </ReactMapGL>
    )
}

export default Map