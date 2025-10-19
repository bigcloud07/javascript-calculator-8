import { Console } from '@woowacourse/mission-utils';

const DELIMITER_REGEX = /,|:/;

function calculateDelimiterSum(input) {
        const segments = input.split(DELIMITER_REGEX);
        return segments
            .map((s) => Number(s))
            .reduce((sum, n) => sum + n, 0)
    }

export default function stringInputFunction() {
  Console.readLine('문자열을 입력해주세요: ', (input) => {
    Console.print(`입력하신 문자열은 ${input}입니다.`);

    const result = calculateDelimiterSum(input);
    Console.print(`결과는 ${result}입니다.`);
  });
}