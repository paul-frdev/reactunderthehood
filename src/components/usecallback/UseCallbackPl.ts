const prevState = {
  callback: null,
  deps: null,
};

export const useCallbackPolifill = (callback: any, deps: any) => {
  if (!prevState.deps || !deps) {
    prevState.callback = callback;
    prevState.deps = deps;
    return callback;
  }

//   if (shallowEqual(deps, prevState.deps)) {
//     return prevState.callback;
//   }


};


