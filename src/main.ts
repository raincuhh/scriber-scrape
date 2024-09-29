const { app, Menu } = require("electron/main");
import { Application } from "./app.js";

app.whenReady().then(() => {
   Menu.setApplicationMenu(null);
   let application: Application = new Application(600, 800);
   application.init();
});

app.on("window-all-closed", () => {
   if (process.platform !== "darwin") {
      app.quit();
   }
});
