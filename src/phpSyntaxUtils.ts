import transformPhpVariableName from './transformPhpVariableName';
import capitalizeFirstLetter from './capitalizeFirstLetter';

// todo: this could be refactored to a real class or something. idk.
function buildClass(className: string, privateVariables: string[]): string {
  return `<?php

class ${className} {
${buildPrivateVariableDeclarations(privateVariables)}
${buildSetters(privateVariables)}
${buildGetters(privateVariables, '' /* todo: here */)}
}
`;
}

function buildPrivateVariableDeclarations(privateVariables: string[]): string {
  return privateVariables.reduce((carry: string, item: string) => {
    carry += `${singleIndent()}private ${transformPhpVariableName(item)};\n`;
    return carry;
  }, '');
}

function buildGetters(variables: string[], types: string): string {
  return variables.reduce((carry: string, variableName: string) => {
    carry += `${singleIndent()}${buildGetter(variableName, '' /* todo: here */)}`;
    return carry;
  }, '');
}

function buildGetter(variableName: string, type: string): string {
  return `
    /**
     * @return ${type}
     */
    public function get${capitalizeFirstLetter(variableName)}() {
      return $this->${variableName};
    }
  `;
}

function buildSetters(variables: string[]): string {
  return variables.reduce((carry: string, variableName: string) => {
    carry += `${singleIndent()}${buildSetter(variableName, '' /* todo: here */)}`;
    return carry;
  }, '');
}

function buildSetter(variableName: string, type: string): string {
  return `
    /**
     * @return self
     */
    public function set${capitalizeFirstLetter(variableName)}(${transformPhpVariableName(variableName)}) {
      $this->${variableName} = ${transformPhpVariableName(variableName)};
      return $this;
    }
  `
}

/**
 * single indent = 4 spaces
 */
function singleIndent(): string {
  return '    ';
}

export { buildClass };
