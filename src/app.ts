const { app, BrowserWindow, ipcMain } = require("electron/main");
//const path = require("node:path");

class Application {
   m_width: number;
   m_height: number;
   m_win: any;
   constructor(width: number, height: number) {
      this.m_width = width;
      this.m_height = height;
   }

   init() {
      //ipcMain.handle("ping", () => "pong");
      this.createWindow();

      app.on("activate", () => {
         if (BrowserWindow.getAllWindows().length === 0) {
            this.createWindow();
         }
      });
   }

   createWindow() {
      this.m_win = new BrowserWindow({
         width: this.m_width,
         height: this.m_height,
         webPreferences: {
            NodeIntegration: true,
            //preload: path.join(__dirname, "out/preload.js"),
         },
      });

      try {
         this.m_win.loadFile("./app/index.html");
      } catch (err) {
         console.error("Failed to load file:", err);
      }
   }
}

export { Application };
