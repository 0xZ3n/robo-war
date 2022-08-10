var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10
};


// You can also log multiple values at once like this
console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]; console.log(enemyNames);
enemyHealth = Math.floor(Math.random() * 60);
var enemyAttack = 12;



// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
};


var fight = function(enemyName) {
      // repeat and execute as long as the enemy-robot is alive 
     
  while(playerInfo.health > 0 && enemyHealth > 0) {

     // Alert players that they are starting the round

    //window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //console.log(promptFight);
  
    // if player choses to fight, then fight
      if (promptFight === "fight" || promptFight === "FIGHT") {
          // remove enemy's health by subtracting the amount set in the playerAttack variable
          //generate random damage value based on player's attack power
          var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

          enemyHealth = Math.max(0, enemyHealth - damage);

          console.log(
            playerInfo.name + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
          );
      
          // check enemy's health
          if (enemyHealth <= 0) {
          window.alert(enemyName + " has died!");
          break;
          } else {
          window.alert(enemyName + " still has " + enemyHealth + " health left.");
          }
      
          // remove player's health by subtracting the amount set in the enemyAttack variable
          var damage = randomNumber(enemyAttack - 3, enemyAttack);
          
          playerInfo.health = Math.max(0, playerInfo.health - damage);
          console.log(
          enemyName + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
          );
      
          // check player's health
          if (playerInfo.health <= 0) {
          window.alert(playerInfo.name + " has died!");
          break;
          } else {
          window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
          }
          // if player choses to skip
      } else if (promptFight === "skip" || promptFight === "SKIP") {
          // confirm the player wants to skip
          var confirmSkip = window.confirm("Are you sure you want to quit?");
  
          //if yes (true), leave fight
          if(confirmSkip) {
              window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
              // subtract money from playerMoney for skipping
              playerInfo.money = Math.max(0, playerInfo.money - 10);
              console.log("playerMoney", playerInfo.money);
              break;
          } else {
              fight();
          }
  
      } else {
          window.alert("You need to choose a valid option. Try again!");
          fight();
      }
  }
};

//fight();

var startGame = function() {

    //reset player stats
    playerInfo.health = 100;
    playerInfo.attack = 10;
    playerInfo.money = 10;

    
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = randomNumber(40, 60);
            fight(pickedEnemyName);

            //if we're not at the last enemy in the array

            if (playerInfo.health > 0 && i < enemyNames.length - 1) {
                //Ask if player would like to use the store before the next round
                var storeConfirm = window.confirm("This is round over. Visit the store before the next round?");

                //if yes, take them to the store() function
                if(storeConfirm) {
                    shop();
                }
            }
        } else {
            window.alert('You have lost your robot in battle! Game Over!');
            break;
        }
        
    }

    endGame();

};


// function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    if (playerInfo.health > 0) {
        window.alert("Great job, you survived the game! You now have a score of " + playerInfo.money + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }

    //ask player if they would like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
  };



var shop = function() {
    console.log("Welcome to the shop.");
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE?"
    );
    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerInfo.money >= 7) {
              window.alert("Refilling player's health by 20 for 7 dollars.");
          
              // increase health and decrease money
              playerInfo.health = playerInfo.health + 20;
              playerInfo.money = playerInfo.money - 7;
            }
            else {
              window.alert("You don't have enough money!");
            }
          
            break;

          case "UPGRADE":  
          case "upgrade":
            if (playerInfo.money >= 7) {
              window.alert("Upgrading player's attack by 6 for 7 dollars.");
          
             // increase attack and decrease money
              playerInfo.attack = playerInfo.attack + 6;
              playerInfo.money = playerInfo.money - 7;
            }
            else {
              window.alert("You don't have enough money!");
            }
          
            break;

           case "LEAVE":
           case "leave":
            window.alert("Leaving the store.");
            break;

           default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
           
    }
};



startGame();
