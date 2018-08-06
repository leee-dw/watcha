const $on = (target, type, callback) => {
  target.addEventListener(type, callback)
}


const $qs = (selector, scope = document) => {
  return scope.querySelector(selector);
}


const $qsa = (selector, scope = document) => {
  return scope.querySelectorAll(selector);
}


const $empty = (target) => {
  while (target.hasChildNodes()) {
    target.removeChild(target.firstChild);
  };
}


export {
  $on,
  $qs,
  $qsa,
  $empty
}