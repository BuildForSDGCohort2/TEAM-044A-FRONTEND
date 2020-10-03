const upperFirst = (word) => {
  if (word.length === 1) {
    return word;
  }

  return word[0].toUpperCase() + word.substring(1);
};

export default upperFirst;
