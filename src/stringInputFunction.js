import { Console } from '@woowacourse/mission-utils';


export default function stringInputFunction() {
    Console.readLine('문자열을 입력해주세요: ', (input) => {
        Console.print(`입력하신 문자열은 ${input}입니다.`);
    });
}