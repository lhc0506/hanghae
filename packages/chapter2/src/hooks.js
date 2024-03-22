const isSame = (arr1, arr2) => {
  const maxLength = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxLength; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

export function createHooks(callback) {
  const states = [];
  let currentIndex = 0;

  const useState = initState => {
    const index = currentIndex;

    if (states[index] === undefined) {
      states[index] = initState;
    }

    const setState = newState => {
      if (states[index] === newState) {
        return;
      }
      states[index] = newState;
      callback();
    };
    currentIndex += 1;

    return [states[index], setState];
  };

  const useMemo = (fn, refs) => {
    const index = currentIndex;
    if (states[currentIndex] === undefined || !isSame(states[currentIndex].refs, refs)) {
      states[index] = {value: fn(), refs};
    }

    return states[index];
  };

  const resetContext = () => {
    currentIndex = 0;
  };

  return {useState, useMemo, resetContext};
}
