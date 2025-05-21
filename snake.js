const readline = require("readline");
const fs = require("fs"); // Dateisystemmodul

// Terminal / Setup für Tastendruck
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const width = 20;
const height = 10;
const initialLength = 3;

const GREEN = "\x1b[32m"; // ANSI-Escape-Code für hellgrüne Schrift
const RESET = "\x1b[0m"; // ANSI-Escape-Code, um die Farbe zurückzusetzen

let snake = [{ x: 5, y: 5 }];
let direction = { x: 1, y: 0 };
let food = {};
let gameOver = false;
let gameStarted = false;
let score = 0; // Punktestand-Variable
let highScore = 0; // Highscore-Variable

// Funktion zum Laden des Highscores aus einer Datei
function loadHighScore() {
  if (fs.existsSync("highscore.txt")) {
    const data = fs.readFileSync("highscore.txt", "utf8");
    highScore = parseInt(data, 10) || 0;
  }
}

// Funktion zum Speichern des Highscores in einer Datei
function saveHighScore() {
  if (score > highScore) {
    highScore = score;
    fs.writeFileSync("highscore.txt", highScore.toString(), "utf8");
    console.log("Neuer Highscore erreicht:", highScore);
  }
}

// Funktion zum Generieren von Essen an einer zufälligen Position, die nicht von der Schlange besetzt ist
function generateFood() {
  let newFoodPosition;
  let isOnSnake;

  do {
    newFoodPosition = {
      x: Math.floor(Math.random() * (width - 2)) + 1,
      y: Math.floor(Math.random() * (height - 2)) + 1,
    };

    // Überprüfen, ob die neue Position von der Schlange besetzt ist
    isOnSnake = snake.some(
      (part) => part.x === newFoodPosition.x && part.y === newFoodPosition.y
    );
  } while (isOnSnake);

  food = newFoodPosition;
}

function drawBoard() {
  let board = "";
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (x === 0 || x === width - 1 || y === 0 || y === height - 1) {
        board += "#"; // Wände
      } else if (x === food.x && y === food.y) {
        board += "▪"; // Essen
      } else {
        let isSnake = false;
        for (let part of snake) {
          if (part.x === x && part.y === y) {
            isSnake = true;
            break;
          }
        }
        board += isSnake ? `${GREEN}O${RESET}` : " "; // Schlange in giftgrün oder leerer Platz
      }
    }
    board += "\n";
  }
  console.clear();
  console.log(board);
  console.log(`Punktestand: ${score} | Highscore: ${highScore}`); // Punktestand und Highscore anzeigen
}

function moveSnake() {
  const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

  if (
    head.x <= 0 ||
    head.x >= width - 1 ||
    head.y <= 0 ||
    head.y >= height - 1 ||
    isCollision(head)
  ) {
    gameOver = true;
    return;
  }

  snake.unshift(head);

  // Überprüfen, ob die Schlange Essen isst
  if (head.x === food.x && head.y === food.y) {
    score++; // Punktestand erhöhen, wenn die Schlange das Essen frisst
    generateFood(); // Neues Essen generieren, nachdem gegessen wurde
  } else {
    snake.pop(); // Ende der Schlange entfernen, wenn kein Essen
  }
}

function isCollision(head) {
  return snake.some((part) => part.x === head.x && part.y === head.y);
}

function gameLoop() {
  if (!gameStarted) {
    drawBoard();
    console.log("Drücke eine Richtungstaste, um das Spiel zu starten.");
    process.stdin.once("keypress", (str, key) => {
      if (["w", "a", "s", "d"].includes(key.name)) {
        gameStarted = true;
        setDirection(key.name);
        gameLoop(); // Spielschleife nach dem ersten Tastendruck starten
      }
    });
    return;
  }

  if (gameOver) {
    displayGameOver();
    setTimeout(() => promptRestart(), 1000); // Neustart nach Game Over
    return;
  }

  moveSnake();
  drawBoard();
  setTimeout(gameLoop, 180); // Spielgeschwindigkeit
}

function setDirection(key) {
  if (key === "w" && direction.y === 0) {
    direction = { x: 0, y: -1 };
  } else if (key === "s" && direction.y === 0) {
    direction = { x: 0, y: 1 };
  } else if (key === "a" && direction.x === 0) {
    direction = { x: -1, y: 0 };
  } else if (key === "d" && direction.x === 0) {
    direction = { x: 1, y: 0 };
  }
}

function displayGameOver() {
  fs.readFile("gameover.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Fehler beim Lesen der Datei:", err);
      return;
    }
    console.clear();
    console.log(data);
    console.log(`Endpunktestand: ${score}`); // Endpunktestand bei Game Over anzeigen
    saveHighScore(); // Highscore bei Game Over speichern
  });
}

function promptRestart() {
  console.log("Möchtest du das Spiel neu starten? (y/n)");
  process.stdin.once("keypress", (str, key) => {
    if (key.name === "y") {
      restartGame();
    } else if (key.name === "n") {
      process.exit();
    }
  });
}

function restartGame() {
  snake = [{ x: 5, y: 5 }];
  direction = { x: 1, y: 0 };
  generateFood(); // Sicherstellen, dass Essen an einer gültigen Position generiert wird
  gameOver = false;
  gameStarted = false;
  score = 0; // Punktestand bei Neustart zurücksetzen
  gameLoop();
}

// Funktion zum Anzeigen von ASCII-Art aus einer externen Datei und dann das Spiel nach einer Verzögerung starten
function displayAsciiArt() {
  fs.readFile("startover.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Fehler beim Lesen der ASCII-Art Datei:", err);
      return;
    }
    console.clear();
    console.log(data);

    // Nach 4 Sekunden ASCII-Art ausblenden und das Spiel starten
    setTimeout(() => {
      console.clear();
      waitForStart();
    }, 4000);
  });
}

function waitForStart() {
  drawBoard();
  console.log("Drücke eine Richtungstaste, um das Spiel zu starten.");
  process.stdin.once("keypress", (str, key) => {
    if (["w", "a", "s", "d"].includes(key.name)) {
      gameStarted = true;
      setDirection(key.name);
      gameLoop(); // Spielschleife nach dem ersten Tastendruck starten
    }
  });
}

// Tastatureingaben für die Bewegung der Schlange verarbeiten
process.stdin.on("keypress", (str, key) => {
  if (gameStarted) {
    setDirection(key.name);
  } else if (key.name === "c" && key.ctrl) {
    process.exit();
  }
});

// Highscore laden, anfängliche Essenposition generieren, ASCII-Art anzeigen und das Spiel starten
loadHighScore();
generateFood();
displayAsciiArt();
