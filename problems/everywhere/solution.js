const method = (readline, print) => {
  let cases = new Number(readline()) + 1;
  while (--cases) {
    let trips = new Number(readline()) + 1;
    const log = {};
    while (--trips) {
      log[readline()] = 1;
    }
    print(Object.keys(log).length);
  }
};

exports.method = method;
