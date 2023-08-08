const data = {
  name: 10,
  age: 30,
  city: 20,
};

const replacerFunction = (key, value) => {
  if (typeof value === 'number') {
    return value + 20;
  }
  return value;
};

const jsonString = JSON.stringify(data, replacerFunction, 4);
console.log(jsonString);
