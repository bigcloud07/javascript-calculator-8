import stringInputFunction from "./stringInputFunction.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const result = await stringInputFunction();
    Console.print(`결과 : ${result}`);
  }
}

export default App;
