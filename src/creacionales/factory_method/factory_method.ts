import { ConnectionFactory } from "./connections/ConnectionFactory";
import { ConnectionTypes } from "./enums/ConnectionTypes";

export function factory_method() {
  const connectionFactory = new ConnectionFactory();

  const con1 = connectionFactory.getConnection(ConnectionTypes.MySQL);
  const con11 = connectionFactory.getConnection(ConnectionTypes.MySQL);
  const con2 = connectionFactory.getConnection(ConnectionTypes.MongoDB);

  con1.connect();
  con2.connect();

  con11.setConnectionMessage('Cambie el mensaje de conexión');
  con1.connect();

}

