(function(){
  var
    mds = {},
    def = function(name, deps, module){ mds[name] = {m: module, d: deps}; },
    req = function(name){ m = mds[name]; return $m[m].apply(window, m[d].map(function(dep){ return req(dep); })); };
  window.M = { define: def, require: req };
})();
