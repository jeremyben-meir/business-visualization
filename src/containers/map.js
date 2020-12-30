import React, { useState, useEffect } from "react";
import styled, { css } from 'styled-components';
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import * as Places from "./data/Places.json";

export default function Map() {
  const[viewport, setViewport] = useState({
    latitude: 40.807824,
    longitude: -73.962141,
    width: "100vw",
    height: "50vh",
    zoom: 14
  });

  const [selectedPlace, setSelectedPlace] = useState(null);

    useEffect(() => {
      const listener = e => {
        if (e.key === "Escape") {
          setSelectedPlace(null);
        }
      };
      window.addEventListener("keydown", listener);

      return () => {
        window.removeEventListener("keydown", listener);
      };
    }, []);

  return (

    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/ignaciolg1212/ckj3fpwcy15yu1arvkfe5eyze"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {Places.features.map(place => (
          <Marker
            key={place.properties.objectid}
            longitude={place.geometry.coordinates[0]}
            latitude={place.geometry.coordinates[1]}
          >
          <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPlace(place);
              }}
            >
              <img src="Silhouette_of_the_Statue_of_Liberty_in_New_York.svg" alt="Icon" />
            </button>
          </Marker>

        ))}
        {selectedPlace ? (
                  <Popup
                    latitude={selectedPlace.geometry.coordinates[1]}
                    longitude={selectedPlace.geometry.coordinates[0]}
                    onClose={() => {
                      setSelectedPlace(null);
                    }}
                  >
                    <div>
                      <h2>{selectedPlace.properties.name}</h2>
                    </div>
                  </Popup>
                ) : null}
      </ReactMapGL>
    </div>
  );
}
