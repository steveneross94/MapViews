import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

const usersMap = props => {
    return (
        <View style={styles.mapContainer}>
            <MapView
                initialRegion={{
                    latitude: 41.5110,
                    longitude: -82.00,
                    latitudeDelta: 0.0622,
                    longitudeDelta: 0.0421,
                }}
                region={props.googleLocation}
                style={styles.map}>
                    <MapView.Marker coordinate={props.userLocation}/>
                </MapView>

        </View>
    )
}

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: 200,
        marginTop: 20
    },
    map: {
        width: '100%',
        height: '100%',
    }
})


export default usersMap