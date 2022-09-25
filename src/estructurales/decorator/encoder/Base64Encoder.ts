import { IEncoder } from "./IEncoder";
import { enc } from 'crypto-js';


export class Base64Encoder implements IEncoder {
  public encode(text: string): string {
    return enc.Base64.stringify(enc.Utf8.parse(text));
  }  

  public decode(textEncode: string): string {
    return enc.Base64.parse(textEncode).toString(enc.Utf8);
  }
}