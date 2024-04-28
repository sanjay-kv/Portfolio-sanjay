function calculateDaysBetweenDates(begin, end) { 
    // Validate input
    if (begin === null || end === null) {
        return 0;
    }
    // Calculate days between dates
    var millisecondsPerDay = 86400 * 1000; // Day in milliseconds
    begin = (typeof begin === "string") ? new Date(begin) : begin;
    end = (typeof end === "string") ? new Date(end) : end;
    var diff = end - begin; // Milliseconds between dates
    var days = Math.floor(diff / millisecondsPerDay);
    // Subtract two weekend days for every week in between
    var weeks = Math.floor(days / 7);
    days = days - (weeks * 2);
    // Handle special cases
    var startDay = begin.getDay();
    var endDay = end.getDay();
    // Adjust for when start is one day before end
    if (startDay - endDay > 1) {
        days = days - 1;
    }
    // Adjust for when start is more than one day before end
    if (startDay - endDay < -1) {
        days = days - 2;
    }
    return days;
}