document.getElementById("mainTitle").innerText = "Point and click adventure";

const gameWindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");
const offsetCharacter = 16;
const sec = 1000;
const mainCharacterSpeach = document.getElementById("mainCharacterSpeach");
const characterAudio = document.getElementById("characterAudio");

const counterSpeech = document.getElementById("counterSpeech");
const counterAudio = document.getElementById("counterAudio");
const counterCharacter = document.getElementById("counterCharacter");

gameWindow.onclick = function(e){
    if (mainCharacterSpeach.style.opacity == 0) {

        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
     
        mainCharacter.style.left = x - offsetCharacter +"px";
        mainCharacter.style.top = y - offsetCharacter +"px";
        
        console.log(e.target.id)
    
        switch(e.target.id){
            case "door":
                showMessage(mainCharacterSpeach, characterAudio, "this door is closed")
                break
            case "openChest":
                showMessage(mainCharacterSpeach, characterAudio, "this chest is empty")
                break
            case "lockedChest":
                showMessage(mainCharacterSpeach, characterAudio, "This chest is locked");
                setTimeout(function () { counterCharacter.style.opacity = 1; }, 4 * sec);
                setTimeout(showMessage, 4 * sec, counterSpeech, counterAudio, "You need to find a key");
                setTimeout(showMessage, 8 * sec, mainCharacterSpeach, characterAudio, "Oh, where can I find the key");
                setTimeout(showMessage, 12 * sec, counterSpeech, counterAudio, "Look near a rock.");
                setTimeout(function () { counterCharacter.style.opacity = 0; }, 16 * sec);
                break;
            case "rock":
                showMessage(mainCharacterSpeach, characterAudio, "I found the key")
                break
            default:
                hideMessage(mainCharacterSpeach, characterAudio);
                hideMessage(counterSpeech, counterAudio);                
                break
        }
    }
    
}

function showMessage(targetBubble, targetAudio, message) {
    targetAudio.currentTime = 0;
    targetAudio.play();
    targetBubble.innerHTML = message;
    targetBubble.style.opacity = 1;
    setTimeout(hideMessage, 4 * sec, targetBubble, targetAudio);
}

function hideMessage(targetBubble, targetAudio) {
    targetAudio.pause();
    targetBubble.innerHTML = "...";
    targetBubble.style.opacity = 0;
}