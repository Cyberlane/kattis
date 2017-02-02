const method = (readline, print) => {
  print(readline().split('').filter((e, i, a) => a[i - 1] !== e).join(''));
};

exports.method = method;
