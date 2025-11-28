# Thinking Process Guidelines

## Table of Contents

- [Thinking Process Guidelines](#thinking-process-guidelines)
  - [Table of Contents](#table-of-contents)
  - [1. Workflow Planning](#1-workflow-planning)
  - [2.1. Board Functions (Hardcoded)](#21-board-functions-hardcoded)
  - [2.2. Board Functions (Generated)](#22-board-functions-generated)
  - [3. Input Functions](#3-input-functions)
  - [4. Movement Functions](#4-movement-functions)
  - [5. Game Rule Functions](#5-game-rule-functions)
  - [6. Game Play Loop](#6-game-play-loop)
- [WRITE YOUR THINKING PROCESS BELOW. ](#write-your-thinking-process-below)

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">1. Workflow Planning</span>

↳ Draw a flowchart or write steps describing:

<p style="display: flex; align-items: center; gap: 1rem;">
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Game start</span>
<span style="color: wheat; font-weight:bold; font-size:2rem; ">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Read input</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Update position</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Check rules</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">End/Continue</span>
</p>

↳ Must include:

- Input/output of each function.
- Edge cases (invalid input, boundaries, hole/hat tiles).

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem; margin-top: 1rem; border-buttom: none;">2.1. Board Functions (Hardcoded)</span>

↳ Prints the hardcoded board in terminal.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How the board is represented (2D array).
- Tile types (PLAYER, EMPTY, HOLE, HAT).

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">2.2. Board Functions (Generated)</span>

↳ Creates a random board with player, hat, and holes.
↳ Prints the board in terminal.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How the board is represented (2D array).
- Tile types (PLAYER, EMPTY, HOLE, HAT).
- How random placement avoids overlaps.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">3. Input Functions</span>

↳ Reads and validates user input (w, a, s, d).
↳ Logs invalid input.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- Input/output.
- Edge cases (invalid input, boundaries).
- How player position is updated.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">4. Movement Functions</span>

↳ Updates playerRow / playerCol based on the move.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- Input/output.
- Edge cases (invalid input, boundaries).
- How player position is updated.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">5. Game Rule Functions</span>

↳ Checks for out-of-bounds, falling into a hole, or finding the hat.

<span style="font-weight:bold; color: pink;">&nbsp;Game Rules:&nbsp;</span>

- Wins by finding the hat.
- Loses by landing in a hole.
- Loses by moving outside the board.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How to determine win/loss conditions.
- Handling messages for win/loss conditions.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">6. Game Play Loop</span>

↳ Combine all functions into a playable loop.
↳ Ensure messages appear correctly, board prints at start, and invalid input is handled.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How to determine win/loss conditions.
- Handling messages for win/loss conditions
- How to update the board when the player moves.

---

# <p style="display: flex; align-items: center; gap: 0.5em;"><span style="font-weight:bold; color: white; background-color: lightSeaGreen; padding: 0.5rem 2rem;">WRITE YOUR THINKING PROCESS BELOW.</span><span style="font-weight:bold; color: white; background-color: lightSeaGreen; padding: 0.5rem 0;">&nbsp;</span></p>

# Thinking Process (19_Methus(Kanoon))
## 1. Workflow Planning
<p style="display: flex; flex-direction: column; align-items: start; gap: 0;">
  <span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 1rem; border-radius: 0.5em;">Game start</span>
  <span style="font-weight:bold; color: white; background-color: purple; padding: 0.5rem 1rem; border-radius: 0.5em;">Call "Game Play" function</span>
  <span style="color: wheat; font-weight:bold; font-size:2rem; padding-left: 0.2rem">↓</span>
  <span style="display: flex; flex-direction: row; align-items: center; gap: 0.2rem;">
    <span style="font-weight:bold; color: black; background-color: Orange; padding: 0.5rem 1rem; border-radius: 0.5em;">"Game Init" function call "Board Generator" function</span>
    <span style="color: wheat; font-weight:bold; font-size:2rem; ">→</span>
    <span style="font-weight:bold; color: black; background-color: Orange; padding: 0.5rem 1rem; border-radius: 0.5em;">User input: board width, board height, hole frequency</span>
    <span style="color: wheat; font-weight:bold; font-size:2rem; ">→</span>
    <span style="font-weight:bold; color: black; background-color: Orange; padding: 0.5rem 1rem; border-radius: 0.5em;">Create a blank board</span>
  </span>
  <span style="display: flex; flex-direction: row; align-items: center; gap: 0.2rem;">
    <span style="font-weight:bold; color: black; background-color: Orange; padding: 0.5rem 1rem; border-radius: 0.5em;">Output: generated board</span>
    <span style="color: wheat; font-weight:bold; font-size:2rem; ">←</span>
    <span style="font-weight:bold; color: black; background-color: Orange; padding: 0.5rem 1rem; border-radius: 0.5em;">Fill the rest of the map with empty or hole</span>
    <span style="color: wheat; font-weight:bold; font-size:2rem; ">←</span>
    <span style="font-weight:bold; color: black; background-color: Orange; padding: 0.5rem 1rem; border-radius: 0.5em;">Create player position, garunteed path, hat position</span>
    <span style="color: wheat; font-weight:bold; font-size:2rem;">⤶</span>
  </span>
  <span style="color: wheat; font-weight:bold; font-size:2rem; padding-left: 0.2rem">↓</span>
  <span style="font-weight:bold; color: black; background-color: Lime; padding: 0.5rem 1rem; border-radius: 0.5em;">While loop - check "playing" status</span>
  <span style="display: flex; flex-direction: row; align-items: center; gap: 0.2rem;">
    <span style="color: wheat; font-weight:bold; font-size:2rem; padding-left: 0.2rem">|</span>
    <span style="font-weight:bold; color: black; background-color: cyan; padding: 0.5rem 1rem; border-radius: 0.5em;">Call "Update Game Status" function if "playing" is true</span>
    <span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
    <span style="font-weight:bold; color: black; background-color: cyan; padding: 0.5rem 1rem; border-radius: 0.5em;">Print current board</span>
    <span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
    <span style="font-weight:bold; color: black; background-color: cyan; padding: 0.5rem 1rem; border-radius: 0.5em;">User input: move(w,a,s,d), chage input to lower case</span>
    <span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
    <span style="font-weight:bold; color: black; background-color: cyan; padding: 0.5rem 1rem; border-radius: 0.5em;">Call "Move" function - update player position</span>
  </span>
  <span style="display: flex; flex-direction: row; align-items: center; gap: 0.2rem;">
    <span style="color: wheat; font-weight:bold; font-size:2rem; padding-left: 0.2rem">|      ↑</span>
    <span style="color: wheat; font-weight:bold; font-size:2rem; padding-left: 71.8rem">↓</span>
  </span>
  <span style="display: flex; flex-direction: row; align-items: center; gap: 0.2rem;">
    <span style="color: wheat; font-weight:bold; font-size:2rem; padding-left: 0.2rem">|      ↑</span>
    <span style="font-weight:bold; color: wheat; background-color: DarkGreen; padding: 0.5rem 1rem; border-radius: 0.5em;">"playing" is true</span>
    <span style="color: wheat; font-weight:bold; font-size:2rem; padding-left: 62rem">↓</span>
  </span>
  <span style="display: flex; flex-direction: row; align-items: center; gap: 0.2rem;">
    <span style="color: wheat; font-weight:bold; font-size:2rem; padding-left: 0.2rem">|      ↑</span>
    <span style="color: wheat; font-weight:bold; font-size:2rem; padding-left: 71.8rem">↓</span>
  </span>
  <span style="display: flex; flex-direction: row; align-items: center; gap: 0.2rem;">
    <span style="color: wheat; font-weight:bold; font-size:2rem; padding-left: 0.2rem">|</span>
    <span style="font-weight:bold; color: black; background-color: cyan; padding: 0.5rem 1rem; border-radius: 0.5em;">Update position</span>
    <span style="color: wheat; font-weight:bold; font-size:2rem;">←-------------------------</span>
    <span style="font-weight:bold; color: black; background-color: cyan; padding: 0.5rem 1rem; border-radius: 0.5em;">Check rules on curent position</span>
    <span style="color: wheat; font-weight:bold; font-size:2rem;">←-------------------------</span>
    <span style="font-weight:bold; color: black; background-color: cyan; padding: 0.5rem 1rem; border-radius: 0.5em;">Update board</span>
  </span>
  <span style="display: flex; flex-direction: row; align-items: center; gap: 0.2rem;">
    <span style="color: wheat; font-weight:bold; font-size:2rem; padding-left: 0.2rem">|</span>
    <span style="font-weight:bold; color: black; background-color: red; padding: 0.5rem 1rem; border-radius: 0.5em;">"playing" is false</span>
    <span style="color: wheat; font-weight:bold; font-size:2rem;">←-----</span>
    <span style="font-weight:bold; color: black; background-color: red; padding: 0.5rem 1rem; border-radius: 0.5em;">Found hole/ Found hat/ Out of board</span>
    <span style="color: wheat; font-weight:bold; font-size:2rem;">⤶</span>
  </span>
  <span style="font-weight:bold; color: black; background-color: Lime; padding: 0.5rem 1rem; border-radius: 0.5em;">End loop</span>
  <span style="font-weight:bold; color: white; background-color: purple; padding: 0.5rem 1rem; border-radius: 0.5em; margin-top: 0.5rem;">End "Game Play" function</span>
  <span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 1rem; border-radius: 0.5em;">Game Over</span>
</p>

## 2.1. Board Functions (Hardcoded)
1. A board compose of multiple row or column stack together. In this case, a board of 2D array can use an array as a represent of row.
2. If we print each row of array to each line, a canvas of board can be created. Therefore, the a number of rows(array) will represent board height.
3. We will create a board with dimension of 3x3 tiles which 1 tile represent an element in an array. 
4. The board with width of 3 is an array of 3 elements. And, the board with height of 3 will be created by creating an array that containt another 3 array that we describe previously.
5. Our board canvas is ready! To complete the board, details have to be given for each tile in the array.
6. There are 4 types of tile:
   - PLAYER tile: represent with "*" character
   - EMPTY tile: represent with "░" character
   - HOLE tile: represent with "O" character
   - HAT tile: represent with "^" character
7. A PLAYER tile will be placed at position of [0][0] of the board.
8. A HAT tile will be placed at position of [2][1] of the board.
9. Two HOLE tiles will be place at position of [0][2] and [1][1] of the board.
10. The rest of the board will be placed with EMPTY tiles.
11. The result 2D array of board will looks like this:
    > [ [PLAYER, EMPTY, HOLE],\
        [EMPTY, HOLE, EMPTY],\
        [EMPTY, HAT, EMPTY] ]
  - If print will looks like this:
    > *░O\
      ░O░\
      ░^░

## 2.2. Board Functions (Generated)
1. A board compose of multiple row or column stack together. In this case, a board of 2D array can use an array as a represent of row.
2. If we print each row of array to each line, a canvas of board can be created. Therefore, the a number of rows(array) will represent board height.
3. We will create a board with flexible dimension of MxN tiles which 1 tile represent an element in an array.
4. The board height(M) and the board width(N) will be received from user input.
5. A minimum of height or width is to 2 which can be used to create a smallest board (2x2). If the user try to input something that is not a number of 2 or higher, the function will loop to ask the user again.
6. After accepting the input, and array that long N elements which each elements is "" will be created.
7. Then, M piece of the previous array will be store in another array and is assigned to variable "board".
8. A frequency of holes in the board (K) will be determined by the user input based on their preference.
9. After the board canvas and input information is ready, we will assign tiles to each index of the board.
10. First, a PLAYER tile will be randomly placed on the board.
11. Continue from the PLAYER tile, a path with EMPTY tiles will be created in a random direction. The path will ensure that the HAT can be reach from the starting PLAYER tile.
12. The path will long M x N x 0.7 and can overlap with its own but cannot override the PLAYER tile.
13. The last tile of the path will be placed with a HAT tile.
14. HOLE and EMPTY tiles will randomly placed in the rest of the board ("", null tile) with a frequency of generating HOLE tile of K(from user input).

## 3. Input Functions
1. A position of PLAYER will be determined by coordinate 2D array board, which can be accessed by index of column and row.
2. Therefore, a playerRow and a playerCol variables will be created to repressent the PLAYER current row and column, repectively.
3. The playerRow and playerCol value will be assigned automatically when creating using a board function.
4. The acceptable input for PLAYER to move are "w", "a", "s", "d" which are move up, move left, move down, move right, repectively.
5. Every input is change to lower case before further process.
6. If others input is obtain, the function will loop to ask for a correct input.

## 4. Movement Functions
1. To make the PLAYER move, a movement function is needed.
2. Move up function will reduce the value of playerRow by 1 to move up in the board.
3. Move down function will add the value of playerRow by 1 to move down in the board.
4. Move left function will reduce the value of playerCol by 1 to move left in the board.
5. Move right function will add the value  of playerCol by 1 to move right in the board.
6. These 4 function will be stored as a value in an object named moveSet with a key of an input that relate to them ("w" for move up, "a" for move left, "s" for move down, "d" for move right).
7. After receiving a correct input previously, the input will be checked with the moveSet object and call its repective function (value).
8. The function will update either the playerRow or playerCol value, resulting in a move of the PLAYER and updating of the board.

## 5. Game Rule Functions
1. When a PLAYER move into different types of tile, a unique event will be occured.
2. "playing" variable will determine whether the game continue or end.
3. The "playing" variable will begin with true value to initiate the game.
4. When the "playing" is updated with false value, the game will end with a message related tho each event.
5. If the PLAYER move into an EMPTY tile, nothing will happen.
6. If the PLATER move into a HOLE tile, "playing" will be updated to false and a loss message will be printed "You lose! Landing in a hole. Try again :)".
7. If the PLATER move out of the board, "playing" will be updated to false and a loss message will be printed "You lose! Moving outside the board. Try again :)".
8. If the PLATER move into a HAT tile, "playing" will be updated to false and a win message will be printed "You win! The legendary hat is found. Well done! :)".

## 6. Game Play Loop
1. All function for previous step will be conbined to a gamePlay function.
2. The gamePlay function will first call a boardGenerator function to create a board.
3. Then, the gamePlay function will loop a updateGameState function while "playing" value is still true
4. When the "playing" is updated with false value which resulting in a game end, the loop will also end too and make the gamePlay function end.

[Back to Table of Contents](#table-of-contents)

---
