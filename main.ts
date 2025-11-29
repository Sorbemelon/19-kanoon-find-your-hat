import promptSync from "prompt-sync";

// Types
type Tile = "" | "*" | "░" | "O" | "^";
type Board = Tile[][];

const prompt = promptSync({ sigint: true });

// Board tiles
const PLAYER: Tile = "*";
const EMPTY: Tile = "░";
const HOLE: Tile = "O";
const HAT: Tile = "^";

// Hardcoded board
// let board: Board = [
// 	[PLAYER, EMPTY, HOLE],
// 	[EMPTY, HOLE, EMPTY],
// 	[EMPTY, HAT, EMPTY],
// ];

//  Game state
let playerRow: number = 0;
let playerCol: number = 0;
let playing: boolean = true;

// Board generator function
let board: Board = []
let boardWidth: number = 2;
let boardHeight: number = 2;
let holeFrequency: string = "";

const boardGenerator = (): void => {
	// User input for board width, minimum 2
	let inputWidth = prompt("Enter board width (min 2): ");
	while (!Number.isInteger(Number(inputWidth)) || Number(inputWidth) < 2) {
		console.log("Invalid input, please type a correct input.");
		inputWidth = prompt("Enter board width (min 2): ");
	}
	// User input for board height, minimum 2
	let inputHeight = prompt("Enter board height (min 2): ");
	while (!Number.isInteger(Number(inputHeight)) || Number(inputHeight) < 2) {
		console.log("Invalid input, please type a correct input.");
		inputHeight = prompt("Enter board height (min 2): ");
	}
	boardWidth = Number(inputWidth);
	boardHeight = Number(inputHeight);
	// User input for hole frequency, range 0-100
	holeFrequency = prompt("Enter hole frequency, default=50 (0-100): ");
	if (!Number.isInteger(Number(holeFrequency)) || !(holeFrequency) || Number(holeFrequency) < 0 || Number(holeFrequency) > 100) {
		holeFrequency = "50";
	}

	// Generate a null board
	board = Array.from({ length: boardHeight}, () => (
		Array.from({ length: boardWidth}, () => "" )
	));

	// Create PLAYER tile starting position
	playerCol = Math.floor(Math.random() * boardWidth);
	playerRow = Math.floor(Math.random() * boardHeight);
	board[playerRow][playerCol] = PLAYER;
	// Create playable route
	const routeLength: number = Math.floor( boardWidth * boardHeight * 0.7 );
	let count = 0;
	let tempRow = playerRow;
	let tempCol = playerCol;
	while (count < routeLength) {
		const routePosition = Math.floor(Math.random() * 4);
		if (routePosition === 0 && tempRow+1 < boardHeight) {
			if (board[tempRow+1][tempCol] != PLAYER) {tempRow++; count++; board[tempRow][tempCol] = EMPTY;};
		} else if (routePosition === 1 && tempRow-1 >= 0) {
			if (board[tempRow-1][tempCol] != PLAYER) {tempRow--; count++; board[tempRow][tempCol] = EMPTY;};
		} else if (routePosition === 2 && tempCol+1 < boardWidth) {
			if (board[tempRow][tempCol+1] != PLAYER) {tempCol++; count++; board[tempRow][tempCol] = EMPTY;};
		} else if (routePosition === 3 && tempCol-1 >= 0) {
			if (board[tempRow][tempCol-1] != PLAYER) {tempCol--; count++; board[tempRow][tempCol] = EMPTY;};
		};
	};
	// Create a HAT tile position
	board[tempRow][tempCol] = HAT;

	// Fill the rest of the board (null) will either EMPTY or HOLE tile
	for (let line=0; line<board.length; line++) {
		for (let tile=0; tile<board[line].length; tile++){
			if (board[line][tile] === "") {
				if (Math.random() < (Number(holeFrequency)/100)) {
					board[line][tile] = HOLE
				} else {
					board[line][tile] = EMPTY
				};
			};
		};
	};
};

// Print board function
function printBoard(): void {
	console.clear(); // call console.clear() before print each move
	board.forEach(line => console.log(line.join("")));
}

// Move function combined into moveSet object
const moveRight = () => playerCol++;
const moveLeft  = () => playerCol--;
const moveUp    = () => playerRow--;
const moveDown  = () => playerRow++;

type Move = "w" | "a" | "s" | "d";
type MoveSet = {"w": Function, "a": Function, "s": Function, "d": Function};
const moveSet: MoveSet = {"w": moveUp, "a": moveLeft, "s": moveDown, "d": moveRight};

// Game function for 1 round
const updateGameState = (): void => {
	printBoard();
	// Move input, loop if input not correct
	let input = prompt("Which way? (w/a/s/d): ");
	let move = input.toLowerCase();
	while (!Object.keys(moveSet).includes(move)) {
		printBoard();
		console.log("invalid input, please type a correct input");
		move = prompt("Which way? (w/a/s/d): ");
	};
	// Update board and playerCol/playerRow value
	board[playerRow][playerCol] = EMPTY;
	moveSet[move as Move]();

	// Check event on player current position and update values
	if ( playerCol < 0 || playerCol >= boardWidth || playerRow < 0 || playerRow >= boardHeight ) {
		playing = false;
		console.log("\nYou lose! Moving outside the board.\nTry again :)")
	} else {
		let playerPosition = board[playerRow][playerCol];

		if (playerPosition === HOLE) {
			playing = false;
			console.log("\nYou lose! Landing in a hole.\nTry again :)")
		} else if (playerPosition === HAT) {
			playing = false;
			console.log("\nYou win! The legendary hat is found.\nWell done! :)")
		} else {
			board[playerRow][playerCol] = PLAYER;
		};
	};
};

// Loop game function
const gamePlay = () => {
	boardGenerator();
	while (playing) {
		updateGameState();
	};
};

// Init game play
gamePlay();