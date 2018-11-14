// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyCBDxQOgYTqICsXZBtBO6rwS6iFINaL9vs',
    authDomain: 'contactme-7c67b.firebaseapp.com',
    databaseURL: 'https://contactme-7c67b.firebaseio.com',
    projectId: 'contactme-7c67b',
    storageBucket: 'contactme-7c67b.appspot.com',
    messagingSenderId: '446385770772'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
