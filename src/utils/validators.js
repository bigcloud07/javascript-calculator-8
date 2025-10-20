export function validateNegativeNumbers(arr) {
  const negatives = arr.filter((number) => number < 0);
  if (negatives.length > 0) {
    throw new Error('[ERROR]음수는 입력하지 마세요');
  }
}

export function validateNaNValues(arr) {
  const hasNaN = arr.some((number) => Number.isNaN(number));
  if (hasNaN) {
    throw new Error('[ERROR]입력 값을 확인해주세요');
  }
}

export function validateEmptyValues(arr) {
  const hasWhiteSpace = arr.some((number) => number === 0);
  if (hasWhiteSpace) {
    throw new Error('[ERROR]구분자 사이에 값을 입력해주세요');
  }
}
