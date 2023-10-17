// Generously cover AB, SK
// WKT: POLYGON((-120.33 60.21, -100.79 60.21, -100.79 48.65, -120.33 48.65, -120.33 60.21))
export const canadaBounds = {
    'west': -120.3259054496,
    'east': -100.7922140434,
    'north': 60.207498845,
    'south': 48.6479913104
}

export const swiftAutocompleteOptions = {
    bounds: canadaBounds,
    componentRestrictions: {
        country: 'ca'
    }
}

export const defaultMapCenter = {
  lat: 53.31225509999999,
  lng: -110.072853,
}