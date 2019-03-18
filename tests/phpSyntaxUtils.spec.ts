import { buildClass } from './../src/phpSyntaxUtils';

describe('buildClass', () => {
  it('snapshot variant 1', () => {
    const result = buildClass('MyClassHomeboy', [
      'one',
      'two',
      'three',
      'four',
      'five'
    ]);
    expect(result).toMatchSnapshot();
  });

  // it('snapshot variant 2', () => {

  // });
});
