import { getRainFlow } from './calcs/rain-waters';

const data = getRainFlow({
  place: 1,
  condition: 1,
  area: {
    roof: 1,
    stone: 1,
    lawns: 1,
    tracks: 1,
    ground: 1,
    pavements: 1,
    cobblestone: 1,
  },
  intensity: 1,
  lengthPipe: 1,
  lengthTray: 1,
  velocityPipe: 1,
  velocityTray: 1,
  timeInit: 1,
});

console.log(data);


function first() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called", target, propertyKey, descriptor);
  };
}
  
class ExampleClass {
  @first()
  method() {}
}

new ExampleClass().method();

// @first()
// function method() {

// }
// method();

console.log(444);

