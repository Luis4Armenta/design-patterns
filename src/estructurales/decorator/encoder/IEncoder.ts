export interface IEncoder {
  encode(text: string): string;
  decode(textEncode: string): string;
} 