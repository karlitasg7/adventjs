function fixGiftList(received, expected) {
  const missing = {};
  const extra = {};

  const receivedMap = received.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  const expectedMap = expected.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  for (const item in expectedMap) {
    if (receivedMap[item] === undefined) {
      missing[item] = expectedMap[item];
    } else if (receivedMap[item] < expectedMap[item]) {
      missing[item] = expectedMap[item] - receivedMap[item];
    }
  }

  for (const item in receivedMap) {
    if (expectedMap[item] === undefined) {
      extra[item] = receivedMap[item];
    } else if (receivedMap[item] > expectedMap[item]) {
      extra[item] = receivedMap[item] - expectedMap[item];
    }
  }

  return {
    missing,
    extra,
  };
}

module.exports = { fixGiftList };
