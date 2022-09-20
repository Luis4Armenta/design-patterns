import { ConnectionTypes } from "../enums/ConnectionTypes";
import { IConnection } from "../interfaces/IConnection";
import { MongoDBConnection } from "./MongoDBConnection";
import { MySQLConnection } from "./MySQLConnection";
import { VoidConnection } from "./VoidConnection";

export class ConnectionFactory {
  public getConnection(motor: ConnectionTypes): IConnection {
    switch (motor) {
      case ConnectionTypes.MySQL:
        return new MySQLConnection();
        break;
      case ConnectionTypes.MongoDB:
        return new MongoDBConnection();
      default:
        return new VoidConnection();
        break;
    }
  }
}