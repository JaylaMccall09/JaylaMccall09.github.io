$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
     createPlatform(400, 700, 200, 10);
     createPlatform(150, 600, 200, 10);
     createPlatform(450, 500, 200, 10);
     createPlatform(900, 200, 5, 200);
     createPlatform(900, 400, 400, 5);
     createPlatform(600, 400, 150, 10);
     createPlatform(750, 300, 100, 10);
     createPlatform(1200, 250, 100, 10);
     createPlatform(1050, 200, 100, 10);
    



    // TODO 3 - Create Collectables
     



    
    // TODO 4 - Create Cannons
     createCannon("bottom", 140, 1500);
     createCannon("bottom", 440, 2500);
     createCannon("left", 255, 2000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
