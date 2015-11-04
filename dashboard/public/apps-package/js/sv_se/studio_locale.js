var studio_locale = {lc:{"ar":function(n){
  if (n === 0) {
    return 'zero';
  }
  if (n == 1) {
    return 'one';
  }
  if (n == 2) {
    return 'two';
  }
  if ((n % 100) >= 3 && (n % 100) <= 10 && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 99 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"en":function(n){return n===1?"one":"other"},"bg":function(n){return n===1?"one":"other"},"bn":function(n){return n===1?"one":"other"},"ca":function(n){return n===1?"one":"other"},"cs":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"da":function(n){return n===1?"one":"other"},"de":function(n){return n===1?"one":"other"},"el":function(n){return n===1?"one":"other"},"es":function(n){return n===1?"one":"other"},"et":function(n){return n===1?"one":"other"},"eu":function(n){return n===1?"one":"other"},"fa":function(n){return "other"},"fi":function(n){return n===1?"one":"other"},"fil":function(n){return n===0||n==1?"one":"other"},"fr":function(n){return Math.floor(n)===0||Math.floor(n)==1?"one":"other"},"ga":function(n){return n==1?"one":(n==2?"two":"other")},"gl":function(n){return n===1?"one":"other"},"he":function(n){return n===1?"one":"other"},"hi":function(n){return n===0||n==1?"one":"other"},"hr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"hu":function(n){return "other"},"id":function(n){return "other"},"is":function(n){
    return ((n%10) === 1 && (n%100) !== 11) ? 'one' : 'other';
  },"it":function(n){return n===1?"one":"other"},"ja":function(n){return "other"},"ko":function(n){return "other"},"lt":function(n){
  if ((n % 10) == 1 && ((n % 100) < 11 || (n % 100) > 19)) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 9 &&
      ((n % 100) < 11 || (n % 100) > 19) && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"lv":function(n){
  if (n === 0) {
    return 'zero';
  }
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  return 'other';
},"mk":function(n){return (n%10)==1&&n!=11?"one":"other"},"mr":function(n){return n===1?"one":"other"},"ms":function(n){return "other"},"mt":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || ((n % 100) >= 2 && (n % 100) <= 4 && n == Math.floor(n))) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 19 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"nl":function(n){return n===1?"one":"other"},"no":function(n){return n===1?"one":"other"},"pl":function(n){
  if (n == 1) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || n != 1 && (n % 10) == 1 ||
      ((n % 10) >= 5 && (n % 10) <= 9 || (n % 100) >= 12 && (n % 100) <= 14) &&
      n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"pt":function(n){return n===1?"one":"other"},"ro":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || n != 1 && (n % 100) >= 1 &&
      (n % 100) <= 19 && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"ru":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sk":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"sl":function(n){
  if ((n % 100) == 1) {
    return 'one';
  }
  if ((n % 100) == 2) {
    return 'two';
  }
  if ((n % 100) == 3 || (n % 100) == 4) {
    return 'few';
  }
  return 'other';
},"sq":function(n){return n===1?"one":"other"},"sr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sv":function(n){return n===1?"one":"other"},"ta":function(n){return n===1?"one":"other"},"th":function(n){return "other"},"tr":function(n){return n===1?"one":"other"},"uk":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"ur":function(n){return n===1?"one":"other"},"vi":function(n){return "other"},"zh":function(n){return "other"}},
c:function(d,k){if(!d)throw new Error("MessageFormat: Data required for '"+k+"'.")},
n:function(d,k,o){if(isNaN(d[k]))throw new Error("MessageFormat: '"+k+"' isn't a number.");return d[k]-(o||0)},
v:function(d,k){studio_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){studio_locale.c(d,k);return d[k] in p?p[d[k]]:(k=studio_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){studio_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).studio_locale = {
"actor":function(d){return "figur"},
"addCharacter":function(d){return "add a"},
"addCharacterTooltip":function(d){return "Lägga till en karaktär till scenen."},
"alienInvasion":function(d){return "Utomjordisk Invasion!"},
"backgroundBlack":function(d){return "svart"},
"backgroundCave":function(d){return "grotta"},
"backgroundCloudy":function(d){return "molnigt"},
"backgroundHardcourt":function(d){return "hardcourt"},
"backgroundNight":function(d){return "natt"},
"backgroundUnderwater":function(d){return "undervattens"},
"backgroundCity":function(d){return "stad"},
"backgroundDesert":function(d){return "öken"},
"backgroundRainbow":function(d){return "regnbåge"},
"backgroundSoccer":function(d){return "fotboll"},
"backgroundSpace":function(d){return "utrymme"},
"backgroundTennis":function(d){return "tennis"},
"backgroundWinter":function(d){return "vinter"},
"calloutPlaceCommandsHere":function(d){return "Place commands here"},
"calloutPlaceCommandsAtTop":function(d){return "Place commands to set up your game at the top"},
"calloutTypeCommandsHere":function(d){return "Type your commands here"},
"calloutCharactersMove":function(d){return "These new commands let you control how the characters move"},
"calloutPutCommandsTouchCharacter":function(d){return "Put a command here to have it happen when you touch a character"},
"calloutClickCategory":function(d){return "Click a category header to see commands in each category"},
"calloutTryOutNewCommands":function(d){return "Try out all the new commands you’ve unlocked"},
"catActions":function(d){return "Åtgärder"},
"catControl":function(d){return "loopar"},
"catEvents":function(d){return "Händelser"},
"catLogic":function(d){return "Logik"},
"catMath":function(d){return "Matte"},
"catProcedures":function(d){return "funktioner"},
"catText":function(d){return "text"},
"catVariables":function(d){return "variabler"},
"changeScoreTooltip":function(d){return "Öka eller minska poängantalet med ett poäng."},
"changeScoreTooltipK1":function(d){return "Öka poängantalet med ett poäng."},
"continue":function(d){return "Fortsätt"},
"decrementPlayerScore":function(d){return "ta bort ett poäng"},
"defaultSayText":function(d){return "skriv här"},
"dropletBlock_addCharacter_description":function(d){return "Lägga till en karaktär till scenen."},
"dropletBlock_addCharacter_param0":function(d){return "type"},
"dropletBlock_addCharacter_param0_description":function(d){return "The type of the character to be added ('random', 'man', 'pilot', 'pig', 'bird', 'mouse', 'roo', or 'spider')."},
"dropletBlock_changeScore_description":function(d){return "Öka eller minska poängantalet med ett poäng."},
"dropletBlock_changeScore_param0":function(d){return "poäng"},
"dropletBlock_changeScore_param0_description":function(d){return "The value to add to the score (negative values will reduce the score)."},
"dropletBlock_moveRight_description":function(d){return "Moves the character to the right."},
"dropletBlock_moveUp_description":function(d){return "Moves the character up."},
"dropletBlock_moveDown_description":function(d){return "Moves the character down."},
"dropletBlock_moveLeft_description":function(d){return "Moves the character left."},
"dropletBlock_moveSlow_description":function(d){return "Changes a set of characters to move slowly."},
"dropletBlock_moveSlow_param0":function(d){return "type"},
"dropletBlock_moveSlow_param0_description":function(d){return "The type of characters to be changed ('random', 'man', 'pilot', 'pig', 'bird', 'mouse', 'roo', or 'spider')."},
"dropletBlock_moveNormal_description":function(d){return "Changes a set of characters to move at a normal speed."},
"dropletBlock_moveNormal_param0":function(d){return "type"},
"dropletBlock_moveNormal_param0_description":function(d){return "The type of characters to be changed ('random', 'man', 'pilot', 'pig', 'bird', 'mouse', 'roo', or 'spider')."},
"dropletBlock_moveFast_description":function(d){return "Changes a set of characters to move quickly."},
"dropletBlock_moveFast_param0":function(d){return "type"},
"dropletBlock_moveFast_param0_description":function(d){return "The type of characters to be changed ('random', 'man', 'pilot', 'pig', 'bird', 'mouse', 'roo', or 'spider')."},
"dropletBlock_playSound_description":function(d){return "Spela upp det valda ljudet."},
"dropletBlock_playSound_param0":function(d){return "sound"},
"dropletBlock_playSound_param0_description":function(d){return "The name of the sound to play."},
"dropletBlock_setBackground_description":function(d){return "Ange bakgrundsbild"},
"dropletBlock_setBackground_param0":function(d){return "image"},
"dropletBlock_setBackground_param0_description":function(d){return "The name of the background theme ('background1', 'background2', or 'background3')."},
"dropletBlock_setBot_description":function(d){return "Changes the active bot."},
"dropletBlock_setBot_param0":function(d){return "image"},
"dropletBlock_setBot_param0_description":function(d){return "The name of the bot image ('random', 'bot1', or 'bot2')."},
"dropletBlock_setBotSpeed_description":function(d){return "Sets the bot speed."},
"dropletBlock_setBotSpeed_param0":function(d){return "hastighet"},
"dropletBlock_setBotSpeed_param0_description":function(d){return "The speed value ('random', 'slow', 'normal', or 'fast')."},
"dropletBlock_setSpriteEmotion_description":function(d){return "anger figurens stämning"},
"dropletBlock_setSpritePosition_description":function(d){return "Omedelbart flyttar en figur till den angivna platsen."},
"dropletBlock_setSpriteSpeed_description":function(d){return "Anger hastigheten på en figur"},
"dropletBlock_setSprite_description":function(d){return "Anger figurens bild"},
"dropletBlock_setSprite_param0":function(d){return "index"},
"dropletBlock_setSprite_param0_description":function(d){return "The index (starting at 0) indicating which actor should change."},
"dropletBlock_setSprite_param1":function(d){return "image"},
"dropletBlock_setSprite_param1_description":function(d){return "The name of the actor image."},
"dropletBlock_setToChase_description":function(d){return "Changes a set of characters to chase the bot."},
"dropletBlock_setToChase_param0":function(d){return "type"},
"dropletBlock_setToChase_param0_description":function(d){return "The type of characters to be changed ('random', 'man', 'pilot', 'pig', 'bird', 'mouse', 'roo', or 'spider')."},
"dropletBlock_setToFlee_description":function(d){return "Changes a set of characters to flee from the bot."},
"dropletBlock_setToFlee_param0":function(d){return "type"},
"dropletBlock_setToFlee_param0_description":function(d){return "The type of characters to be changed ('random', 'man', 'pilot', 'pig', 'bird', 'mouse', 'roo', or 'spider')."},
"dropletBlock_setToRoam_description":function(d){return "Changes a set of characters to roam freely."},
"dropletBlock_setToRoam_param0":function(d){return "type"},
"dropletBlock_setToRoam_param0_description":function(d){return "The type of characters to be changed ('random', 'man', 'pilot', 'pig', 'bird', 'mouse', 'roo', or 'spider')."},
"dropletBlock_setToStop_description":function(d){return "Changes a set of characters to stop moving."},
"dropletBlock_setToStop_param0":function(d){return "type"},
"dropletBlock_setToStop_param0_description":function(d){return "The type of characters to be changed ('random', 'man', 'pilot', 'pig', 'bird', 'mouse', 'roo', or 'spider')."},
"dropletBlock_setMap_description":function(d){return "Changes the map in the scene."},
"dropletBlock_setMap_param0":function(d){return "name"},
"dropletBlock_setMap_param0_description":function(d){return "The name of the map ('random', 'blank', 'circle', 'circle2', 'horizontal', 'grid', or 'blobs')."},
"dropletBlock_throw_description":function(d){return "Kastar en projektil från den angivna figuren."},
"dropletBlock_vanish_description":function(d){return "Låter figuren försvinna."},
"dropletBlock_whenDown_description":function(d){return "This function executes when the down button is pressed."},
"dropletBlock_whenLeft_description":function(d){return "This function executes when the left button is pressed."},
"dropletBlock_whenRight_description":function(d){return "This function executes when the right button is pressed."},
"dropletBlock_whenTouchCharacter_description":function(d){return "This function executes when the character touches any character."},
"dropletBlock_whenTouchObstacle_description":function(d){return "This function executes when the character touches any obstacle."},
"dropletBlock_whenTouchMan_description":function(d){return "This function executes when the character touches man characters."},
"dropletBlock_whenTouchPilot_description":function(d){return "This function executes when the character touches pilot characters."},
"dropletBlock_whenTouchPig_description":function(d){return "This function executes when the character touches pig characters."},
"dropletBlock_whenTouchBird_description":function(d){return "This function executes when the character touches bird characters."},
"dropletBlock_whenTouchMouse_description":function(d){return "This function executes when the character touches mouse characters."},
"dropletBlock_whenTouchRoo_description":function(d){return "This function executes when the character touches roo characters."},
"dropletBlock_whenTouchSpider_description":function(d){return "This function executes when the character touches spider characters."},
"dropletBlock_whenUp_description":function(d){return "This function executes when the up button is pressed."},
"emotion":function(d){return "humör"},
"finalLevel":function(d){return "Grattis! Du har löst det sista pusslet."},
"for":function(d){return "för"},
"hello":function(d){return "hej"},
"helloWorld":function(d){return "Hej Världen!"},
"incrementPlayerScore":function(d){return "poäng punkt"},
"itemBlueFireball":function(d){return "blått eldklot"},
"itemPurpleFireball":function(d){return "lila eldklot"},
"itemRedFireball":function(d){return "rött eldklot"},
"itemYellowHearts":function(d){return "gula hjärtan"},
"itemPurpleHearts":function(d){return "lila hjärtan"},
"itemRedHearts":function(d){return "röda hjärtan"},
"itemRandom":function(d){return "slumpad"},
"itemAnna":function(d){return "krok"},
"itemElsa":function(d){return "gnistra"},
"itemHiro":function(d){return "microbots"},
"itemBaymax":function(d){return "raket"},
"itemRapunzel":function(d){return "kastrull"},
"itemCherry":function(d){return "körsbär"},
"itemIce":function(d){return "is"},
"itemDuck":function(d){return "anka"},
"itemMan":function(d){return "man"},
"itemPilot":function(d){return "pilot"},
"itemPig":function(d){return "gris"},
"itemBird":function(d){return "fågel"},
"itemMouse":function(d){return "mus"},
"itemRoo":function(d){return "roo"},
"itemSpider":function(d){return "spindel"},
"makeProjectileDisappear":function(d){return "försvinna"},
"makeProjectileBounce":function(d){return "studsa"},
"makeProjectileBlueFireball":function(d){return "skapa ett blått eldklot"},
"makeProjectilePurpleFireball":function(d){return "skapa ett lila eldklot"},
"makeProjectileRedFireball":function(d){return "skapa ett rött eldklot"},
"makeProjectileYellowHearts":function(d){return "skapa gula hjärtan"},
"makeProjectilePurpleHearts":function(d){return "skapa lila hjärtan"},
"makeProjectileRedHearts":function(d){return "skapa röda hjärtan"},
"makeProjectileTooltip":function(d){return "Gör så att projektilen som just kolliderade försvinner eller studsar."},
"makeYourOwn":function(d){return "Gör din egen Play Lab App"},
"moveDirectionDown":function(d){return "ner"},
"moveDirectionLeft":function(d){return "vänster"},
"moveDirectionRight":function(d){return "höger"},
"moveDirectionUp":function(d){return "upp"},
"moveDirectionRandom":function(d){return "slumpad"},
"moveDistance25":function(d){return "25 pixlar"},
"moveDistance50":function(d){return "50 pixlar"},
"moveDistance100":function(d){return "100 pixlar"},
"moveDistance200":function(d){return "200 pixlar"},
"moveDistance400":function(d){return "400 pixlar"},
"moveDistancePixels":function(d){return "pixlar"},
"moveDistanceRandom":function(d){return "slumpade pixlar"},
"moveDistanceTooltip":function(d){return "Flytta en figur en specifik sträcka i angiven riktning."},
"moveSprite":function(d){return "flytta"},
"moveSpriteN":function(d){return "flytta spelkaraktären "+studio_locale.v(d,"spriteIndex")},
"toXY":function(d){return "x, y"},
"moveDown":function(d){return "flytta neråt"},
"moveDownTooltip":function(d){return "Flytta en spelkaraktär nedåt."},
"moveLeft":function(d){return "flytta vänster"},
"moveLeftTooltip":function(d){return "Flytta en spelkaraktär till vänster."},
"moveRight":function(d){return "flytta höger"},
"moveRightTooltip":function(d){return "Flytta en spelkaraktär till höger."},
"moveUp":function(d){return "flytta uppåt"},
"moveUpTooltip":function(d){return "Flytta en spelkaraktär uppåt."},
"moveTooltip":function(d){return "Flytta en spelkaraktär."},
"nextLevel":function(d){return "Grattis! Du har slutfört detta pusslet."},
"no":function(d){return "Nej"},
"numBlocksNeeded":function(d){return "Detta pusslet kan lösas med %1 block."},
"onEventTooltip":function(d){return "Utför kod som svar på den specifika händelsen."},
"ouchExclamation":function(d){return "Aj!"},
"playSoundCrunch":function(d){return "spela krossa ljud"},
"playSoundGoal1":function(d){return "spela mål 1 ljud"},
"playSoundGoal2":function(d){return "spela mål 2 ljud"},
"playSoundHit":function(d){return "spela träffljud"},
"playSoundLosePoint":function(d){return "spela förlora poäng ljud"},
"playSoundLosePoint2":function(d){return "spela förlora poäng 2 ljud"},
"playSoundRetro":function(d){return "spela retro-ljud"},
"playSoundRubber":function(d){return "spela gummi-ljud"},
"playSoundSlap":function(d){return "spela klappljud"},
"playSoundTooltip":function(d){return "Spela det valda ljudet."},
"playSoundWinPoint":function(d){return "spela ljudet för vinn-punkten"},
"playSoundWinPoint2":function(d){return "spela ljudet för vinn-punkt 2"},
"playSoundWood":function(d){return "spela träljud"},
"positionOutTopLeft":function(d){return "till ovanstående övre vänster position"},
"positionOutTopRight":function(d){return "till ovanstående övre höger position"},
"positionTopOutLeft":function(d){return "till övre ytter vänster position"},
"positionTopLeft":function(d){return "till övre vänster position"},
"positionTopCenter":function(d){return "till övre mitt position"},
"positionTopRight":function(d){return "till övre höger position"},
"positionTopOutRight":function(d){return "till övre ytter höger position"},
"positionMiddleLeft":function(d){return "till vänster om mitten position"},
"positionMiddleCenter":function(d){return "till mitt position"},
"positionMiddleRight":function(d){return "till höger om mitten position"},
"positionBottomOutLeft":function(d){return "till nedre ytter vänster position"},
"positionBottomLeft":function(d){return "till nedre vänster position"},
"positionBottomCenter":function(d){return "till nedre mitt position"},
"positionBottomRight":function(d){return "till nedre höger position"},
"positionBottomOutRight":function(d){return "till nedre ytter höger position"},
"positionOutBottomLeft":function(d){return "till nedanför botten vänster position"},
"positionOutBottomRight":function(d){return "till nedanför botten höger position"},
"positionRandom":function(d){return "till den slumpmässga positionen"},
"projectileBlueFireball":function(d){return "blått eldklot"},
"projectilePurpleFireball":function(d){return "lila eldklot"},
"projectileRedFireball":function(d){return "rött eldklot"},
"projectileYellowHearts":function(d){return "gula hjärtan"},
"projectilePurpleHearts":function(d){return "lila hjärtan"},
"projectileRedHearts":function(d){return "röda hjärtan"},
"projectileRandom":function(d){return "slumpad"},
"projectileAnna":function(d){return "krok"},
"projectileElsa":function(d){return "gnistra"},
"projectileHiro":function(d){return "Hiro"},
"projectileBaymax":function(d){return "raket"},
"projectileRapunzel":function(d){return "kastrull"},
"projectileCherry":function(d){return "körsbär"},
"projectileIce":function(d){return "is"},
"projectileDuck":function(d){return "anka"},
"reinfFeedbackMsg":function(d){return "Du kan trycka på knappen \"Fortsätt spela\" för att gå tillbaka och spela din berättelse."},
"repeatForever":function(d){return "upprepa för evigt"},
"repeatDo":function(d){return "gör"},
"repeatForeverTooltip":function(d){return "Utför åtgärder i detta block upprepade gånger medan historien är igång."},
"saySprite":function(d){return "säg"},
"saySpriteN":function(d){return "figur "+studio_locale.v(d,"spriteIndex")+" säger"},
"saySpriteTooltip":function(d){return "Låter en pratbubbla dyka upp med texten från den angivna figuren."},
"saySpriteChoices_0":function(d){return "Hejsan."},
"saySpriteChoices_1":function(d){return "Hej allihop."},
"saySpriteChoices_2":function(d){return "Hur mår du?"},
"saySpriteChoices_3":function(d){return "God morgon"},
"saySpriteChoices_4":function(d){return "God eftermiddag"},
"saySpriteChoices_5":function(d){return "God natt"},
"saySpriteChoices_6":function(d){return "God kväll"},
"saySpriteChoices_7":function(d){return "Vad är det senaste?"},
"saySpriteChoices_8":function(d){return "Vad?"},
"saySpriteChoices_9":function(d){return "Var?"},
"saySpriteChoices_10":function(d){return "När?"},
"saySpriteChoices_11":function(d){return "Bra."},
"saySpriteChoices_12":function(d){return "Utmärkt!"},
"saySpriteChoices_13":function(d){return "Ok."},
"saySpriteChoices_14":function(d){return "Inte illa."},
"saySpriteChoices_15":function(d){return "Lycka till."},
"saySpriteChoices_16":function(d){return "Ja"},
"saySpriteChoices_17":function(d){return "Nej"},
"saySpriteChoices_18":function(d){return "Okej"},
"saySpriteChoices_19":function(d){return "Bra kast!"},
"saySpriteChoices_20":function(d){return "Ha en trevlig dag."},
"saySpriteChoices_21":function(d){return "Hej då."},
"saySpriteChoices_22":function(d){return "Jag kommer snart tillbaka."},
"saySpriteChoices_23":function(d){return "Vi ses i morgon!"},
"saySpriteChoices_24":function(d){return "Vi ses senare!"},
"saySpriteChoices_25":function(d){return "Ta hand om dig!"},
"saySpriteChoices_26":function(d){return "Ha kul!"},
"saySpriteChoices_27":function(d){return "Jag måste gå."},
"saySpriteChoices_28":function(d){return "Ska vi bli vänner?"},
"saySpriteChoices_29":function(d){return "Bra jobbat!"},
"saySpriteChoices_30":function(d){return "Woo hoo!"},
"saySpriteChoices_31":function(d){return "Yay!"},
"saySpriteChoices_32":function(d){return "Trevligt att träffas."},
"saySpriteChoices_33":function(d){return "Ok!"},
"saySpriteChoices_34":function(d){return "Tack"},
"saySpriteChoices_35":function(d){return "Nej, tack"},
"saySpriteChoices_36":function(d){return "Ååååååh!"},
"saySpriteChoices_37":function(d){return "Glöm det"},
"saySpriteChoices_38":function(d){return "I dag"},
"saySpriteChoices_39":function(d){return "Imorgon"},
"saySpriteChoices_40":function(d){return "Igår"},
"saySpriteChoices_41":function(d){return "Jag hittade dig!"},
"saySpriteChoices_42":function(d){return "Du hittade mig!"},
"saySpriteChoices_43":function(d){return "10, 9, 8, 7, 6, 5, 4, 3, 2, 1!"},
"saySpriteChoices_44":function(d){return "Du är bra!"},
"saySpriteChoices_45":function(d){return "Du är rolig!"},
"saySpriteChoices_46":function(d){return "Du är dum! "},
"saySpriteChoices_47":function(d){return "Du är en god vän!"},
"saySpriteChoices_48":function(d){return "Se upp!"},
"saySpriteChoices_49":function(d){return "Ducka!"},
"saySpriteChoices_50":function(d){return "Fick dig!"},
"saySpriteChoices_51":function(d){return "Aj!"},
"saySpriteChoices_52":function(d){return "Ledsen!"},
"saySpriteChoices_53":function(d){return "Försiktigt!"},
"saySpriteChoices_54":function(d){return "Oj!"},
"saySpriteChoices_55":function(d){return "Hoppsan!"},
"saySpriteChoices_56":function(d){return "Du fick mig nästan!"},
"saySpriteChoices_57":function(d){return "Bra försök!"},
"saySpriteChoices_58":function(d){return "Du kan inte fånga mig!"},
"scoreText":function(d){return "Poäng: "+studio_locale.v(d,"playerScore")},
"setActivityRandom":function(d){return "set activity to random for"},
"setActivityRoam":function(d){return "set activity to roam for"},
"setActivityChase":function(d){return "set activity to chase for"},
"setActivityFlee":function(d){return "set activity to flee for"},
"setActivityNone":function(d){return "set activity to none for"},
"setActivityTooltip":function(d){return "Sets the activity for a set of items"},
"setBackground":function(d){return "sätt bakgrund"},
"setBackgroundRandom":function(d){return "Ange slumpmässig bakgrund"},
"setBackgroundBlack":function(d){return "Ange svart bakgrund"},
"setBackgroundCave":function(d){return "Ange grott- bakgrund"},
"setBackgroundCloudy":function(d){return "Ange molnig bakgrund"},
"setBackgroundHardcourt":function(d){return "Ange hardcourt bakgrund"},
"setBackgroundNight":function(d){return "Ange natt -bakgrund"},
"setBackgroundUnderwater":function(d){return "Ange undervattens-bakgrund"},
"setBackgroundCity":function(d){return "Ange stads- bakgrund"},
"setBackgroundDesert":function(d){return "Ange öken- bakgrund"},
"setBackgroundRainbow":function(d){return "Ange regnbågs-bakgrund"},
"setBackgroundSoccer":function(d){return "Ange fotbolls- bakgrund"},
"setBackgroundSpace":function(d){return "Ange rymd-bakgrund"},
"setBackgroundTennis":function(d){return "Ange tennis- bakgrund"},
"setBackgroundWinter":function(d){return "Ange  vinter- bakgrund"},
"setBackgroundLeafy":function(d){return "Ange lummig bakgrund"},
"setBackgroundGrassy":function(d){return "Ange gräs bakgrund"},
"setBackgroundFlower":function(d){return "Ange blombakgrund"},
"setBackgroundTile":function(d){return "Ange rutad bakgrund"},
"setBackgroundIcy":function(d){return "Ange isbakgrund"},
"setBackgroundSnowy":function(d){return "Sätt snöbakgrund"},
"setBackgroundForest":function(d){return "set forest background"},
"setBackgroundSnow":function(d){return "set snow background"},
"setBackgroundShip":function(d){return "set ship background"},
"setBackgroundTooltip":function(d){return "Ange bakgrundsbild"},
"setEnemySpeed":function(d){return "Ange fiendens hastighet"},
"setItemSpeedSet":function(d){return "set type"},
"setItemSpeedTooltip":function(d){return "Sets the speed for a set of items"},
"setPlayerSpeed":function(d){return "Ange spelarens hastighet"},
"setScoreText":function(d){return "anger poäng"},
"setScoreTextTooltip":function(d){return "Anger texten som ska visas i området poäng."},
"setSpriteEmotionAngry":function(d){return "till  argt humör"},
"setSpriteEmotionHappy":function(d){return "till glad stämning"},
"setSpriteEmotionNormal":function(d){return "till normal stämning"},
"setSpriteEmotionRandom":function(d){return "till slumpmässig stämning"},
"setSpriteEmotionSad":function(d){return "till ledsam stämning"},
"setSpriteEmotionTooltip":function(d){return "anger figurens stämning"},
"setSpriteAlien":function(d){return "till en utomjordings- bild"},
"setSpriteBat":function(d){return "i en fladdermus-bild"},
"setSpriteBird":function(d){return "till en fågel bild"},
"setSpriteCat":function(d){return "till en katt-bild"},
"setSpriteCaveBoy":function(d){return "till en grottpojke- bild"},
"setSpriteCaveGirl":function(d){return "till en grottflicka- bild"},
"setSpriteDinosaur":function(d){return "till en dinosaurie-bild"},
"setSpriteDog":function(d){return "att en hund bild"},
"setSpriteDragon":function(d){return "till en drakbild"},
"setSpriteGhost":function(d){return "till en spök-bild"},
"setSpriteHidden":function(d){return "till en dold bild"},
"setSpriteHideK1":function(d){return "göm"},
"setSpriteAnna":function(d){return "till en Anna bild"},
"setSpriteElsa":function(d){return "till en Elsa bild"},
"setSpriteHiro":function(d){return "till en Hiro bild"},
"setSpriteBaymax":function(d){return "till en Baymax bild"},
"setSpriteRapunzel":function(d){return "till en Rapunzel bild"},
"setSpriteKnight":function(d){return "till en riddar- bild"},
"setSpriteMonster":function(d){return "till en monster-bild"},
"setSpriteNinja":function(d){return "till en maskerad ninja bild"},
"setSpriteOctopus":function(d){return "till en bläckfisk- bild"},
"setSpritePenguin":function(d){return "till en pingvin -bild"},
"setSpritePirate":function(d){return "till en pirat-bild"},
"setSpritePrincess":function(d){return "till en prinsess-bild"},
"setSpriteRandom":function(d){return "till en slumpmässig bild"},
"setSpriteRobot":function(d){return "till en robotbild"},
"setSpriteShowK1":function(d){return "visa"},
"setSpriteSpacebot":function(d){return "till en rymdrobot-bild"},
"setSpriteSoccerGirl":function(d){return "till en fotbollsflicka -bild"},
"setSpriteSoccerBoy":function(d){return "till en fotbollspojke-bild"},
"setSpriteSquirrel":function(d){return "till en ekorr-bild"},
"setSpriteTennisGirl":function(d){return "till en tennisflicka- bild"},
"setSpriteTennisBoy":function(d){return "till en tennispojke- bild"},
"setSpriteUnicorn":function(d){return "till en enhörning-bild"},
"setSpriteWitch":function(d){return "till en häx-bild"},
"setSpriteWizard":function(d){return "till en trollkarls-bild"},
"setSpritePositionTooltip":function(d){return "Omedelbart flyttar en figur till den angivna platsen."},
"setSpriteK1Tooltip":function(d){return "Visar eller döljer angiven figur."},
"setSpriteTooltip":function(d){return "Anger figurens bild"},
"setSpriteSizeRandom":function(d){return "till en slumpmässig storlek"},
"setSpriteSizeVerySmall":function(d){return "till en mycket liten storlek"},
"setSpriteSizeSmall":function(d){return "till en liten storlek"},
"setSpriteSizeNormal":function(d){return "till en normal storlek"},
"setSpriteSizeLarge":function(d){return "till en stor storlek"},
"setSpriteSizeVeryLarge":function(d){return "till en mycket stor storlek"},
"setSpriteSizeTooltip":function(d){return "Anger storleken på en figur"},
"setSpriteSpeedRandom":function(d){return "till en slumpad hastighet"},
"setSpriteSpeedVerySlow":function(d){return "till en mycket långsam hastighet"},
"setSpriteSpeedSlow":function(d){return "till en långsam hastighet"},
"setSpriteSpeedNormal":function(d){return "till en normal hastighet"},
"setSpriteSpeedFast":function(d){return "till en snabb hastighet"},
"setSpriteSpeedVeryFast":function(d){return "till en mycket snabb hastighet"},
"setSpriteSpeedTooltip":function(d){return "Anger hastigheten på en figur"},
"setSpriteZombie":function(d){return "till en zombie-bild"},
"setSpriteBot1":function(d){return "to bot1"},
"setSpriteBot2":function(d){return "to bot2"},
"setMap":function(d){return "set map"},
"setMapRandom":function(d){return "set random map"},
"setMapBlank":function(d){return "set blank map"},
"setMapCircle":function(d){return "set circle map"},
"setMapCircle2":function(d){return "set circle2 map"},
"setMapHorizontal":function(d){return "set horizontal map"},
"setMapGrid":function(d){return "set grid map"},
"setMapBlobs":function(d){return "set blobs map"},
"setMapTooltip":function(d){return "Changes the map in the scene"},
"shareStudioTwitter":function(d){return "Kolla in  berättelsen som jag har gjort. Jag skrev den själv med @codeorg"},
"shareGame":function(d){return "Dela din berättelse:"},
"showCoordinates":function(d){return "Visa koordinater"},
"showCoordinatesTooltip":function(d){return "Visa huvudpersonens koordinater på skärmen"},
"showTitleScreen":function(d){return "Visa titelskärmen"},
"showTitleScreenTitle":function(d){return "titel"},
"showTitleScreenText":function(d){return "text"},
"showTSDefTitle":function(d){return "skriv titelnhär"},
"showTSDefText":function(d){return "Skriv text här"},
"showTitleScreenTooltip":function(d){return "Visa en titelskärm med tillhörande rubrik och text."},
"size":function(d){return "storlek"},
"setSprite":function(d){return "Välj"},
"setSpriteN":function(d){return "ange figur "+studio_locale.v(d,"spriteIndex")},
"soundCrunch":function(d){return "krasch"},
"soundGoal1":function(d){return "mål 1"},
"soundGoal2":function(d){return "mål 2"},
"soundHit":function(d){return "träff"},
"soundLosePoint":function(d){return "förlora punkt"},
"soundLosePoint2":function(d){return "förlora punkt 2"},
"soundRetro":function(d){return "retro"},
"soundRubber":function(d){return "gummi"},
"soundSlap":function(d){return "slå"},
"soundWinPoint":function(d){return "vinna punkt"},
"soundWinPoint2":function(d){return "vinna punkt 2"},
"soundWood":function(d){return "trä"},
"speed":function(d){return "hastighet"},
"startSetValue":function(d){return "Start (funktion)"},
"startSetVars":function(d){return "game_vars (titel, undertitel, bakgrund, mål, fara, spelare)"},
"startSetFuncs":function(d){return "game_funcs (uppdatera-målet, updatera-fara, updatera-spelare, kolliderar?, på skärmen?)"},
"stopSprite":function(d){return "stanna"},
"stopSpriteN":function(d){return "stoppa figur "+studio_locale.v(d,"spriteIndex")},
"stopTooltip":function(d){return "Stoppar en figurs rörelse."},
"throwSprite":function(d){return "kasta"},
"throwSpriteN":function(d){return "figur"+studio_locale.v(d,"spriteIndex")+" kasta"},
"throwTooltip":function(d){return "Kastar en projektil från den angivna figuren."},
"vanish":function(d){return "försvinna"},
"vanishActorN":function(d){return "figur försvinner "+studio_locale.v(d,"spriteIndex")},
"vanishTooltip":function(d){return "Låter figuren försvinna."},
"waitFor":function(d){return "vänta i"},
"waitSeconds":function(d){return "sekunder"},
"waitForClick":function(d){return "vänta på klick"},
"waitForRandom":function(d){return "vänta i slumpmässig tidsperiod"},
"waitForHalfSecond":function(d){return "vänta en halv sekund"},
"waitFor1Second":function(d){return "vänta i 1 sekund"},
"waitFor2Seconds":function(d){return "vänta 2 sekunder"},
"waitFor5Seconds":function(d){return "vänta i 5 sekunder"},
"waitFor10Seconds":function(d){return "vänta i 10 sekunder"},
"waitParamsTooltip":function(d){return "Vänta i ett angivet antal sekunder eller använd noll för att vänta tills ett klick sker."},
"waitTooltip":function(d){return "Vänta i en viss tid eller tills ett klick sker."},
"whenArrowDown":function(d){return "pil ner"},
"whenArrowLeft":function(d){return "vänster pil"},
"whenArrowRight":function(d){return "höger pil"},
"whenArrowUp":function(d){return "pil upp"},
"whenArrowTooltip":function(d){return "Utför åtgärderna nedan när den angivna piltangenten trycks."},
"whenDown":function(d){return "när pil nedåt"},
"whenDownTooltip":function(d){return "Utföra åtgärderna nedan när NEDPIL trycks."},
"whenGameStarts":function(d){return "När berättelsen börjar"},
"whenGameStartsTooltip":function(d){return "Utför åtgärderna nedan när berättelsen börjar."},
"whenLeft":function(d){return "när pil vänster"},
"whenLeftTooltip":function(d){return "Utföra åtgärderna nedan när du trycker på VÄNSTERPIL."},
"whenRight":function(d){return "när pil höger"},
"whenRightTooltip":function(d){return "Utföra åtgärderna nedan när du trycker på HÖGERPIL."},
"whenSpriteClicked":function(d){return "När figuren klickas"},
"whenSpriteClickedN":function(d){return "När figuren"+studio_locale.v(d,"spriteIndex")+" klickas"},
"whenSpriteClickedTooltip":function(d){return "Utför åtgärderna nedan när en figur klickas."},
"whenSpriteCollidedN":function(d){return "När figur "+studio_locale.v(d,"spriteIndex")},
"whenSpriteCollidedTooltip":function(d){return "Utför åtgärderna nedan när en figur vidrör en annan figur."},
"whenSpriteCollidedWith":function(d){return "berör"},
"whenSpriteCollidedWithAnyActor":function(d){return "berör vilken figur som helst"},
"whenSpriteCollidedWithAnyEdge":function(d){return "berör vilken kant som helst"},
"whenSpriteCollidedWithAnyProjectile":function(d){return "berör vilken projektil som helst"},
"whenSpriteCollidedWithAnything":function(d){return "vidrör något"},
"whenSpriteCollidedWithN":function(d){return "berör figur "+studio_locale.v(d,"spriteIndex")},
"whenSpriteCollidedWithBlueFireball":function(d){return "berör blå eldboll"},
"whenSpriteCollidedWithPurpleFireball":function(d){return "berör lila eldboll"},
"whenSpriteCollidedWithRedFireball":function(d){return "berör röd eldboll"},
"whenSpriteCollidedWithYellowHearts":function(d){return "berör gula hjärtan"},
"whenSpriteCollidedWithPurpleHearts":function(d){return "berör lila hjärtan"},
"whenSpriteCollidedWithRedHearts":function(d){return "berör röda hjärtan"},
"whenSpriteCollidedWithBottomEdge":function(d){return "berör nedre kant"},
"whenSpriteCollidedWithLeftEdge":function(d){return "berör vänster kant"},
"whenSpriteCollidedWithRightEdge":function(d){return "berör höger kant"},
"whenSpriteCollidedWithTopEdge":function(d){return "berör översta kanten"},
"whenTouchItem":function(d){return "when character touched"},
"whenTouchItemTooltip":function(d){return "Execute the actions below when the actor touches a character."},
"whenTouchWall":function(d){return "when obstacle touched"},
"whenTouchWallTooltip":function(d){return "Execute the actions below when the actor touches an obstacle."},
"whenUp":function(d){return "när pil upp"},
"whenUpTooltip":function(d){return "Utför handlingarna nedan när pil-upptangenten trycks ner."},
"yes":function(d){return "Ja"},
"failedHasSetSprite":function(d){return "Next time, set a character."},
"failedHasSetBotSpeed":function(d){return "Next time, set a bot speed."},
"failedTouchAllItems":function(d){return "Next time, get all the items."},
"failedScoreMinimum":function(d){return "Next time, reach the minimum score."},
"failedRemovedItemCount":function(d){return "Next time, get the right number of items."},
"failedSetActivity":function(d){return "Next time, set the correct character activity."},
"addPoints10":function(d){return "add 10 points"},
"addPoints50":function(d){return "add 50 points"},
"addPoints100":function(d){return "add 100 points"},
"addPoints400":function(d){return "add 400 points"},
"addPoints1000":function(d){return "add 1000 points"},
"addPointsTooltip":function(d){return "Add points to the score."},
"calloutPutCommandsHereRunStart":function(d){return "Put commands here to have them run when the program starts"},
"calloutClickEvents":function(d){return "Click on the events header to see event function blocks."},
"calloutUseArrowButtons":function(d){return "Hold down these buttons or the arrow keys on your keyboard to trigger the move events"},
"calloutUseArrowButtonsAutoSteer":function(d){return "You can still use these buttons or the arrow keys on your keyboard to move"},
"calloutMoveRightRunButton":function(d){return "Add a second moveRight command to your code and then click here to run it"},
"calloutShowCodeToggle":function(d){return "Click here to switch between block and text mode"},
"calloutShowPlaceGoUpHere":function(d){return "Place goUp command here to move up"},
"calloutShowPlaySound":function(d){return "It's your game, so you choose the sounds now. Try the dropdown to pick a different sound"},
"calloutInstructions":function(d){return "Don't know what to do? Click the instructions to see them again"},
"calloutPlaceTwo":function(d){return "Can you make two MOUSEs appear when you get one MOUSE?"},
"calloutPlaceTwoWhenBird":function(d){return "Can you make two MOUSEs appear when you get a BIRD?"},
"calloutSetMapAndSpeed":function(d){return "Set the map and your speed."},
"calloutFinishButton":function(d){return "Click here when you are ready to share your game."},
"tapOrClickToPlay":function(d){return "Tap or click to play"},
"tapOrClickToReset":function(d){return "Tap or click to reset"},
"dropletBlock_addPoints_description":function(d){return "Add points to the score."},
"dropletBlock_addPoints_param0":function(d){return "score"},
"dropletBlock_addPoints_param0_description":function(d){return "The value to add to the score."},
"dropletBlock_removePoints_description":function(d){return "Remove points from the score."},
"dropletBlock_removePoints_param0":function(d){return "score"},
"dropletBlock_removePoints_param0_description":function(d){return "The value to remove from the score."},
"dropletBlock_endGame_description":function(d){return "End the game."},
"dropletBlock_endGame_param0":function(d){return "type"},
"dropletBlock_endGame_param0_description":function(d){return "Whether the game was won or lost ('win', 'lose')."},
"dropletBlock_whenGetCharacter_description":function(d){return "This function executes when the character gets any character."},
"dropletBlock_whenGetMan_description":function(d){return "This function executes when the character gets man characters."},
"dropletBlock_whenGetPilot_description":function(d){return "This function executes when the character gets pilot characters."},
"dropletBlock_whenGetPig_description":function(d){return "This function executes when the character gets pig characters."},
"dropletBlock_whenGetBird_description":function(d){return "This function executes when the character gets bird characters."},
"dropletBlock_whenGetMouse_description":function(d){return "This function executes when the character gets mouse characters."},
"dropletBlock_whenGetRoo_description":function(d){return "This function executes when the character gets roo characters."},
"dropletBlock_whenGetSpider_description":function(d){return "This function executes when the character gets spider characters."},
"hoc2015_lastLevel_continueText":function(d){return "Done"},
"hoc2015_reinfFeedbackMsg":function(d){return "You can press the \""+studio_locale.v(d,"backButton")+"\" button to go back to playing your game."},
"hoc2015_shareGame":function(d){return "Share your game:"},
"iceAge":function(d){return "Ice Age!"},
"itemIAProjectile1":function(d){return "hearts"},
"itemIAProjectile2":function(d){return "boulder"},
"itemIAProjectile3":function(d){return "ice cube"},
"itemIAProjectile4":function(d){return "snowflake"},
"itemIAProjectile5":function(d){return "ice crystal"},
"loseMessage":function(d){return "You lose!"},
"projectileIAProjectile1":function(d){return "hearts"},
"projectileIAProjectile2":function(d){return "boulder"},
"projectileIAProjectile3":function(d){return "ice cube"},
"projectileIAProjectile4":function(d){return "snowflake"},
"projectileIAProjectile5":function(d){return "ice crystal"},
"removePoints10":function(d){return "remove 10 points"},
"removePoints50":function(d){return "remove 50 points"},
"removePoints100":function(d){return "remove 100 points"},
"removePoints400":function(d){return "remove 400 points"},
"removePoints1000":function(d){return "remove 1000 points"},
"removePointsTooltip":function(d){return "Remove points from the score."},
"setSpriteManny":function(d){return "to a Manny image"},
"setSpriteSid":function(d){return "to a Sid image"},
"setSpriteGranny":function(d){return "to a Granny image"},
"setSpriteDiego":function(d){return "to a Diego image"},
"setSpriteScrat":function(d){return "to a Scrat image"},
"whenGetCharacterPIG":function(d){return "when get PIG"},
"whenGetCharacterMAN":function(d){return "when get MAN"},
"whenGetCharacterROO":function(d){return "when get ROO"},
"whenGetCharacterBIRD":function(d){return "when get BIRD"},
"whenGetCharacterSPIDER":function(d){return "when get SPIDER"},
"whenGetCharacterMOUSE":function(d){return "when get MOUSE"},
"whenGetCharacterPILOT":function(d){return "when get PILOT"},
"whenGetCharacterTooltip":function(d){return "Execute the actions below when an actor gets the specified type of character."},
"whenTouchCharacter":function(d){return "when character touched"},
"whenTouchCharacterTooltip":function(d){return "Execute the actions below when the actor touches a character."},
"whenTouchObstacle":function(d){return "when obstacle touched"},
"whenTouchObstacleTooltip":function(d){return "Execute the actions below when the actor touches an obstacle."},
"whenTouchGoal":function(d){return "when goal touched"},
"whenTouchGoalTooltip":function(d){return "Execute the actions below when the actor touches a goal."},
"winMessage":function(d){return "You win!"},
"failedHasSetBackground":function(d){return "Next time, set the background."},
"failedHasSetMap":function(d){return "Next time, set the map."},
"failedHasWonGame":function(d){return "Next time, win the game."},
"failedHasLostGame":function(d){return "Next time, lose the game"},
"failedAddItem":function(d){return "Next time, add a character."},
"failedAvoidHazard":function(d){return "\"Uh oh, a GUY got you!  Try again.\""},
"failedHasAllGoals":function(d){return "\"Try again, BOTX.  You can get it.\""},
"successHasAllGoals":function(d){return "\"You did it, BOTX!\""},
"successCharacter1":function(d){return "\"Well done, BOT1!\""},
"successGenericCharacter":function(d){return "\"Congratulations.  You did it!\""},
"failedTwoItemsTimeout":function(d){return "You need to get the pilots before time runs out. To move, put the goUp and goDown commands inside the whenUp and whenDown functions. Then, press and hold the arrow keys on your keyboard (or screen) to move quickly."},
"failedFourItemsTimeout":function(d){return "To pass this level, you'll need to put goLeft, goRight, goUp and goDown into the right functions. If your code looks correct, but you can't get there fast enough, try pressing and holding the arrow keys on your keyboard (or screen)."},
"failedScoreTimeout":function(d){return "Try to reach all the pilots before time runs out. To move faster, press and hold the arrow keys on your keyboard (or screen)."},
"failedScoreScore":function(d){return "You got the pilots, but you still don't have enough points to pass the level. Use the addPoints command to add 100 points when you get a pilot."},
"failedScoreGoals":function(d){return "You used the addPoints command, but not in the right place. Can you put it inside the whenGetPilot function so BOT1 can't get points until he gets a pilot?"},
"failedWinLoseTimeout":function(d){return "Try to reach all the pilots before time runs out. To move faster, press and hold the arrow keys on your keyboard (or screen)."},
"failedWinLoseScore":function(d){return "You got the pilots, but you still don't have enough points to pass the level. Use the addPoints command to add 100 points when you get a pilot. Use removePoints to subtract 100 when you touch a MAN. Avoid the MANs!"},
"failedWinLoseGoals":function(d){return "You used the addPoints command, but not in the right place. Can you make it so that the command is only called when you get the pilot? Also, remove points when you touch the MAN."},
"failedAddCharactersTimeout":function(d){return "Use three addCharacter commands at the top of your program to add PIGs when you hit run. Now go get them."},
"failedChainCharactersTimeout":function(d){return "You need to get 20 MOUSEs. They move fast. Try pressing and holding the keys on your keyboard (or screen) to chase them."},
"failedChainCharactersScore":function(d){return "You got the MOUSEs, but you don't have enough points to move to the next level. Make sure you add 100 points to your score every time you get a MOUSE?"},
"failedChainCharactersItems":function(d){return "You used the addPoints command, but not in the right place.  Can you make it so that the command is only called when you get the MOUSEs?"},
"failedChainCharacters2Timeout":function(d){return "You need to get 8 MOUSEs. Can you make two (or more) of them appear every time you get a ROO?"},
"failedChangeSettingTimeout":function(d){return "Get 3 pilots to move on."},
"failedChangeSettingSettings":function(d){return "Make the level your own. To pass this level, you need to change the map and set your speed."}};