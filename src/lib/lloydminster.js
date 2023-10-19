const LLOYDMINSTER_BOUNDS = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            [
              -110.05594228333648,
              53.308860625094326
            ],
            [
              -110.05594228333648,
              53.24718570299487
            ],
            [
              -109.97778687521257,
              53.24718570299487
            ],
            [
              -109.97778687521257,
              53.308860625094326
            ],
            [
              -110.05594228333648,
              53.308860625094326
            ]
          ]
        ],
        "type": "Polygon"
      }
    }
  ]
}

class Bounds {
    constructor() {
        this.north = this.south = this.east = this.west = null;
    }

    integrate(lat, lng) {
        if(this.north === null) { this.north = lat; }
        if(this.south === null) { this.south = lat; }
        if(this.west === null) { this.west = lng; }
        if(this.east === null) { this.east = lng; }
        if(lng < this.west) { this.west = lng; }
        if(lng > this.east) { this.east = lng; }
        if(lat < this.south) { this.south = lat; }
        if(lat > this.north) { this.north = lat; }
    }

    contains(lat, lng) {
        return lat >= this.south &&
            lat <= this.north &&
            lng >= this.west &&
            lng <= this.east;
    }
}


const getBounds = () => {
    const bounds = new Bounds();
    for(const[lng, lat] of LLOYDMINSTER_BOUNDS.features[0].geometry.coordinates[0]) {
        bounds.integrate(lat, lng);
    }
    return bounds;
}


export const filterTaranaPlans = (lat, lng, plans) => {
    console.log(`filterTaranaPlans(lat=${lat},lng=${lng})`);
    const lloydminsterBounds = getBounds();
    if(lloydminsterBounds.contains(lat, lng)) {
        console.log('Within Lloydminster bounds')
        for(const plan of plans) {
            console.log(`plan=${JSON.stringify(plan, null, 2)}`)
        }
        plans = plans.filter((plan) => plan.name.toLowerCase().includes('tarana'));
    } else {
        console.log('Outside Lloydminster bounds, no change')
    }
    return plans;
}