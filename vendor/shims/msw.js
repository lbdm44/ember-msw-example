(function() {
  function vendorModule() {
    'use strict';

    return self['MockServiceWorker'];
  }

  define('msw', [], vendorModule);
})();
