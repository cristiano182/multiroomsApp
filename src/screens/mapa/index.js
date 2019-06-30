import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles, { mapStyle } from './styles'
import { connect } from 'react-redux'

class Mapa extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showUser: true
    }
  }
  render() {
    let { region } = this.props
    let { showUser } = this.state
    return (
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: "flex-end" }} >
        <MapView
          customMapStyle={mapStyle}
          mapPadding={
            edgePadding = {
              bottom: 30
            }
          }
          style={styles.map}
          loadingEnabled
          showsUserLocation={showUser}
          followsUserLocation={showUser}
          showsMyLocationButton
          loadingIndicatorColor='green'
          region={region}
        >
          {this.props.markers.map(marker => {
            let location = { latitude: marker.latitude, longitude: marker.longitude }
            if (marker.latitude && marker.longitude && (location.latitude !== region.latitude) && (location.longitude !== region.longitude))
              return (
                <Marker
                key={marker.latitude} 
                  pinColor='red'
                  coordinate={location}
                />
              )
          })}
        </MapView>
        <TouchableOpacity style={styles.buttom} onPress={() => this.setState({ showUser: true })}>
          <Text style={{ color: 'white' }}>Go</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const mapStateToProps = state => ({ region: state.userPosition, markers: state.markers })
export default connect(mapStateToProps)(Mapa)