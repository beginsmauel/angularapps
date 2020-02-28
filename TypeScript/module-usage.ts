export module App{
export class BasicCalculator {
       public constructor(protected valuee: number = 0) { }
        
        public currentValue(): number {
            return this.valuee;
        }
        public device(num : number): this{
          this.valuee += num;
          return this;
        }
        /*
        public add(operand: number): this {
            this.value += operand;
            return this;
        }
        public multiply(operand: number): this {
            this.value *= operand;
            return this;
        }*/

}
}