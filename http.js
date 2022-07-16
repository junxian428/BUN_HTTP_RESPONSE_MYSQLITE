import { Database } from "bun:sqlite";

const db = new Database("USER.db");
console.log(db.query("SELECT * FROM user").all());
var result = db.query("SELECT * FROM user").all();
//console.log(result);
result = JSON.stringify(result);
const server = Bun.serve({
    fetch() {
      return new Response(result);
    },
});

