import { DateTime } from "luxon";

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

const EASTER_DATES = [  // [month, day], years 2024-2100. Transformed into DateTime instances
    [3, 31], [4, 20], [4, 5], [3, 28], [4, 16], [4, 1], [4, 21], [4, 13], [3, 28], [4, 17], [4, 9], [3, 25], [4, 13],
    [4, 5], [4, 25], [4, 10], [4, 1], [4, 21], [4, 6], [3, 29], [4, 17], [4, 9], [3, 25], [4, 14], [4, 5], [4, 18],
    [4, 10], [4, 2], [4, 21], [4, 6], [3, 29], [4, 18], [4, 2], [4, 22], [4, 14], [3, 30], [4, 18], [4, 10], [3, 26],
    [4, 15], [4, 6], [3, 29], [4, 11], [4, 3], [4, 22], [4, 14], [3, 30], [4, 19], [4, 10], [3, 26], [4, 15], [4, 7],
    [4, 19], [4, 11], [4, 3], [4, 23], [4, 7], [3, 30], [4, 19], [4, 4], [3, 26], [4, 15], [3, 31], [4, 20], [4, 11],
    [4, 3], [4, 16], [4, 8], [3, 30], [4, 12], [4, 4], [4, 24], [4, 15], [3, 31], [4, 20], [4, 12], [3, 28]
].map((raw, i) => DateTime.fromObject({year: 2024 + i, month: raw[0], day: raw[1]}));

const HOLIDAY_DEFINITIONS = [
    // Custom definition for a holiday
    // month: The month of the holiday
    // day: For holidays are always the same day each year. Mutually exclusive with 'weekday'
    // weekday: For holidays that are always the same day of the week (1 indexed, monday: 1, ...)
    // beforeDay: For weekday holidays, the first weekday before this date (eg: First monday before the April 25)
    // weekdayCount: For weekday holidays, the nth occurrence of the weekday in the month (eg: 2nd monday in April)
    {month: 1, day: 1},  // New Year's
    {month: 2, weekday: 1, weekdayCount: 3},  // Family Day
    {month: 5, beforeDay: 25, weekday: 1},  // Victoria Day
    {month: 7, day: 1},  // Canada Day
    {month: 8, weekday: 1, weekdayCount: 1},  // Heritage Day
    {month: 9, weekday: 1, weekdayCount: 1},  // Labour Day
    {month: 10, weekday: 1, weekdayCount: 2},  // Thanksgiving
    {month: 11, day: 11},  // Remembrance Day
    {month: 12, day: 25}, // Christmas
    {month: 12, day: 26}, // Boxing Day
]
const HOLIDAY_YEAR_CACHE = {}  // Cache by year for the parsed holidays

const _getHolidaysForYear = (year) => {
    // Return a list of DateTime instances of the holidays for a given year.
    // Holidays landing on a weekend are pushed to the next monday
    const holidays = []
    for(const holidayDefinition of HOLIDAY_DEFINITIONS) {
        if(holidayDefinition.day) {
            let holiday = DateTime.fromObject(
                {year, ...holidayDefinition}
            );
            if(holiday.isWeekend) {
                // Push to next monday
                holiday = holiday.plus({week: 1}).set({weekday: 1});
            }
            holidays.push(holiday);
        } else if(holidayDefinition.weekdayCount && holidayDefinition.weekday) {
            let holidayMonth = DateTime.fromObject({year, month: holidayDefinition.month, day: 1});
            let weekCount = holidayDefinition.weekdayCount;  // How many weeks to shift forward
            if(holidayMonth.weekday <= holidayDefinition.weekday) {
                weekCount -= 1;  // First occurrence of weekday lies in the first week
            }
            holidays.push(holidayMonth.plus({week: weekCount}).set({weekday: holidayDefinition.weekday}));
        } else if(holidayDefinition.beforeDay && holidayDefinition.weekday) {
            let holidayMax = DateTime.fromObject({year, month: holidayDefinition.month, day: holidayDefinition.beforeDay});
            if(holidayMax.weekday < holidayDefinition.weekday) {
                // Weekday lies later in week from the max day, holiday is in previous week
                holidays.push(holidayMax.minus({week: 1}).set({weekday: holidayDefinition.weekday}));
            } else {
                holidays.push(holidayMax.set({weekday: holidayDefinition.weekday}));
            }
        } else {
            throw new Error('Invalid holidayDefinition');
        }
    }

    let easter = EASTER_DATES.find((easterDate) => easterDate.year === year);
    if(easter) {
        holidays.push(easter.minus({day: 2}));  // Good Friday
        holidays.push(easter.plus({day: 1}));  // Easter Monday
    }
    return holidays;
}

const getHolidaysForYear = (year) => {
    if(!HOLIDAY_YEAR_CACHE[year]) {
        HOLIDAY_YEAR_CACHE[year] = _getHolidaysForYear(year);
    }
    return HOLIDAY_YEAR_CACHE[year];
}

export const isDisabledDate = (date) => {
    if(!BUSINESS_DAYS.includes(date.weekdayLong)) {
        return true;
    }
    if(getHolidaysForYear(date.year).some((holiday) => holiday.hasSame(date, 'day'))) {
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
    date = minInstallationDate(date);
    for(let i = 0; i<INSTALL_MAX_LEAD_TIME; i++) {
        const adjusted = date.plus({days: i});
        if(!isDisabledDate(adjusted)) {
            return adjusted;
        }
    }
    return date; // Fallback
}
