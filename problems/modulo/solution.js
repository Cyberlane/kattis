const method = (readline, print) => {
  const track = {};
  for (let i = 0; i < 10; i++) {
    track[readline() % 42] = 1;
  }
  print(Object.keys(track).length);
};

exports.method = method;
