import { Injectable } from '@angular/core';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation/ngx';

@Injectable()
export class GeoManagementService {

  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private deviceOrientation: DeviceOrientation

    ) {}

  //Get current coordinates of device
async getGeolocation(): Promise<number[]> {

  //Geocoder configuration
  /*
  let geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5,
    enableHighAccuracy: true
  };
  */
 let options: GeolocationOptions = {
   enableHighAccuracy : true,
 }

  return new Promise(async (resolve, reject) => {
    await this.geolocation.getCurrentPosition(options).then((resp) => {
      const latLon = [resp.coords.latitude,resp.coords.longitude]
      resolve(latLon);
      return false;

     }).catch((error) => {
       alert('Error getting location'+ JSON.stringify(error));
     });
  }

  );
}



}