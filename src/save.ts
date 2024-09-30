class Save_manager {
   load() {}
   save() {}
   delete() {
      this.save();
      localStorage.removeItem("save");
      localStorage.clear();
      location.reload();
   }
}

export { Save_manager };
