var newWorldProject = {};

newWorldProject.randomEncounter = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

newWorldProject.zoneOne = [
  {
    name: 'bat1',
    src: '../images/bat1.png',
    health: 10,
    damageMin: 1,
    damageMax: 2
  },  
  {
    name: 'slug1',
    src: '../images/slug1.png',
    health: 10,
    damageMin: 1,
    damageMax: 2
  },  
  {
    name: 'wolf1',
    src: '../images/wolf1.png',
    health: 10,
    damageMin: 1,
    damageMax: 2
  },  
  {
    name: 'ghost1',
    src: '../images/ghost1.png',
    health: 10,
    damageMin: 1,
    damageMax: 2
  }
];

newWorldProject.combatWeapons = [
  {
    name: 'Fists of Destiny',
    src: '',
    damageMin: 0,
    damageMax: 2,
    cost: ''
  },
  {
    name: 'Wooden Sword',
    src: '../images/woodSword.png',
    damageMin: 1,
    damageMax: 3,
    cost: 10
  },
  {
    name: 'Iron Sword',
    src: '../images/ironSword.png',
    damageMin: 2,
    damageMax: 4,
    cost: 50
  },
  {
    name: 'Steel Sword',
    src: '../images/steelSword.png',
    damageMin: 3,
    damageMax: 6,
    cost: 500
  },
  {
    name: 'Roaas Sword',
    src: '../images/roaasSword',
    damageMin: 6,
    damageMax: 10,
    cost: ''
  },
  {
    name: 'Alien Sword',
    src: '../images/alienSword',
    damageMin: 10,
    damageMax: 15,
    cost: 5000
  },
  {
    name: 'Magmite Sword',
    src: '../images/magmiteSword',
    damageMin: 15,
    damageMax: 25,
    cost: ''
  }];
    
newWorldProject.monsterPositions = function(pos, zone) {
  var world = document.getElementById('world'),
      monster = zone[Math.floor(Math.random() * (zone.length - 1))],
      monsterElement = document.createElement('img'),
      innerCombat = document.getElementsByClassName('innerCombatBox')[0],
      combatLeftPos = parseInt(window.getComputedStyle(innerCombat).getPropertyValue('margin-left')),
      combatTopPos = parseInt(window.getComputedStyle(innerCombat).getPropertyValue('margin-top')),
      combatWidth = parseInt(window.getComputedStyle(innerCombat).getPropertyValue('width'));
  
  switch(pos) {
    case 'left':
      monsterElement.className = 'leftMonster'; 
      monsterElement.style['margin-left'] = combatLeftPos + (combatWidth - (200*3)) + 'px';
      break;
    case 'leftCenter':
      monsterElement.className = 'leftCenterMonster'; 
      monsterElement.style['margin-left'] = combatLeftPos + (combatWidth - (200*2.5)) + 'px';
      break;
    case 'center':
      monsterElement.className = 'centerMonster'; 
      monsterElement.style['margin-left'] = combatLeftPos + (combatWidth- (200*2)) + 'px';
      break;
    case 'rightCenter': 
      monsterElement.className = 'rightCenterMonster'; 
      monsterElement.style['margin-left'] = combatLeftPos + (combatWidth- (200*1.5)) + 'px';
      break;
    case 'right': 
      monsterElement.className = 'rightMonster'; 
      monsterElement.style['margin-left'] = combatLeftPos + (combatWidth- (200)) + 'px';
      break;
  }

  monsterElement.style['margin-top'] = combatTopPos + 40 + 'px';
  monsterElement.setAttribute('alt', monster.name);
  monsterElement.setAttribute('src', monster.src);
  world.appendChild(monsterElement);
};
    
