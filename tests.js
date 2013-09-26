var tests = [
  {
      expr: function() {
        return Value != void 0
      },
      label: "Value is defined"
  },
  {
      expr: function() {
        return Object.keys(Value()).length == 0;
      },
      label: "Value has no enumerable properties"
  },
  {
      expr: function() {
        return Value().value == 0
      },
      label: "By default value should be 0"
  },
  {
      expr: function() {
        var between0And1 = Value({max:1, value:Math.random()});
        return between0And1.value != void 0;
      },
      label: "property .value is defined"
  },
  {
      expr: function() {
        var between0And1 = Value({max:1, value:Math.random()});
        return between0And1.value>=0 && between0And1.value<=1;
      },
      label: "value between 0 and 1"
  },
  {
      expr: function() {
        var between0And1 = Value({max:1, value:Math.random()});
        try {
          between0And1.value = -1
        }
        catch(e) {
          return true
        }
        return false;
      },
      label: "Trying to set between0And1 to -1 throws an error"
  },
  {
      expr: function () {
        var between0And1 = Value({max:1, value:Math.random()});
        try {
          between0And1.value = 2
        }
        catch(e) {
          return true
        }
        return false;
      },
      label: "Trying to set between0And1 to 2 throws an error"
  },
  {
      expr: function() {
        var price = Value({max: 100, min: 1, value:50});
        return price.value === 50;
      },
      label: "value initializer works"
  },
  {
      expr: function() {
        var price = Value({max: 100, min: 1, value:50});
        price.value = 100;
        return price.value === 100;
      },
      label: "value can be set within bounds"
  },
  {
      expr: function() {
        var price = Value({max: 100, min: 1, value:50});
        try {
          price.value = 0;
        }
        catch(e) {
          return true
        }
        return false;
      },
      label: "value cannot be set below min"
  },
  {
      expr: function() {
        return Value({value:1}) + Value({value:2}) === 3 
      },
      label: "Value can be used in a number context"
  },
];