// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'http://www.omdbapi.com/',
  API_KEY: 'fd4ae194',
  firebaseConfig : {
    apiKey: "AIzaSyAL-0fMKXH1H-dgvszO1MqWvBQ2xK_G1H0",
    authDomain: "cuencapelispf.firebaseapp.com",
    projectId: "cuencapelispf",
    storageBucket: "cuencapelispf.appspot.com",
    messagingSenderId: "202305000754",
    appId: "1:202305000754:web:a7e1a7f4c04ec5dec2f32b"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
