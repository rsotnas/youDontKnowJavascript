// scheduleMeeting(..) should take a start time (in 24-hour format as a string "hh:mm") and a meeting duration (number of minutes). It should return true if the meeting falls entirely within the work day (according to the times specified in dayStart and dayEnd); return false if the meeting violates the work day bounds.


const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime,durationMinutes) {
    // ..TODO..
    let _dayStart = new Date('2020-11-10 ' + dayStart + ":00Z");
    let _dayEnd = new Date('2020-11-10 ' + dayEnd + ":00Z");
    let _startTime = new Date('2020-11-10 ' + startTime + ":00Z");
    let newDate = startTime.split(':')
    newDate[1] = parseInt(newDate[1]) + durationMinutes
    if (newDate[1] >= 60) {
        newDate[0] = parseInt(newDate[0]) + 1
        newDate[1] -= 60
        if (newDate[1].toString().length === 1) {
            newDate[1] = newDate[1].toString() + '0'
        }
    }
    newDate = newDate.join(':')
    newDate = new Date('2020-11-10 ' + newDate + ":00Z");

    if (newDate >= _dayStart && newDate <= _dayEnd && _startTime >= _dayStart && _startTime <= _dayEnd) {
        console.log(true)
    } else {
        console.log(false)
    }
}

scheduleMeeting("7:00",15);     // false
scheduleMeeting("07:15",30);    // false
scheduleMeeting("7:30",30);     // true
scheduleMeeting("11:30",60);    // true
scheduleMeeting("17:00",45);    // true
scheduleMeeting("17:30",30);    // false
scheduleMeeting("18:00",15);    // false