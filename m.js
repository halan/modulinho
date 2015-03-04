(function(){
  var
    modules = {},
    define = function(name, module){ modules[name] = module; },
    require = function(name){ return modules[name](); };
  window.M = { define: define, require: require };
})();
