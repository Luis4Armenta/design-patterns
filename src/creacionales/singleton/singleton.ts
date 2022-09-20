import { Connection } from "./Connection";

  export function singleton() {

  const con = Connection.getInstance();
  con.setMessage('Hola mundo');

  const con2 = Connection.getInstance();

  con.say();
  con2.say();

  con2.setMessage('Adiós mundo');

  con.say();
}