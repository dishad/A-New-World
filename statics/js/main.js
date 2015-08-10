var newWorldProject = {};

newWorldProject.moveObject = function() {
  var objectVar = {};
  
  function mouseDown(e) {
    objectVar.target = e.target,
    objectVar.xPosition = e.clientX,
    objectVar.yPosition = e.clientY,
    objectVar.Style = window.getComputedStyle(objectVar.target, null);
    objectVar.xTracker = parseInt(objectVar.Style.getPropertyValue('margin-left')),
    objectVar.yTracker = parseInt(objectVar.Style.getPropertyValue('margin-top'));

    if (objectVar.target.id === 'worldMap') {
      document.addEventListener('mousemove', mouseMove);
    }
    
    document.addEventListener('mouseup', function() {
      document.removeEventListener('mousemove', mouseMove);
    });
  }

  function mouseMove(e) {
    objectVar.differenceX = objectVar.xTracker - objectVar.xPosition + e.clientX,
    objectVar.differenceY = objectVar.yTracker - objectVar.yPosition + e.clientY;
    
    objectVar.target.style['margin-left'] = objectVar.differenceX + 'px';
    objectVar.target.style['margin-top'] = objectVar.differenceY + 'px';
  }
  
  document.addEventListener('mousedown', mouseDown);
};

window.addEventListener('load', function() {
  newWorldProject.moveObject();
});