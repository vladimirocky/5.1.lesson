"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Salad = function Salad() {
  _classCallCheck(this, Salad);
};

;

var SaladBuilder =
/*#__PURE__*/
function () {
  function SaladBuilder() {
    _classCallCheck(this, SaladBuilder);

    this.addSalad = new Salad();
  }

  _createClass(SaladBuilder, [{
    key: "addCherie",
    value: function addCherie(cherie) {
      this.addSalad.cherie = cherie;
      return this;
    }
  }, {
    key: "addChiken",
    value: function addChiken(chiken) {
      this.addSalad.chiken = chiken;
      return this;
    }
  }, {
    key: "addCrackers",
    value: function addCrackers(crackers) {
      this.addSalad.crackers = crackers;
      return this;
    }
  }, {
    key: "addCheese",
    value: function addCheese(cheese) {
      this.addSalad.cheese = cheese;
      return this;
    }
  }, {
    key: "addMayo",
    value: function addMayo(mayo) {
      this.addSalad.mayo = mayo;
      return this;
    }
  }, {
    key: "addMeat",
    value: function addMeat(meat) {
      this.addSalad.meat = meat;
      return this;
    }
  }, {
    key: "addPeas",
    value: function addPeas(peas) {
      this.addSalad.peas = peas;
      return this;
    }
  }, {
    key: "build",
    value: function build() {
      return this.addSalad;
    }
  }]);

  return SaladBuilder;
}();

;
var cezar = new SaladBuilder().addCherie(true).addChiken(true).addCheese(true).build();
console.log(cezar);
var oliver = new SaladBuilder().addMayo(true).addMeat(true).addPeas(true).build();
console.log(oliver);
//# sourceMappingURL=pattern.dev.js.map
