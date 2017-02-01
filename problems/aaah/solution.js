const method = readline => {
  return readline().length >= readline().length ? 'go' : 'no';
};

exports.method = method;
