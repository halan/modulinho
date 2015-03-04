(function(){
  var
    modules = {},
    resolve = function(deps){ return m[d].map(function(dep){ return require(dep); }));}
    define = function(name, deps, module){ modules[name] = {m: module, d: deps}; },
    require = function(name){ m = modules[name]; return m[m].apply(window, resolve(m[d])); };
  window.M = { define: define, require: require };
})();
