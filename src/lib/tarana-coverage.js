import { point, booleanPointInPolygon, featureEach } from "@turf/turf";

import taranaCoverage from "@/assets/tarana_coverage.geojson";


export const filterTaranaPlans = (lat, lng, plans) => {
    console.log(`filterTaranaPlans(lat=${lat},lng=${lng})`);
    const candidatePoint = point([lng, lat]);
    let inTaranaCoveredArea = false;
    featureEach(taranaCoverage, (feature) => {
        if(booleanPointInPolygon(candidatePoint, feature)) {
            inTaranaCoveredArea = true;
            return false;
        }
    });
    let taranaPredicate = (plan) => plan.name.toLowerCase().includes('tarana');
    if(inTaranaCoveredArea) {
        console.log('Within Tarana-covered area')
        plans = plans.filter(taranaPredicate)
    } else {
        console.log('Outside Tarana-covered area')
        plans = plans.filter((plan) => !taranaPredicate(plan));
    }

    return plans;
}