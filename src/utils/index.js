// return the list of years from the input year to the current year
export const getListOfYears = (startYear, arr) => {
  if (startYear <= new Date().getFullYear()) {
    // checking the input year should be less then the current year
    arr = [...arr, startYear];
    startYear++;
    return getListOfYears(startYear, arr); // recursively checking untill the input year is equsal to the current year
  } else {
    return arr;
  }
};
