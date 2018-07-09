export const $on = (target, type, callback) => {
  target.addEventListener(type, callback)
}

export const $qs = (selector, scope = document) => {
  return scope.querySelector(selector);
}

export const $qsa = (selector, scope = document) => {
  return scope.querySelectorAll(selector);
}

export const $empty = (target) => {
  while (target.hasChildNodes()) {
    target.removeChild(target.firstChild);
  };
}

