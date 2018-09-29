(function(){
  'use script';

  /*
  Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
  métodos semelhantes aos que existem no array, mas que sirvam para os
  elementos do DOM selecionados.
  Crie os seguintes métodos:
  - forEach, map, filter, reduce, reduceRight, every e some.

  Crie também métodos que verificam o tipo do objeto passado por parâmetro.
  Esses métodos não precisam depender de criar um novo elmento do DOM, podem
  ser métodos estáticos.

  Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
  no objeto, como nos exemplos abaixo:
  DOM.isArray([1, 2, 3]); // true
  DOM.isFunction(function() {}); // true
  DOM.isNumber('numero'); // false

  Crie os seguintes métodos para verificação de tipo:
  - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
  O método isNull deve retornar `true` se o valor for null ou undefined.
  */

  function DOM(elements) {
    this.element = this.getDOMElements(elements);
  }

  DOM.prototype.getDOMElements = function getDOMElements(elements) {
    return document.querySelectorAll(elements);
  };

  DOM.prototype.on = function on(eventType, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.addEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.off = function off(eventType, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.removeEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  DOM.prototype.forEach = function forEach(){
    return Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map(){
    return Array.prototype.map.apply( this.element, arguments );
  };

  DOM.prototype.filter = function filter(){
    return Array.prototype.filter.apply( this.element, arguments );
  };

  DOM.prototype.reduce = function reduce(){
    return Array.prototype.reduce.apply( this.element, arguments );
  };

  DOM.prototype.reduceRight = function reduceRight(){
    return Array.prototype.reduceRight.apply( this.element, arguments );
  };

  DOM.prototype.every = function every(){
    return Array.prototype.every.apply( this.element, arguments );
  };

  DOM.prototype.some = function some(){
    return Array.prototype.some.apply( this.element, arguments );
  };

  DOM.isChecks = function isChecks(param) {
    return Object.prototype.toString.call(param);
  };

  DOM.prototype.isArray = function isArray(param){
    return DOM.isChecks(param) === '[object Array]';
  };

  DOM.prototype.isObject = function isObject(param){
    return DOM.isChecks(param) === '[object Object]';
  };

  DOM.prototype.isFunction = function isFunction(param){
    return DOM.isChecks(param) === '[object Function]';
  };

  DOM.prototype.isNumber = function isNumber(param){
    return DOM.isChecks(param) === '[object Number]';
  };

  DOM.prototype.isString = function isString(param){
    return DOM.isChecks(param) === '[object String]';
  };

  DOM.prototype.isBoolean = function isBoolean(param){
    return DOM.isChecks(param) === '[object Boolean]';
  };

  DOM.prototype.isNull = function isNull(param){
    return DOM.isChecks(param) === '[object Null]' ||
      Object.prototype.toString.call(param) === '[object Undefined]';
  };

  // var dom = new DOM();
  // console.log(DOM.prototype.isArray([1, 2, 3])); ASSIM TAMBEM VAI FUNCIONAR
  // console.log(dom.isArray([1, 2, 3]));
  // console.log(dom.isObject({'person':'rubens','number':2}));
  // console.log(dom.isFunction(function (){}));
  // console.log(dom.isNumber(51));
  // console.log(dom.isString('Filipe'));
  // console.log(dom.isBoolean(false));
  // console.log(dom.isNull(null));
  // console.log(dom.isNull());

  // isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull

  var $a = new DOM('[data-js="link"]');
  console.log($a);
  $a.forEach(function(item){
    console.log(item.firstChild.nodeValue);
  });
  // var dataJs = $a.map(function(item){
  //   return item.getAttribute('data-js');
  // });

  // var dataJs = $a.reduce(function(acc, item, index){
  //   return acc + ' ' + item.getAttribute('data-js') + index;
  // }, 0);
  // console.log(dataJs);

})();
