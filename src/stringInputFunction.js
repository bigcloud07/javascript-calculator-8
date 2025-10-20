import { Console } from '@woowacourse/mission-utils';

const DEFAULT_DELIMITER = /,|:/;

function validateNegativeNumbers(arr) {
  const negatives = arr.filter((number) => number < 0);
  if (negatives.length > 0) {
    throw new Error('[ERROR]음수는 입력하지 마세요');
  }
}

function validateNaNValues(arr) {
  const hasNaN = arr.some((number) => Number.isNaN(number));
  if (hasNaN) {
    throw new Error('[ERROR]입력을 확인해주세요');
  }
}

function validateEmptyValues(arr) {
  const hasWhiteSpace = arr.some((number) => number === 0);
  if (hasWhiteSpace) {
    throw new Error('[ERROR]구분자 사이에 값을 입력해주세요');
  }
}

function calculateDelimiterSum(input) {
  if (input.startsWith('//')) {
    const newlineIndex = input.indexOf('\\n');
    const customDelimiter = input.slice(2, newlineIndex);
    const customSegmentString = input.slice(newlineIndex + 2);
    const customSegments = customSegmentString
      .split(customDelimiter)
      .map(Number);
    validateNegativeNumbers(customSegments);
    validateNaNValues(customSegments);
    validateEmptyValues(customSegments);
    return customSegments.reduce((sum, num) => sum + num, 0);
  }
  const defaultSegments = input.split(DEFAULT_DELIMITER).map(Number);
  validateNegativeNumbers(defaultSegments);
  validateNaNValues(defaultSegments);
  validateEmptyValues(defaultSegments);
  return defaultSegments.reduce((sum, num) => sum + num, 0);
}

export default async function stringInputFunction() {
  const input = await Console.readLineAsync('문자열을 입력해주세요: ');
  Console.print(`입력하신 문자열은 ${input}입니다.`);

  const result = calculateDelimiterSum(input);
  return result;
}
