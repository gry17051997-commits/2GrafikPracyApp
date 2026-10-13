function missingAssignmentAction(isTrackingEnabled) {
  return isTrackingEnabled === true ? 'pause-preserve-enabled' : 'stay-disabled';
}

module.exports = {missingAssignmentAction};
