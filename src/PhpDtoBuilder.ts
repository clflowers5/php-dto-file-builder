import transformPhpVariableName from './transformPhpVariableName';

interface DtoBuilder {
  addPrivateVariable(variableName: string): DtoBuilder;
  addPublicVariable(variableName: string): DtoBuilder;
  build(): string;
}

class PhpDtoBuilder implements DtoBuilder {
  private privateVariables: string[] = [];
  private publicVariables: string[] = [];

  constructor(private className: string) {}

  public addPrivateVariable(variableName: string): DtoBuilder {
    this.addNonEmptyStringToCollection(variableName, this.privateVariables);
    return this;
  }

  public addPublicVariable(variableName: string): DtoBuilder {
    this.addNonEmptyStringToCollection(variableName, this.publicVariables);
    return this;
  }

  public build(): string {
    return '';
  }

  private addNonEmptyStringToCollection(
    variableName: string,
    collection: string[]
  ): void {
    const trimmedVar = variableName.trim();
    if (trimmedVar) {
      collection.push(transformPhpVariableName(trimmedVar));
    }
  }
}

export default PhpDtoBuilder;
