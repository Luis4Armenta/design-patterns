import { LzwCompressor } from "./compressor/LzwCompressor";
import { CompressionDecorator } from "./decorators/CompressionDecorator";
import { EncodeDecorator } from "./decorators/EncodeDecorator";
import { Base64Encoder } from "./encoder/Base64Encoder";
import { FileDataSource } from "./FileDataSource";

class Demo {
  public static main() {
    const data: string = 'Name,Salary\nJohn Smith,100000\nSteven Jobs,912000';

    const base64Encoder = new Base64Encoder();
    const lzwCompressor = new LzwCompressor();

    const encoded = new CompressionDecorator(
      lzwCompressor, new EncodeDecorator(
        base64Encoder, new FileDataSource('./data.txt')
      )
    );

   encoded.writeData(data);

   const plain = new FileDataSource('./data.txt');

    console.log("- Input ----------------");
    console.log(data);
    console.log("- Encoded --------------");
    console.log(plain.readData());
    console.log("- Decoded --------------");
    console.log(encoded.readData());
  }
}

Demo.main();