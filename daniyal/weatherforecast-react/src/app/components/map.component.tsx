import * as React from 'react';
declare var google:any;

export class MapComponent extends React.Component<{coords: {lat: number, lng: number}}> {

    componentDidMount() {
        new google.maps.Map(this.refs.map,{
            zoom: 12,
            center: this.props.coords
        })
    }

    render() {
        return <div ref="map" className="map" />
    }
}