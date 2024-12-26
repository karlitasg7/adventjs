function getCompleted(timeWorked, totalTime) {
  const worked = new Date(`1970-01-01T${timeWorked}Z`).getTime();
  const total = new Date(`1970-01-01T${totalTime}Z`).getTime();
  return Math.round((worked / total) * 100) + "%";
}

module.exports = { getCompleted };
