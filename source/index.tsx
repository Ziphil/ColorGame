//

import {
  createRoot
} from "react-dom/client";
import Root from "/source/component/root";


export class Main {

  public main(): void {
    this.render();
  }

  private render(): void {
    const container = document.getElementById("root");
    if (container) {
      const root = createRoot(container);
      root.render(<Root/>);
    }
  }

}


const main = new Main();
main.main();