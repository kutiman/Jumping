#pragma strict

static var fieldArray : boolean[] = new boolean[24];


static var levelStartTime : float;
static var beatPerSecond : float;
static var lastBeat : float;
static var levelActive = false;
static var currentBeat : int;

function Start () {

}

function Update () {
	if (Input.GetKeyDown(KeyCode.D)) {
		CreateArrow(1);
	}
	if (Input.GetKeyDown(KeyCode.A)) {
		CreateArrow(-1);
	}
}

function CreateArrow (direction : int) {
	var posY = -0.7;
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
