import Validator from '../js/character';

const e = new Validator();
test('validateUsername test1', () => {
  expect(e.validateUsername('qwerty')).toBe(true);
});

test('validateUsername test2', () => {
  expect(e.validateUsername('1qwerty')).toBe(false);
});

test('validateUsername test3', () => {
  expect(e.validateUsername('qwerty1')).toBe(false);
});

test('validateUsername test4', () => {
  expect(e.validateUsername('qw333erty')).toBe(true);
});

test('validateUsername test5', () => {
  expect(e.validateUsername('qw_-12erty')).toBe(true);
});

test('validateUsername test6', () => {
    expect(e.validateUsername('qw1234erty')).toBe(false);
});
