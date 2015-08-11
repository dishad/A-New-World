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

newWorldProject.movementKeys = function() {
  var hero = document.getElementById('hero');
    
  document.addEventListener('keydown', function(e) {
    var heroLeftPos = parseInt(window.getComputedStyle(hero).getPropertyValue('margin-left')),
        heroTopPos = parseInt(window.getComputedStyle(hero).getPropertyValue('margin-top'));
    
    switch(e.keyCode) {
      case 37: // left arrow
        console.log('left');
        hero.style['margin-left'] = (heroLeftPos - 32) + 'px';
        break;
      case 39: // right arrow
        console.log('right');
        hero.style['margin-left'] = (heroLeftPos + 32) + 'px';
        break;
      case 38: // up arrow        
        console.log('up');
        hero.style['margin-top'] = (heroTopPos - 32) + 'px';
        break;
      case 40: // down arrow
        console.log('down');
        hero.style['margin-top'] = (heroTopPos + 32) + 'px';
        break;
    }
    
    console.log(heroLeftPos);
    console.log(heroTopPos);
  });
};

window.addEventListener('load', function() {
  newWorldProject.movementKeys();
  newWorldProject.moveObject();
});