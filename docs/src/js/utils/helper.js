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


const $nextAll = (elem, selector) => {
  let siblings = [];
  elem = elem.nextElementSibling;
  while (elem) {
    if (elem.matches(selector)) break;
    siblings.push(elem);
    elem = elem.nextElementSibling;
  }
  return siblings;
};


const $prevAll = (elem, selector) => {
  let siblings = [];
  elem = elem.previousElementSibling;
  while (elem) {
    if (elem.matches(selector)) break;
    siblings.push(elem);
    elem = elem.previousElementSibling;
  }
  return siblings;
};


export {
  $on,
  $qs,
  $qsa,
  $empty,
  $nextAll,
  $prevAll
}