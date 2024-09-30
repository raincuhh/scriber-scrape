class State_manager {
   m_data = {};

   init() {
      let categories = ["page", "appearance", "settings"];
      for (const c of categories) {
         if (!this.get(c)) {
            this.set(c, {});
         }
      }
   }

   get(state_n: string) {
      let current_data: any = this.m_data;
      let n_parts: any = state_n.split(/[.\[\]'"]+/);

      for (const t of n_parts) {
         if (current_data && current_data.hasOwnProperty(t)) {
            current_data = current_data[t];
         } else {
            current_data = undefined;
            break;
         }
      }
      return current_data;
   }

   set(state_n: string, v: any) {
      let current_data: any = this.m_data;
      let n_parts: any = state_n.split(/[.\[\]'"]+/);

      for (let i = 0; i < n_parts.length; i++) {
         if (!current_data.hasOwnProperty(n_parts[i])) {
            current_data[n_parts[i]] = {};
         }
         current_data = current_data[n_parts[i]];
      }
      current_data[n_parts[n_parts.length - 1]] = v;
   }
   delete(state_n: string) {
      let current_data: any = this.m_data;
      let n_parts: any = state_n.split(/[.\[\]'"]+/);
      for (let i = 0; i < n_parts.length; i++) {
         if (current_data && current_data.hasOwnProperty(n_parts[i])) {
            current_data = current_data[n_parts[i]];
         } else {
            console.log("state not found");
            return;
         }
      }
      if (current_data && current_data.hasOwnProperty(n_parts[n_parts.length - 1])) {
         delete current_data[n_parts[n_parts.length - 1]];
      } else {
         console.log("state not found");
      }
   }
}

export { State_manager };
