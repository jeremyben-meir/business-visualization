import React, { useState, useEffect , useCallback} from "react";
import mapboxgl from 'mapbox-gl';
import styled, { css } from 'styled-components';
import ReactMapGL, {Marker, Popup, FlyToInterpolator, LinearInterpolator} from "react-map-gl";
import * as Places from '../assets/temp_files/map_data/Places.json';
import {Silhouette_of_the_Statue_of_Liberty_in_New_York as icon} from '../assets/temp_files/map_data/Silhouette_of_the_Statue_of_Liberty_in_New_York.svg';
import '../App.css';
// import ImageTools from './resize_javascript';
import * as d3 from 'd3-ease';

const style = {
  
}


export class Map extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lat: 40.767824,
      lng: -73.962141,
      zoom: 12,
      zip: 0,
    };
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
  }

  componentDidMount() {

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/ignaciolg1212/ckjd6c2zaagta19ldtuirqzgn",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
  //       this.map.once('load', () => {
  //     this.map.resize();
  // });
    this.map.scrollZoom.disable();
    this.map.dragPan.disable();
    this.map.on('move', () => {
      this.setState({
      lng: this.map.getCenter().lng.toFixed(4),
      lat: this.map.getCenter().lat.toFixed(4),
      zoom: this.map.getZoom().toFixed(2)
      });
    });
  }
  componentDidUnmount() {
    this.setState({zip:0})
  }

  componentDidUpdate(prevProps) {
    if(prevProps.zipLocation != this.props.zipLocation || this.state.zip != this.props.zipLocation){
      this.setState({zip:this.props.zipLocation})
      fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/"+ this.props.zipLocation +".json?access_token="+mapboxgl.accessToken)
        .then(res => res.json(), error => console.log(error))
        .then(
          (result) => {
            this.map.flyTo({ center: result.features[0].center , zoom: 16})
            // newCenter = result.features[0].center
            console.log(result.features[0].bbox)
          },
          (error) => {
            console.log(error)
          }
        )
        

      // console.log(this.props.zipLocation)
      
    }
  }

  render() {
    return (
        <StyledMap>
          {/* <div> */}
            <div ref={el => this.mapContainer = el} className="mapContainer" />
          {/* </div> */}
        </StyledMap>
      )
    }


}

const StyledMap = styled.div`
  .mapContainer{
    // top: 0;
    // bottom: 0;
    // left: 0;
    // right: 0;
    // position:absolute;
    border: none;
    height: 100vh;
    width: 100vw;
  }
  z-index: 1;
`;

  // export function Map(props) {
  // const[viewport, setViewport] = useState({
  //   latitude: 40.767824,
  //   longitude: -73.962141,
  //   width: "100vw",
  //   height: "105vh",
  //   zoom: 12,
  // });
  // const [selectedPlace, setSelectedPlace] = useState(null);
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log(props.zipLocation)
  //   console.log(count)
  //   if (count != 0){
      
  //     setViewport({
  //       ...viewport,
  //       longitude: -74.1,
  //       latitude: 40.7,
  //       zoom: 14,
  //       transitionDuration: 5000,
  //       transitionInterpolator: new LinearInterpolator(['target', 'zoom']),
  //       pitch: 0,
  //       bearing: 0,
  //     });
  //   }
  //   setCount(1)
  // }, [props.zipLocation]);

  // useEffect(() => {
  //   const listener = e => {
  //     if (e.key === "Escape") {
  //       setSelectedPlace(null);
  //     }
  //   };
  //   window.addEventListener("keydown", listener);

  //   return () => {
  //     window.removeEventListener("keydown", listener);
  //   };
  // }, []);

  // return (

  //   <div>
  //     <ReactMapGL
  //       {...viewport}
  //       dragPan={false}
  //       touchAction="pan-y" 
  //       mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
  //       mapStyle="mapbox://styles/ignaciolg1212/ckjd6c2zaagta19ldtuirqzgn"
  //       // onViewportChange={(viewport) => {
  //       //   setViewport(viewport);
  //       // }}
  //       minZoom={12}
  //       maxZoom={18}
  //       transitionDuration={1000}
  //       transitionInterpolator={new FlyToInterpolator()}
  //     >

  //       {/* {Places.features.map(place => (
  //         <Marker
  //           key={place.properties.objectid}
  //           longitude={place.geometry.coordinates[0]}
  //           latitude={place.geometry.coordinates[1]}
  //         >
  //         <button
  //             className="marker-btn"
  //             onClick={e => {
  //               e.preventDefault();
  //               setSelectedPlace(place);
  //             }}
  //           >
  //             <icon/>
  //           </button>
  //         </Marker>

  //       ))} */}
  //       {selectedPlace ? (
  //         <Popup
  //           latitude={selectedPlace.geometry.coordinates[1]}
  //           longitude={selectedPlace.geometry.coordinates[0]}
  //           onClose={() => {
  //             setSelectedPlace(null);
  //           }}
  //         >
  //           <div>
  //             <h2>{selectedPlace.properties.name}</h2>
  //           </div>
  //         </Popup>
  //       ) : null}
  //     </ReactMapGL>
  //   </div>
  // );
// }

