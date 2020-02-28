export module App {
  export function log(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    let originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      console.log("Method " + propertyKey + " is going to be invoked");
      return originalMethod.apply(this,args);
    };
  }

  export class BasicCalculator {
    public constructor(protected value: number = 0) {}

    public currentValue(): number {
      return this.value;
    }

    @log
    public add(num: number): this {
      this.value += num;
      return this;
    }

    @log
    public display(): number {
      return this.value;
    };
    
    
    multiply = (operand: number): this => {
      this.value *= operand;
      return this;
    };
  }
}
