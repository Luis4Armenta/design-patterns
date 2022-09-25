import { IDataSource } from "./IDataSource";
import * as fs from 'fs';
import { PathOrFileDescriptor } from 'fs';

export class FileDataSource implements IDataSource {
  private file: PathOrFileDescriptor;

  public constructor(file: PathOrFileDescriptor) {
    this.file = file
  }

  public readData(): string {
    try {
      const file = fs.readFileSync(this.file)
      
      return file.toString();
    } catch (error) {
      throw new Error('Error reading file');
    }
  }

  public writeData(data: string): void {
    try {
      fs.writeFileSync(this.file, data)
    } catch (error) {
      throw new Error('Error writing file');
    }
  }
}