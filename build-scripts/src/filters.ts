
export const dotNull = (str: string) => {
  if (str.endsWith('.null') === true) {
    str = str.split('.null')[0];
  }
  return str;
};

export const nullToGlobal = (str: string) => {
  if (str === null) {
    str = 'global';
  }
  return str;
};
