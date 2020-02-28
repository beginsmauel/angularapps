https://stackblitz.com/edit/typescript-xbyn9i?file=demo.ts

export module App{
export class BasicCalculator {
       public constructor(protected value: number = 0) { }
        
        public currentValue(): number {
            return this.value;
        }
        public add(num : number): this{
          this.value += num;
          return this;
        }
        display = ()  => { return this.value;}
        multiply = (operand: number) : this => {
          this.value *= operand;
          return this;
        }
   

}
}