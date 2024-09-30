import { Save_manager } from "./save.js";
import { State_manager } from "./state.js";

enum pages {
   home = 0,
   settings,
   about,
}

class App_state {
   m_current_page: pages;

   constructor(current_page: pages) {
      this.m_current_page = current_page;
   }
   load_page() {}
}

function init() {
   let save_manager = new Save_manager();
   let state_manager = new State_manager();
}

export { init };
