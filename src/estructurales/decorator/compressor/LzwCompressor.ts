import { ICompressor } from "./ICompressor";
import * as Lzw from 'lzw-compressor';
  
export class LzwCompressor implements ICompressor {
  public compress(content: string): string {
    return Lzw.compress(content);

  }

  public decompress(contentCompress: string): string {
    return Lzw.decompress(contentCompress);
  }
}
