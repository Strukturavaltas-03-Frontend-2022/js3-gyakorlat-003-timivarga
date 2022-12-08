const cookieHandler = {
    getAll() {
      let obj = {};
      /*
      document.cookie = `viewed = 5`;
      document.cookie = `uid = 354774631237`;
      document.cookie = `ssid = Bx55OWbHJ0Vt_IGIF`;
  */
      let keyValuePairs = document.cookie.split("; ");
      keyValuePairs.forEach((item) => {
        let arr = [];
        arr = item.split("=");
  
        obj = { ...obj, [arr[0]]: arr[1] };
      });
      return obj;
    },
    toSessionStorage() {
      for (const key in this.getAll()) {
        if (Object.hasOwnProperty.call(this.getAll(), key)) {
          const value = this.getAll()[key];
          sessionStorage.setItem(key, value);
        }
      }
    },
    flush() {
      for (const key in this.getAll()) {
        if (Object.hasOwnProperty.call(this.getAll(), key)) {
          //const value = this.getAll()[key];
          document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        }
      }
    },
  };
  
  export { cookieHandler };
  export default cookieHandler;