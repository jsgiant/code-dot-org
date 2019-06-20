import PropTypes from 'prop-types';
import React from 'react';
import {geoMercator, geoPath} from 'd3-geo';
import {feature} from 'topojson-client';

const PROJECTION_RADIUS = 70;
const MAP_WIDTH = 400;
const MAP_HEIGHT = 400;

class MercatorMap extends React.Component {
  static propTypes = {
    data: PropTypes.any
  };

  state = {
    mercator: '',
    data: this.props.data
  };

  async componentDidMount() {
    let value = await this.mercator();
    this.setState({
      mercator: value
    });
  }

  projection = geoMercator()
    .scale(PROJECTION_RADIUS)
    .translate([MAP_WIDTH / 2, MAP_HEIGHT / 2]);

  displayLocation() {
    if (this.props.data.constructor === Array) {
      return this.props.data.map((location, i) => {
        if (location.lat && location.long) {
          return (
            <circle
              fill={'red'}
              r={3}
              transform={`translate(${this.projection([
                location.long,
                location.lat
              ])})`}
            />
          );
        } else {
          // if array does not have lat or long or both
          // then you just want to return the inspector version of it
          // instead of the map version
        }
      });
    } else if (this.props.data.constructor === Object) {
      return (
        <circle
          fill={'red'}
          r={5}
          transform={`translate(${this.projection([
            this.props.data.long,
            this.props.data.lat
          ])})`}
        />
      );
    }
  }

  async mercator() {
    let displayWorldMap = async function() {
      const worldMapUrl = 'https://unpkg.com/world-atlas@1/world/110m.json';
      let response = await fetch(worldMapUrl);

      let worldData = await response.json();

      return feature(worldData, worldData.objects.countries).features;
    };

    let worldMap = await displayWorldMap();
    let path = geoPath().projection(this.projection);

    // TODO: consult with product/design about color scheme

    return (
      <svg width={MAP_WIDTH} height={MAP_HEIGHT}>
        <g className="countries">
          {worldMap.map((d, i) => (
            <path
              key={i}
              d={geoPath().projection(this.projection)(d)}
              className="country"
              fill={'green'}
              stroke="#FFFFFF"
              strokeWidth={0.5}
            />
          ))}
        </g>
        <g className="markers">{this.displayLocation()}</g>
      </svg>
    );
  }

  render() {
    return <div>{this.state.mercator}</div>;
  }
}

export default MercatorMap;
