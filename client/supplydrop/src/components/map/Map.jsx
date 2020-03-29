import React, { useState } from "react";
import ReactMapGL, { NavigationControl } from "react-map-gl";
import Geocoder from "react-mapbox-gl-geocoder";
import CityInfo from "./CityInfo";
import Pins from "./Pins";
import CITIES from "./cities.json";
import './index.css';

// docs.mapbox.com/api/search/#forward-geocoding
//github.com/mapbox/mapbox-sdk-js/blob/master/docs/services.md#forwardgeocode

const mapAccess = {
  mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_KEY
};

const queryParams = {
  country: "us"
};

class Map extends React.Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  setViewport(viewport) {
    this.setState({ viewport });
  }

  onSelected = (viewport, item) => {
    this.setViewport(viewport);
    console.log("Selected: ", item);
  };

  render() {
    const { viewport } = this.state;


    let locationResult;
    const showPosition = position => {
      console.log("ok cool in show position");
      const { latitude, longitude } = position.coords;

      locationResult =
        "Latitude: " +
        position.coords.latitude +
        "<br>Longitude: " +
        position.coords.longitude;
      console.log(locationResult);

      this.setViewport({ ...viewport, latitude, longitude });
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        locationResult = "Geolocation is not supported by this browser.";
        console.log(locationResult);
      }
    };

    getLocation();

    return (
      <div>
        <Geocoder
          {...mapAccess}
          onSelected={this.onSelected}
          viewport={viewport}
          hideOnSelect={true}
          queryParams={queryParams}
        />

        <ReactMapGL
          {...viewport}
          onViewportChange={v => this.setViewport(v)}
          width="400px"
          height="400px"
          mapStyle="mapbox://styles/mapbox/dark-v9"
          {...mapAccess}
        >
          {/* <Pins data={CITIES} onClick={() => {}} /> */}

          <div style={{ position: "absolute", right: 0 }}>
            <NavigationControl />
          </div>
        </ReactMapGL>
      </div>
    );
  }
}

export default Map;
