# Snake Console Game

Ein einfaches Snake-Spiel, das in der Konsole gespielt wird. Das Spiel enthält grundlegende Funktionen wie Punktestand, Highscore-Speicherung, ASCII-Art-Anzeige und Restart-Optionen.

## Inhaltsverzeichnis

1. [Projektübersicht](#projektübersicht)
2. [Voraussetzungen](#voraussetzungen)
3. [Installation](#installation)
4. [Verwendung](#verwendung)
5. [Spielsteuerung](#spielsteuerung)
6. [Highscore-Speicherung](#highscore-speicherung)
7. [Dateien und Ordnerstruktur](#dateien-und-ordnerstruktur)
8. [Fehlerbehebung](#fehlerbehebung)
9. [Autoren](#autoren)

---

### 1. Projektübersicht

Dieses Snake-Spiel wird in der Konsole ausgeführt und verwendet `Node.js`-Module, um eine klassische Snake-Funktionalität nachzubilden. Funktionen umfassen:

- Spielfeldaufbau und Snake-Steuerung
- Punktesystem mit Highscore-Speicherung
- Anzeige von ASCII-Art beim Start und Game Over
- Spielwiederholung nach Game Over

### 2. Voraussetzungen

- **Node.js** (Version 14 oder höher): Node.js ist erforderlich, um das Spiel in der Konsole auszuführen.
- **Editor** (z.B. VSCode) zur Bearbeitung des Codes und zum Ausführen des Spiels.

### 3. Installation

1. **Node.js installieren**: Lade Node.js von der [offiziellen Webseite](https://nodejs.org/) herunter und installiere es, falls es noch nicht installiert ist.
2. **Projekt klonen**: Klone das Projekt von GitHub (oder einem anderen Repository) mit folgendem Befehl:
   ```bash
   git clone https://github.com/ChristophKlemtz-DCI/Snake---JS--Terminal.git
   ```

### 3. Benötigte Dateien erstellen:

- `highscore.txt`: Eine leere Textdatei zur Speicherung des höchsten erreichten Scores.
- `startover.txt`: Textdatei mit ASCII-Art für den Startbildschirm.
- `gameover.txt`: Textdatei mit ASCII-Art für das Game-Over-Bild.

### 4.Module installieren: Stelle sicher, dass die benötigten Module **readline** und **keypress** installiert sind. Führe dazu die folgenden Befehle aus:

```bash
npm install readline
npm install keypress
```

### 4. Verwendung

1. Öffne ein Terminal und navigiere in das Projektverzeichnis.
2. Starte das Spiel mit folgendem Befehl:

```bash
node snake.js
```

Ersetze **<deine_datei>**.js durch den Namen der Haupt-JavaScript-Datei (z.B. `snake.js`).

3. Das Spiel zeigt die ASCII-Art des Startbildschirms an und fordert dich auf, eine Richtungstaste zu drücken, um zu starten.

### 5. Spielsteuerung

Verwende folgende Tasten zur Steuerung der Schlange:

- W – Nach oben
- A – Nach links
- S – Nach unten
- D – Nach rechts
- Strg + C – Beendet das Spiel jederzeit

### 6. Highscore-Speicherung

- Das Spiel speichert den höchsten erreichten Punktestand automatisch in der Datei `highscore.txt`.
- Wenn ein neuer Highscore erreicht wird, wird dieser gespeichert und angezeigt.

### 7. Dateien und Ordnerstruktur

- **snake.js** - Haupt-JavaScript-Datei mit dem Spielcode.
- `highscore.txt` - Textdateien zum Speichern des Highscores.
- `starover.txt` - Textdatei für den Startbildschirm mit ASCII-Art.
- `gameover.txt` - Textdatei für die Game-Over-Anzeige mit ASCII-Art.

### 8. Fehlerbehebung

Falls das Spiel nicht wie erwartet läuft, überprüfe:

- Node.js Installation: Stelle sicher, dass Node.js korrekt installiert ist (`node -v` zur Überprüfung).
- Dateien `highscore.txt`, `startover.txt`, `gameover.txt*`: Stelle sicher, dass diese Dateien im Projektordner vorhanden sind.
- Berechtigungen: Überprüfe, ob das Skript Schreibzugriff auf `highscore.txt`hat.
- Modulinstallation: Überprüfe, ob `readline` und `keypress` erfolgreich installiert sind. Falls nicht, führe die Befehle zur Modulinstallation erneut aus.

### 9. Autoren

Entwickelt von Christoph Klemtz
