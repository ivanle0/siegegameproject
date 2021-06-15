Siege Game
initial pseudocode


variables

turnCount = 1

deck1
deck2
deck3
currentDeck = deck1

dayCount = 1

enemies = [{id: A, strength: 2, track: 4}, 
{id: B, strength: 3, track: 4}, 
{id: C, strength: 4, track: 4}]

enemyTrebuchetCount = 3;

player = {name: "Player 1", AP: 0, boilingWaterAttackCount: 0, wallCount: 4, 
moraleCount: 4, suppliesCount: 4, raidedSupplies: 0, tunnelTrack: 0} 

startGame() {
enemyLineCheck();
drawCard(currentDeck);
}

rollDice() {
x = 1
while (x < 20) {
rollDice()
x++
}

enemyLineCheck() {
//check if there are soldiers in enemy line
if (player.tunnelTrack === 4) {
let result = rollDice();
if result === 4 {
console.log("Your soldiers behind the enemy line are captured");
player.tunnelTrack = 0; // remove soldiers
player.raidedSupplies = 0; // remove their supplies if any
}

drawCard(currentDeck)
let currentEvent = currentDeck.shift();
if currentDeck.length < 1 nextDeck()


trebuchetAttack(enemyTrebuchetCount) {
if (enemyTrebuchetCount === 3) {
player.wallCount -= 2;
} else if (enemyTrebuchetCount === 2) {
player.wallCount -= 1;
} else if (enemyTrebuchetCount === 1) {
let result = rollDice();
if (result > 3) { 
player.wallCount -= 1
}
}


enemyMovement() {
if (currentDeck.enemymovement) {
enemyTrackX -= 1
if enemyTrackX === 0 player.moraleCount -= 1
if enemyTrackA && enemyTrackB && enemyTrackC === 0 endGame()


playerActionPhase() {
display action menu
add eventListeners to action menu
actionPointAllowance = currentDeck.AP
if 2 enemies tracks === 0 { Close Combat Attack is mandatory

1. Archers Attack()
2. Boiling Water Attack() if player.boilingOilAttackCount > 0 not available
                          if no enemies track === 0 not available

3. Close Combat Attack()
4. Repair Wall
5. Rally Troops (Before performing the
rallyTroops roll, you can reduce the supplies by 1 to
get a +1 DRM on the morale roll.)
6. Tunnel Movement
7. Supply Raid (The supply raid action can only be performed
when a unit is on the Enemy Lines space)
8. Sabotage (The sabotage action can only be performed
when a unit is on the Enemy Lines space)

if player.AP === 0 {
console.log(You may take one additional action in any turn
by spending a Morale or Supply point. DO you want to do this?)
//BUT NOTE ONLY SHOW THIS ONE TIME PER TURN



archersAttack(enemyID) {
result = rollDice()
if (result > enemyID.strength) { enemyID.track += 1
else console.log("Your archers attack failed)

boilingWaterAttack()
player.boilingwaterAttackCount += 1;
result = rollDice()
if (result > enemyID.strength) { enemyID.track += 1
else console.log("Your voiling water attack failed)

closeCombatAttack() {
let tempEnemyStrength = 4;
result = rollDice()
if result === 1 { player.moraleCount -= 1
console.log("You rolled a RESULT You lose 1 morale"

repairWall() {
result = rollDice()
if result > 4 { player.wallCount += 1
else console.log("Your attempts to repair the wall failed")

rallyTroops() {
result = rollDice()
if result > 4 { player.moraleCount += 1
else console.log("Your attempts to rally the troops failed")




supplyRaid() {
if player.raidedSupplies < 2 {
result = rollDice()
if result === 6 { player.raidedSupplies += 2
if result > 2 && result < 6 { player.raidedSupplies += 1
else console.log("Your attempt to raid supplies failed")
if result === 1 { troops captured
    console.log("Your attempt to raid supplies failed and your troops were captured")

 

endofTurnCheck() {
player.boilingOilAttackCount = 0 // reset
if 2 enemies tracks === 0 { endGame()
if wallCount === 0 OR moraleCount === 0 OR suppliesCount === 0 { endGame()
turnCount += 1;
If turnCount === 8 {
currentDeck = deckDay2
If turnCount === 16 {
currentDeck = deckDay3