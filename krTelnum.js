function krTelnum(string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
      if (i===3 || i===7) {
      result = result + '-' + string[i]
      continue;
    }
    result = result + string[i];
  }

  return result;
}
// krTelnum('01012345678') //010-1234-5678