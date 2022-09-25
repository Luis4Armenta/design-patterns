export interface ICompressor {
  compress(content: string): string;
  decompress(contentCompress: string): string;
}