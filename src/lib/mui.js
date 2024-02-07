import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";

export class AdapterLuxonExtended extends AdapterLuxon {
    // Taken from https://github.com/mui/mui-x/issues/7670, will not be needed for mui v7
  setLocaleToValue2 = (value) => {
    // The one in AdapterLuxon is private, so we can't re-use it.
    const expectedLocale = this.getCurrentLocaleCode();
    if (expectedLocale === value.locale) {
      return value;
    }

    return value.setLocale(expectedLocale);
  };

  startOfWeek = (value) => {
    // Force start of week to sunday
    return value.startOf("week").minus({days: 1});
  };

  endOfWeek = (value) => {
    // Force end of week to saturday
    return value.endOf("week").minus({days: 1});
  };

  getWeekArray = (value) => {
    const cleanValue = this.setLocaleToValue2(value);
    const firstDay = this.startOfWeek(this.startOfMonth(cleanValue));
    const lastDay = this.endOfWeek(this.endOfMonth(cleanValue));

    const { days } = lastDay.diff(firstDay, "days").toObject();

    const weeks = [];
    new Array(Math.round(days))
      .fill(0)
      .map((_, i) => i)
      .map((day) => firstDay.plus({ days: day }))
      .forEach((v, i) => {
        if (i === 0 || (i % 7 === 0 && i > 6)) {
          weeks.push([v]);
          return;
        }

        weeks[weeks.length - 1].push(v);
      });

    return weeks;
  };

  getWeekNumber = (value) => {
    return value.localeWeekNumber ?? value.weekNumber;
  };
}
