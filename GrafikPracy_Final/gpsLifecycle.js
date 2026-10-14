function normalizeGpsSpeedMps(value, maxSpeedMps = 55) {
  const speed = Number(value);
  return Number.isFinite(speed) && speed >= 0 && speed <= maxSpeedMps ? speed : 0;
}

function missingAssignmentAction(isTrackingEnabled) {
  return isTrackingEnabled === true ? 'pause-preserve-enabled' : 'stay-disabled';
}

module.exports = {missingAssignmentAction, normalizeGpsSpeedMps};
