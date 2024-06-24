import { SlugifyPipe } from "./slugify.pipe";

describe('SlugifyPipe', () => {

    it('Must return string grouped by hyphen and lowercase', () => {
  
      let input = 'Hello world';
      let expectedOutput = 'hello-world';
  
      let pipe = new SlugifyPipe();
      let currentOutput = pipe.transform(input);
  
      expect(currentOutput).toEqual(expectedOutput);
    })
    it('Must trim spaces', ()=> {
      let pipe= new SlugifyPipe();
      expect(pipe.transform('   Hello World   ')).toEqual('hello-world');
    })
  });