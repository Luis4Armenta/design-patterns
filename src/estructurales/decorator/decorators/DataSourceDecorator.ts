import { IDataSource } from "../IDataSource";

export class DataSourceDecorator implements IDataSource {
  private wrappe: IDataSource;

  public constructor(source: IDataSource) {
    this.wrappe = source
  }

  public readData(): string {
    return this.wrappe.readData();
  }

  public writeData(data: string): void {
    this.wrappe.writeData(data);
  }
}
