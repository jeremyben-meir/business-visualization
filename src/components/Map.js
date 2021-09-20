import React, { useState, useRef, useEffect } from "react";
import styled, { css } from 'styled-components';
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import * as Places from "../assets/temp_files/map_data/Places.json";
import mapboxgl from "mapbox-gl"

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

export const Map = () => {

    const mapContainer = useRef()

    // const[viewport, setViewport] = useState({
    //     latitude: 40.72796,
    //     longitude: -73.962141,
    //     width: "100vw",
    //     height: "100vh",
    //     zoom: 10.5,
    //     bearing: 10
    // });

    // const [selectedPlace, setSelectedPlace] = useState(null);


    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            zoom: 10.5,
            center: [-73.962141,40.72796]
        });
        
        map.on('load', () => {
            // Add the vector tileset as a source.
            map.addSource('ethnicity', {
                type: 'vector',
                url: 'mapbox://examples.8fgz4egr'
            });
            map.addSource('geo', {
                type: 'geojson',
                data: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ports.geojson'
            });
            map.addLayer({
                'id': 'population',
                'type': 'circle',
                'source': 'ethnicity',
                'source-layer': 'sf2010',
                'paint': {
                    // Make circles larger as the user zooms from z12 to z22.
                    'circle-radius': {
                        'base': 1.75,
                        'stops': [
                            [12, 2],
                            [22, 180]
                        ]
                    },
                    // Color circles by ethnicity, using a `match` expression.
                    'circle-color': [
                        'match',
                        ['get', 'ethnicity'],
                        'White', '#fbb03b',
                        'Black', '#223b53',
                        'Hispanic', '#e55e5e',
                        'Asian', '#3bb2d0',
                        /* other */ '#ccc'
                    ]
                }
            });
        });
    },[])

    // useEffect(() => {
    //     const listener = e => {
    //         if (e.key === "Escape") {
    //             setSelectedPlace(null);
    //         }
    //     };
    //     window.addEventListener("keydown", listener);

    //     return () => {
    //         window.removeEventListener("keydown", listener);
    //     };
    // }, []);

    return <div ref={mapContainer} style={{ width: "100vw", height: "100vh" }} />

    // return (

    //     <div>
    //         <ReactMapGL
    //             {...viewport}
    //             mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    //             mapStyle="mapbox://styles/ignaciolg1212/cksmd7dqe2mbo18lorain0i4m"
    //             onViewportChange={(viewport) => {
    //             setViewport(viewport);
    //             }}
    //         >
    //             {Places.features.map(place => (
    //                 <Marker
    //                     key={place.properties.objectid}
    //                     longitude={place.geometry.coordinates[0]}
    //                     latitude={place.geometry.coordinates[1]}
    //                 >
    //                     {/* <button
    //                         className="marker-btn"
    //                         onClick={e => {
    //                             e.preventDefault();
    //                             setSelectedPlace(place);
    //                         }}
    //                     > */}
    //                     <img src="/assets/temp_files/map_data/sill.svg" alt="Icon" />
    //                     {/* </button> */}
    //                 </Marker>

    //             ))}
    //             {selectedPlace ? (
    //                     <Popup
    //                         latitude={selectedPlace.geometry.coordinates[1]}
    //                         longitude={selectedPlace.geometry.coordinates[0]}
    //                         onClose={() => {
    //                             setSelectedPlace(null);
    //                         }}
    //                     >
    //                         <div>
    //                             <h2>{selectedPlace.properties.name}</h2>
    //                         </div>
    //                     </Popup>
    //                 ) : null}
    //         </ReactMapGL>
    //     </div>
    // );
}