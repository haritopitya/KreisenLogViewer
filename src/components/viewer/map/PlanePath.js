import React from 'react'
import { Layer, Source } from 'react-map-gl'

const PlanePath = ({ log }) => {
    if (!log) return null
    const pathLog = log
    .filter(e => e['dataStationData/latitude'].value !== '---' && e['dataStationData/longitude'].value !== '---')
    .map(data => ([parseFloat(data['dataStationData/longitude'].value), parseFloat(data['dataStationData/latitude'].value)]))
    const geojsonLog = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    coordinates: pathLog
                },
            }
        ]
    }
    const pathLayerStyle = {
        'type': 'line',
        'paint': {
            'line-color': 'white',
            'line-width': 6
        }
    }
    return (
        <Source type='geojson' data={geojsonLog}>
            <Layer {...pathLayerStyle} />
        </Source>
    )
}

export default PlanePath