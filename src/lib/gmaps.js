import {Loader} from "@googlemaps/js-api-loader";


export default new Loader({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API,
    version: "weekly",
    libraries: ['core', 'places', 'geocoding']
});