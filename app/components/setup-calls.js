import Component from "@glimmer/component";
import { action } from "@ember/object";

// 1. Import mocking utils.
import { setupWorker, rest } from "msw";

export default class SetupCallsComponent extends Component {
  get worker() {
    // 2. Define request handlers and response resolvers.
    debugger;
    return setupWorker(
      rest.get("msw-js/foo-bar", (req, res, ctx) => {
        return res(
          ctx.delay(1500),
          ctx.status(202, "Mocked status"),
          ctx.json({
            message: "Mocked response JSON body",
          })
        );
      })
    );
  }

  @action
  setup() {
    // 3. Start the Service Worker.
    this.worker.start({
      serviceWorker: {
        url: "/msw-js/mockServiceWorker.js",
      },
    });
  }

  @action
  getData() {
    fetch("msw-js/foo-bar")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }
}
