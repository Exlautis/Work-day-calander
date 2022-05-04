// todays date 
moment(Date);
$("#currentDay").text(moment().format('ddd, MMMM Do YYYY, h:mm a'));

var presentTime = moment();
presentTime = presentTime.startOf("hour");

// start work schedule at 8am
var pastTime = moment().startOf('day').add(8, "hours");

// time blocks
// 8am
var hour1 = pastTime.add(0, "h");
//time format 
hour1 = hour1.format('hh A');
$(".block1").text(hour1);

// 9am
var hour2 = pastTime.add(1, "h");
hour2 = hour2.format('hh A');
$(".block2").text(hour2);

// 10am
var hour3 = pastTime.add(1, "h");
hour3 = hour3.format('hh A');
$(".block3").text(hour3);

// 11am
var hour4 = pastTime.add(1, "h");
hour4 = hour4.format('hh A');
$(".block4").text(time4);

// 12am
var hour5 = pastTime.add(1, "h");
hour5 = hour5.format('hh A');
$(".block5").text(hour5);

// 1pm
var hour6 = pastTime.add(1, "h");
hour6 = hour6.format('hh A');
$(".block6").text(hour6);

// 2pm
var hour7 = pastTime.add(1, "h");
hour7 = hour7.format('hh A');
$(".block7").text(hour7);

// 3pm
var hour8 = pastTime.add(1, "h");
hour8 = hour8.format('hh A');
$(".block8").text(hour8);

// 4pm
var hour9 = pastTime.add(1, "h");
hour9 = hour9.format('hh A');
$(".block9").text(hour9);

// 5pm
var hour10 = pastTime.add(1, "h");
hour10 = hour10.format('hh A');
$(".block10").text(hour10);

// compart hour slots with the current time
function testTime() {

    // hour1 / 8am
    hour1 = moment().startOf('day').add(8, "hours");
    presentTime = presentTime.startOf("hour");
    if (presentTime.isAfter(hour1)) {
        $(".form8").addClass("past");
    }
    else if (presentTime.isBefore(hour1)) {
        $(".form8").addClass("future");
    }
    else if (presentTime.isSame(hour1)) {
        $(".form8").addClass("present");
    };

    // hour2 / 9am
    hour2 = moment().startOf('day').add(9, "hours");
    presentTime = presentTime.startOf("hour");
    if (presentTime.isAfter(hour2)) {
        $(".form9").addClass("past");
    }
    else if (presentTime.isBefore(hour2)) {
        $(".form9").addClass("future");
    }
    else if (presentTime.isSame(hour2)) {
        $(".form9").addClass("present");
    };

    // hour3 / 10am
    hour3 = moment().startOf('day').add(10, "hours");
    presentTime = presentTime.startOf("hour");
    if (presentTime.isAfter(hour3)) {
        $(".form10").addClass("past");
    }
    else if (presentTime.isBefore(hour3)) {
        $(".form10").addClass("future");
    }
    else if (presentTime.isSame(hour3)) {
        $(".form10").addClass("present");
    };

    // hour4 / 11am
    hour4 = moment().startOf('day').add(11, "hours");
    presentTime = presentTime.startOf("hour");
    if (presentTime.isAfter(hour4)) {
        $(".form11").addClass("past");
    }
    else if (presentTime.isBefore(hour4)) {
        $(".form11").addClass("future");
    }
    else if (presentTime.isSame(hour4)) {
        $(".form11").addClass("present");
    };

    // hour5 / 12pm
    hour5 = moment().startOf('day').add(12, "hours");
    presentTime = presentTime.startOf("hour");
    if (presentTime.isAfter(hour5)) {
        $(".form12").addClass("past");
    }
    else if (presentTime.isBefore(hour5)) {
        $(".form12").addClass("future");
    }
    else if (presentTime.isSame(hour5)) {
        $(".form12").addClass("present");
    };

    // hour6 / 1pm
    hour6 = moment().startOf('day').add(13, "hours");
    presentTime = presentTime.startOf("hour");
    if (presentTime.isAfter(hour6)) {
        $(".form1").addClass("past");
    }
    else if (presentTime.isBefore(hour6)) {
        $(".form1").addClass("future");
    }
    else if (presentTime.isSame(hour6)) {
        $(".form1").addClass("present");
    };

    // hour7 / 2pm
    hour7 = moment().startOf('day').add(14, "hours");
    presentTime = presentTime.startOf("hour");
    if (presentTime.isAfter(hour7)) {
        $(".form2").addClass("past");
    }
    else if (presentTime.isBefore(hour7)) {
        $(".form2").addClass("future");
    }
    else if (presentTime.isSame(hour7)) {
        $(".form2").addClass("present");
    };

    // hour8 / 3pm
    hour8 = moment().startOf('day').add(15, "hours");
    presentTime = presentTime.startOf("hour");
    if (presentTime.isAfter(hour8)) {
        $(".form3").addClass("past");
    }
    else if (presentTime.isBefore(hour8)) {
        $(".form3").addClass("future");
    }
    else if (presentTime.isSame(hour8)) {
        $(".form3").addClass("present");
    };

    // hour9 / 4pm
    hour9 = moment().startOf('day').add(16, "hours");
    presentTime = presentTime.startOf("hour");
    if (presentTime.isAfter(hour9)) {
        $(".form4").addClass("past");
    }
    else if (presentTime.isBefore(hour9)) {
        $(".form4").addClass("future");
    }
    else if (presentTime.isSame(hour9)) {
        $(".form4").addClass("present");
    };

    // hour10 / 5pm
    hour10 = moment().startOf('day').add(17, "hours");
    presentTime = presentTime.startOf("hour");
    if (presentTime.isAfter(hour10)) {
        $(".form5").addClass("past");
    }
    else if (presentTime.isBefore(hour10)) {
        $(".form5").addClass("future");
    }
    else if (presentTime.isSame(hour10)) {
        $(".form5").addClass("present");
    };
}

testTime();

// get items from localstorage
var timeArr = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5,];

for (var i = 0; i < timeArr.length; i++) {
    var dataHour = localStorage.getItem(timeArr[i]);
    $(".form" + timeArr[i]).val(dataHour);
}

$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    var listItem = $(this).parent().data("hour");
    localStorage.setItem(listItem, formValue);
});
