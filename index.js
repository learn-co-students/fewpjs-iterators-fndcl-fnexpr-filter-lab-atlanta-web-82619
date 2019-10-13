// Code your solution here
function findMatching(drivers, string) {
  let filtered = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
  return filtered;
}

function fuzzyMatch(drivers, string) {
  let filtered = drivers.filter(driver=> driver.startsWith(string));
  return filtered;
}

function matchName(drivers, string) {
  let filtered = drivers.filter(driver => driver.name === string);
  return filtered;
}