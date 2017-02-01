const print = () => { };
const method = number => {
  return number % 2 ? 'Alice' : 'Bob';
};

print(method());

exports.method = method;
