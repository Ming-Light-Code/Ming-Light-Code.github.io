(function () {
  'use strict';

  if (!window.OML2D || typeof window.OML2D.loadOml2d !== 'function') {
    console.warn('Live2D component failed to load.');
    return;
  }

  window.OML2D.loadOml2d({
    dockedPosition: 'right',
    mobileDisplay: false,
    primaryColor: 'var(--btn-bg)',
    sayHello: false,
    models: [{
      path: 'https://cdn.jsdelivr.net/npm/live2d-widget-model-miku@1.0.5/assets/miku.model.json',
      position: [0, 0],
      scale: 0.12,
      stageStyle: {
        width: 260,
        height: 300
      }
    }]
  });
})();
