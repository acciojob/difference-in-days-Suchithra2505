var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds

    // Parse the input dates to ensure they are in Date objects
    const parsedDate1 = new Date(date1);
    const parsedDate2 = new Date(date2);

    // Calculate the difference in milliseconds
    const timeDiff = Math.abs(parsedDate2 - parsedDate1);

    // Calculate the difference in days
    const diffDays = Math.floor(timeDiff / oneDay);

    return diffDays;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
