import { Console } from '@woowacourse/mission-utils';
import calculateDelimiterSum from './calculateDelimiterSum.js';

export default async function stringInputFunction() {
  const input = await Console.readLineAsync('문자열을 입력해주세요: ');
  Console.print(`입력하신 문자열은 ${input}입니다.`);

  const result = calculateDelimiterSum(input);
  return result;
}