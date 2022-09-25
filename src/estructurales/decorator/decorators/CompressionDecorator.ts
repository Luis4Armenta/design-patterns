import { ICompressor } from "../compressor/ICompressor"
import { IDataSource } from "../IDataSource";
import { DataSourceDecorator } from "./DataSourceDecorator"

export class CompressionDecorator extends DataSourceDecorator {
  private compressor: ICompressor;

  public constructor(compressor: ICompressor, source: IDataSource) {
    super(source);
    this.compressor = compressor;
  }

  public writeData(data: string): void {
    this.compressAndWriteData(data);
  }

  public readData(): string {
    return this.decompressAndReadData();
  }

  public compressAndWriteData(data: string): void {
    const compressedData = this.compressor.compress(data);

    super.writeData(compressedData);
  }

  public decompressAndReadData(): string {
    const data = super.readData();
    
    return this.compressor.decompress(data);
  }
}