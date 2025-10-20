import {
  validateNegativeNumbers,
  validateNaNValues,
  validateEmptyValues,
} from './utils/validators';

const DEFAULT_DELIMITER = /,|:/;

export default function calculateDelimiterSum(input) {
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
