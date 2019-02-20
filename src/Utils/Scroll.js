const refCache = {};

const scrollTo = (ref) => {
  if (refCache[ref]) {
    refCache[ref].scrollIntoView({behavior: 'smooth', block: 'start'});
  };
};

const addRef = (name, ref) => {
  refCache[name] = ref;
};

export { scrollTo, addRef };