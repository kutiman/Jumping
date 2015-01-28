#pragma strict

static var fieldArray : boolean[] = new boolean[24];


static var levelStartTime : float;
static var beatPerSecond : float;
static var lastBeat : float;
static var levelActive = false;
static var currentBeat : int;

function Start () {
	StartLevel();
}

function Update () {
	if (Input.GetKeyDown(KeyCode.D)) {
		CreateArrow(1, true);
	}
	if (Input.GetKeyDown(KeyCode.A)) {
		CreateArrow(-1, true);
	}
	
	if (levelActive) {CountBeat();}
}

function CreateArrow (direction : int, low : boolean) {
	var posY : float;
	if (low) {posY = -0.7;}
	else {posY = 0.5;}
	var posX : float;
	if (direction == -1) {
		posX = 4.8;
	}
	else {
		posX = -4.8;
	}
	var obj : GameObject = GameObject.Instantiate(Resources.Load("Prefabs/objArrow"));
	obj.GetComponent(scrArrow).direction = direction;
	obj.transform.position = Vector3(posX, posY, 0);
}


function StartLevel () {
	levelStartTime = Time.time;
	lastBeat = Time.time;
	beatPerSecond = 0.5;
	levelActive = true;
	currentBeat = 0;
}

function CountBeat () {
	if (Time.time >= lastBeat + 1/beatPerSecond) {
		lastBeat = Time.time;
		Beat();
	}
}

function Beat () {
	currentBeat++;
	var a = Random.Range(0,1);
	var bool = true;
	if (a) {
		bool = false;
	}
	CreateArrow(1, bool);
	if (currentBeat % 5 == 0) {
		beatPerSecond = 0.3 + Random.Range(0,1.2);
	}
	
}








