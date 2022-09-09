// Set the date range [start date to end date]
const startDate = new Date();
const endDate = new Date();
endDate.setDate(endDate.getDate() + 200);

// Gets all the dates of the date rang and create a new arrray of all dates
var daysOfYear = [];
for (var d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
    daysOfYear.push(new Date(d));
}

// gets the day name and keep them in a new array
let arrDays = []
function getDayName(date, locale) {
    let dayName = date.toLocaleDateString(locale, { weekday: 'long' });
    arrDays.push(dayName)
}

for (let i of daysOfYear) {
    getDayName(i, "en-US")
}

// Count how many fridays in the range of dates

let countedFriday = 0;

for (let name of arrDays) {
    if (name === 'Friday') {
        countedFriday++
    }
}

console.log(countedFriday)
