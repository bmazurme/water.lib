import { getRainFlow, getRainFlowFromRoof } from './calcs/rain-water';
import dataForRainCalc from './mocks/data-rain-flow';

const data = getRainFlow(dataForRainCalc);

console.log(data);
console.log(getRainFlowFromRoof(2,2,2,2,2))

function first() {
  console.log('first(): factory evaluated');
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('first(): called', target, propertyKey, descriptor);
  };
}

class ExampleClass {
  @first()
  method() {
    console.log(123);
  }
}

new ExampleClass().method();

let variable = function(target) {
  target.property = 'GFG is best';
}

// Decorator
@variable
class GFG {

}

// Print in the console
console.log((GFG as any).property);

// @first()
// function method() {

// }
// method();

// console.log(444);

