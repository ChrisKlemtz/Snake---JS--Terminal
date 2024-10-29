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
   git clone <Repository-URL>
   ```

### 3. Benötigte Dateien erstellen:

- **highscore.txt**: Eine leere Textdatei zur Speicherung des höchsten erreichten Scores.
- **startover.txt**: Textdatei mit ASCII-Art für den Startbildschirm.
- **gameover.txt**: Textdatei mit ASCII-Art für das Game-Over-Bild.

### 4.Module installieren: Stelle sicher, dass die benötigten Module **readline** und **keypress** installiert sind. Führe dazu die folgenden Befehle aus:
