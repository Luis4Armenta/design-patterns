import { IEncoder } from "../encoder/IEncoder";
import { IDataSource } from "../IDataSource";
import { DataSourceDecorator } from "./DataSourceDecorator";

export class EncodeDecorator extends DataSourceDecorator{
  private encoder: IEncoder;
  
  public constructor(encoder: IEncoder, source: IDataSource) {
    super(source);
    this.encoder = encoder;
  }

  public writeData(data: string): void {
    this.encodeAndWriteData(data);
  }
  
  public readData(): string {
    return this.decodeAndReadData();
  }

  private encodeAndWriteData(data: string): void {
    const encodedData: string = this.encodeData(data);
    
    super.writeData(encodedData);
  }

  private decodeAndReadData(): string {
    const decodedData: string = this.decodeData(super.readData());

    return decodedData;
  }
  
  private encodeData(data: string): string {
    return this.encoder.encode(data);
  }

  private decodeData(data: string): string {
    return this.encoder.decode(data);
  }
}
