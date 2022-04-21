// todays date 
moment(Date);
$("#currentDay").text(moment().format('ddd, MMMM Do YYYY, h:mm a'));

var currentTime = moment();
currentTime = currentTime.startOf("hour");

// start work schedule at 8am
var beforeTime = moment().startOf('day').add(8, "hours");

// time blocks
// 8am
var time1 = beforeTime.add(0, "h");
//time format 
time1 = time1.format('hh A');
$(".block1").text(time1);

// 9am
var time2 = beforeTime.add(1, "h");
time2 = time2.format('hh A');
$(".block2").text(time2);

// 10am
var time3 = beforeTime.add(1, "h");
time3 = time3.format('hh A');
$(".block3").text(time3);

// 11am
var time4 = beforeTime.add(1, "h");
time4 = time4.format('hh A');
$(".block4").text(time4);

// 12am
var time5 = beforeTime.add(1, "h");
time5 = time5.format('hh A');
$(".block5").text(time5);

// 1pm
var time6 = beforeTime.add(1, "h");
time6 = time6.format('hh A');
$(".block6").text(time6);

// 2pm
var time7 = beforeTime.add(1, "h");
time7 = time7.format('hh A');
$(".block7").text(time7);

// 3pm
var time8 = beforeTime.add(1, "h");
time8 = time8.format('hh A');
$(".block8").text(time8);

// 4pm
var time9 = beforeTime.add(1, "h");
time9 = time9.format('hh A');
$(".block9").text(time9);

// 5pm
var time10 = beforeTime.add(1, "h");
time10 = time10.format('hh A');
$(".block10").text(time10);

// compart hour slots with the current time
function testTime() {

    // time1 / 8am
    time1 = moment().startOf('day').add(8, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time1)) {
        $(".form8").addClass("past");
    }
    else if (currentTime.isBefore(time1)) {
        $(".form8").addClass("future");
    }
    else if (currentTime.isSame(time1)) {
        $(".form8").addClass("present");
    };

    // time2 / 9am
    time2 = moment().startOf('day').add(9, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time2)) {
        $(".form9").addClass("past");
    }
    else if (currentTime.isBefore(time2)) {
        $(".form9").addClass("future");
    }
    else if (currentTime.isSame(time2)) {
        $(".form9").addClass("present");
    };

    // time3 / 10am
    time3 = moment().startOf('day').add(10, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time3)) {
        $(".form10").addClass("past");
    }
    else if (currentTime.isBefore(time3)) {
        $(".form10").addClass("future");
    }
    else if (currentTime.isSame(time3)) {
        $(".form10").addClass("present");
    };

    // time4 / 11am
    time4 = moment().startOf('day').add(11, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time4)) {
        $(".form11").addClass("past");
    }
    else if (currentTime.isBefore(time4)) {
        $(".form11").addClass("future");
    }
    else if (currentTime.isSame(time4)) {
        $(".form11").addClass("present");
    };

    // time5 / 12pm
    time5 = moment().startOf('day').add(12, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time5)) {
        $(".form12").addClass("past");
    }
    else if (currentTime.isBefore(time5)) {
        $(".form12").addClass("future");
    }
    else if (currentTime.isSame(time5)) {
        $(".form12").addClass("present");
    };

    // time6 / 1pm
    time6 = moment().startOf('day').add(13, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time6)) {
        $(".form1").addClass("past");
    }
    else if (currentTime.isBefore(time6)) {
        $(".form1").addClass("future");
    }
    else if (currentTime.isSame(time6)) {
        $(".form1").addClass("present");
    };

    // time7 / 2pm
    time7 = moment().startOf('day').add(14, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time7)) {
        $(".form2").addClass("past");
    }
    else if (currentTime.isBefore(time7)) {
        $(".form2").addClass("future");
    }
    else if (currentTime.isSame(time7)) {
        $(".form2").addClass("present");
    };

    // time8 / 3pm
    time8 = moment().startOf('day').add(15, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time8)) {
        $(".form3").addClass("past");
    }
    else if (currentTime.isBefore(time8)) {
        $(".form3").addClass("future");
    }
    else if (currentTime.isSame(time8)) {
        $(".form3").addClass("present");
    };

    // time9 / 4pm
    time9 = moment().startOf('day').add(16, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time9)) {
        $(".form4").addClass("past");
    }
    else if (currentTime.isBefore(time9)) {
        $(".form4").addClass("future");
    }
    else if (currentTime.isSame(time9)) {
        $(".form4").addClass("present");
    };

    // time10 / 5pm
    time10 = moment().startOf('day').add(17, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time10)) {
        $(".form5").addClass("past");
    }
    else if (currentTime.isBefore(time10)) {
        $(".form5").addClass("future");
    }
    else if (currentTime.isSame(time10)) {
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
