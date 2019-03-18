function capitalizeFirstLetter(str: string): string {
  if (str.length > 1) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  } else if (str.length > 0) {
    return str.charAt(0).toUpperCase();
  } else {
    return str;
  }
}

export default capitalizeFirstLetter;
