import { mount, StartClient } from "@solidjs/start/client";

const appSelector = "#app";

const appElement = document.querySelector(appSelector);

if (!appElement) {
  throw new Error(`No ${appSelector} element found`);
}

mount(() => <StartClient />, appElement);
