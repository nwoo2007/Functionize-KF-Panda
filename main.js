// Kung Fu Panda Character Look Up

// Event Listener
document.getElementById("search").addEventListener("click", searchClicked);

// // Event Function
function searchClicked() {
  let name = document.getElementById("input-name").value;
  name = name.toLowerCase();

  // Update page to Po
  if (name == "po" || name == "dragon warrior") {
    charDisplay("Po", "po", "Buddy, I am the Dragon Warrior.");
    // Update page to Tigress
  } else if (name == "tigress" || name == "master tigress") {
    charDisplay("Master Tigress", "tigress", "That was pretty harcore!");
    // Update page to Mantis
  } else if (name == "mantis" || name == "master mantis") {
    charDisplay("Master Mantis", "mantis", "Fear the bug!");
    // Update page to Monkey
  } else if (name == "monkey" || name == "master monkey") {
    charDisplay("Master Monkey", "monkey", "We should hang out.");
    // Update page to Crane
  } else if (name == "crane" || name == "master crane") {
    charDisplay(
      // Prettier reformatted this section
      "Master Crane",
      "crane",
      "You can chain my body but you will never chain my warrior spirit!"
    );
    // Update page to Viper
  } else if (name == "viper" || name == "master viper") {
    charDisplay("Master Viper", "viper", "I don't need to bite to fight!");
    // Update page to Master Shifu
  } else if (name == "shifu" || name == "master shifu") {
    charDisplay("Master Shifu", "shifu", "There is now a Level Zero.");
    // Update page to Mr. Ping
  } else if (name == "ping" || name == "mr. ping") {
    charDisplay(
      "Mr. Ping",
      "mr-ping",
      "We are noodle folk, broth runs through our veins!"
    );
    // Update page to Question Mark
  } else {
    charDisplay("?????", "question-mark", "Character Not Found");
  }
}

// Character Display
function charDisplay(name, imgName, quote) {
  document.getElementById("character-name").innerHTML = name;
  document.getElementById("main-img").src = `img/${imgName}.png`;
  document.getElementById("quote").innerHTML = quote;
}
