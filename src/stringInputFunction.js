import { Console } from '@woowacourse/mission-utils';

const DEFAULT_DELIMITER = /,|:/;

function validateNegativeNumbers(n) {
    const negatives = n.filter((n) => n < 0);
    if(negatives.length > 0){
        throw new Error('[ERROR] 음수는 입력하지 마세요');
    }
}

function calculateDelimiterSum(input) {
  if (input.startsWith('//')) {
    const nlIndex = input.indexOf('\\n');
    const customDelimiter = input.slice(2, nlIndex);
    const resultSliceString = input.slice(nlIndex + 2);

    const resultSegment = resultSliceString.split(customDelimiter).map(Number);
    validateNegativeNumbers(resultSegment)
    return resultSegment.reduce((sum, n) => sum + n, 0);
  }

  const segments = input.split(DEFAULT_DELIMITER).map(Number);
  validateNegativeNumbers(segments)
  return segments.reduce((sum, n) => sum + n, 0);
}

export default async function stringInputFunction() {
  const input = await Console.readLineAsync('문자열을 입력해주세요: ');
  Console.print(`입력하신 문자열은 ${input}입니다.`);

  const result = calculateDelimiterSum(input);
  return Console.print(`결과 : ${result}`);
}
