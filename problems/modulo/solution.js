const method = readline => {
  const track = {};
  for (let i = 0; i < 10; i++) {
    track[readline() % 42] = 1;
  }
  return Object.keys(track).length;
};

exports.method = method;
