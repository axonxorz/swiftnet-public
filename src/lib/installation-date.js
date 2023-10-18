// All functions expect a Luxon DateTime

const INSTALL_LEAD_TIME = 2; // days
const INSTALL_MAX_LEAD_TIME = 90; // days
const BUSINESS_DAYS = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
]

export const isDisabledDate = (date) => {
    if(!BUSINESS_DAYS.includes(date.weekdayLong)) {
        return true;
    }
    return false;
}

export const minInstallationDate = (date) => {
    return date.startOf('day').plus({days: INSTALL_LEAD_TIME});
}

export const maxInstallationDate = (date) => {
    return date.startOf('day').plus({days: INSTALL_MAX_LEAD_TIME})
}

export const nextBusinessDay = (date) => {
    date = date.startOf('day');
    for(let i = 0; i<INSTALL_LEAD_TIME; i++) {
        const adjusted = date.plus({days: i});
        if(!isDisabledDate(adjusted)) {
            return adjusted;
        }
    }
    return date; // Fallback
}