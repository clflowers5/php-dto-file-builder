function transformPhpVariableName(variableName: string): string {
  if (variableName && variableName[0] !== '$') {
    return `$${variableName}`;
  } else {
    return variableName;
  }
}

export default transformPhpVariableName;
