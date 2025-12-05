function timeUntilTakeOff(fromTime, takeOffTime) {
  fromTime = fromTime
    .replaceAll("*", "-")
    .replaceAll("|", ":")
    .replaceAll(" NP", "Z")
    .replaceAll("@", "T");

  takeOffTime = takeOffTime
    .replaceAll("*", "-")
    .replaceAll("|", ":")
    .replaceAll(" NP", "Z")
    .replaceAll("@", "T");

  const fromTimeDate = new Date(fromTime);
  const takeOffTimeDate = new Date(takeOffTime);

  const diff = takeOffTimeDate - fromTimeDate;

  return Math.floor(diff / 1000);
}

module.exports = { timeUntilTakeOff };
