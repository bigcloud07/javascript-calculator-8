import { Console } from '@woowacourse/mission-utils';
import stringInputFunction from './stringInputFunction.js';

class App {
  async run() {
    const result = await stringInputFunction();
    Console.print(`결과 : ${result}`);
  }
}

export default App;
