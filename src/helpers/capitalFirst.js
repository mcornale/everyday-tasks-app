const capitalFirst = (string) => {
  const transformedString = string.trim().toLowerCase();
  return transformedString[0].toUpperCase() + transformedString.slice(1);
};

export default capitalFirst;
