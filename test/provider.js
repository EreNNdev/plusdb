const db = require("../src/app.js");
const data = new db({ path: "./database.json", spaces: 0 }); 
 
    //All Data remove & destroyet
    data.clear();

    //Data save & set
    data.set("set.prop", 10)

    //Data fetch & get
    data.get("set"), { prop: 10 };

    //Data has
    data.has("set"), true;

    //Data all
    data.all().length;

    //Data push
    data.set("array", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    data.push("array", 10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];