newWorldProject.putMonstersOnScreen = function() {
  var numberOfMonsters = [1, 2, 3],
      randomNumberOfMonsters = Math.floor(Math.random() * numberOfMonsters.length + 1);
    
  switch(randomNumberOfMonsters) {
    case 1:
      newWorldProject.monsterPositions('center', newWorldProject.zoneOne);
      break;
    case 2:
      newWorldProject.monsterPositions('leftCenter', newWorldProject.zoneOne);
      newWorldProject.monsterPositions('rightCenter', newWorldProject.zoneOne);
      break;
    case 3:
      newWorldProject.monsterPositions('left', newWorldProject.zoneOne);
      newWorldProject.monsterPositions('center', newWorldProject.zoneOne);
      newWorldProject.monsterPositions('right', newWorldProject.zoneOne);
      break;
  }
};
    

//newWorldProject.moveObject = function() {
//  var objectVar = {};
//  
//  function mouseDown(e) {
//    objectVar.target = e.target,
//    objectVar.xPosition = e.clientX,
//    objectVar.yPosition = e.clientY,
//    objectVar.Style = window.getComputedStyle(objectVar.target, null);
//    objectVar.xTracker = parseInt(objectVar.Style.getPropertyValue('margin-left')),
//    objectVar.yTracker = parseInt(objectVar.Style.getPropertyValue('margin-top'));
//
//    if (objectVar.target.id === 'worldMap') {
//      document.addEventListener('mousemove', mouseMove);
//    }
//    
//    document.addEventListener('mouseup', function() {
//      document.removeEventListener('mousemove', mouseMove);
//    });
//  }
//
//  function mouseMove(e) {
//    objectVar.differenceX = objectVar.xTracker - objectVar.xPosition + e.clientX,
//    objectVar.differenceY = objectVar.yTracker - objectVar.yPosition + e.clientY;
//    
//    objectVar.target.style['margin-left'] = objectVar.differenceX + 'px';
//    objectVar.target.style['margin-top'] = objectVar.differenceY + 'px';
//  }
//  
//  document.addEventListener('mousedown', mouseDown);
//};

newWorldProject.movementKeys = function() {
  var hero = document.getElementById('hero'),
      stepCount = 0,
      arrayLength = 19,
      heroLeftPos,
      heroTopPos;
      
  document.addEventListener('keydown', function(e) {
    heroLeftPos = parseInt(window.getComputedStyle(hero).getPropertyValue('margin-left'));
    heroTopPos = parseInt(window.getComputedStyle(hero).getPropertyValue('margin-top'));
    
    switch(e.keyCode) {
      case 37: // left arrow
        hero.style['margin-left'] = (heroLeftPos - 16) + 'px';
        stepCount++;
        break;
      case 39: // right arrow
        hero.style['margin-left'] = (heroLeftPos + 16) + 'px';
        stepCount++;
        break;
      case 38: // up arrow        
        hero.style['margin-top'] = (heroTopPos - 16) + 'px';
        stepCount++;
        break;
      case 40: // down arrow
        hero.style['margin-top'] = (heroTopPos + 16) + 'px';
        stepCount++;
        break;
    }

    if (stepCount % 3 === 0) {
      if (newWorldProject.randomEncounter[Math.floor(Math.random() * arrayLength)] === 1) {
        newWorldProject.combatMenu();
        stepCount = 0;
        arrayLength = 19;
      }
      arrayLength--;
    }
  });
};

newWorldProject.combatMenu = function() {
  var world = document.getElementById('world'),
      hero = document.getElementById('hero'),
      battleDone = false,
      outerBox = document.createElement('div'),
      innerBox = document.createElement('img');

  outerBox.className = 'outerCombatBox';
  innerBox.className = 'innerCombatBox';
  innerBox.setAttribute('src', '../images/innerCombat.png');
  world.appendChild(outerBox);
  world.appendChild(innerBox);
      
  newWorldProject.putMonstersOnScreen();
  
  document.addEventListener('click', function() {
    world.removeChild(outerBox); 
    world.removeChild(innerBox); 
  });
};


window.addEventListener('load', function() {
  newWorldProject.movementKeys();
//  newWorldProject.moveObject();
});