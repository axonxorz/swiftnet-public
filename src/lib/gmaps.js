import {Loader} from "@googlemaps/js-api-loader";

const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API,
    version: "weekly",
    libraries: ['core', 'places', 'geocoding']
});

export default loader;

export function loaderReactCompat() {

    return loader.load().then(() => {
        return window.google.maps;
    })
}