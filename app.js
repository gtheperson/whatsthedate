// calculates day of week for given date in Gregorian calander

// assign variables
var day;
var month;
var zelMonth;
var year;
var yearEnd;
var yearStart;
var weekday;
var dayName;

document.getElementsByClassName("date-submit")[0].addEventListener("click", submit);

function submit(evt) {

	var day = document.getElementsByClassName("day")[0].value;
	var month = document.getElementsByClassName("month")[0].value;
	var year = document.getElementsByClassName("year")[0].value;

	if (year <= 1752) {
		alert("Before September 1752 English speaking countries used the Julian Calander. This doesn't work for that!");
	}
	if (month <1 || month > 12) {
		alert("That's not a valid month!");
	}
	if (day < 0 || day > 31) {
		alert("That's not a valid day!");
	}
	if (month == 2 || month == 4 || month == 6 || month == 9 || month == 11) {
		if (day == 31) {
			alert("That's not a valid day!");
		}
	}


	// reorders month as per equation for ease of leap year (Fed 29th is last day of year)
	zelMonth = month - 2;
	if (zelMonth <= 0) {
		zelMonth += 12;
		year -= 1;
	}

	// gets last two year digits
	yearEnd = (year % 100);

	// first two digits
	yearStart = Math.floor(year / 100);

	var mCal = Math.floor(((13 * zelMonth) - 1) / 5);

	var yECal = Math.floor(yearEnd / 4);

	var ySCal = Math.floor(yearStart / 4);

	var ySX2 = 2 * yearStart;


	weekday = eval(day) + mCal + yearEnd + yECal + ySCal;
	weekday -= ySX2; 


	weekday = Math.abs(weekday % 7);


	if (weekday == 0) {
		dayName = "Sunday";
	} else if (weekday == 1) {
		dayName = "Monday";
	} else if (weekday == 2) {
		dayName = "Tuesday"
	} else if (weekday == 3) {
		dayName = "Wednesday";
	} else if (weekday == 4) {
		dayName = "Thursday";
	} else if (weekday == 5) {
		dayName = "Friday";
	} else if (weekday == 6) {
		dayName = "Saturday";
	}


	document.getElementsByClassName("answer")[0].value = dayName;

}