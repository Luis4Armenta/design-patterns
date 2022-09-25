export interface IDataSource {
  readData(): string;
  writeData(data: string): void;
}