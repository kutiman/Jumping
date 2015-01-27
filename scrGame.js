#pragma strict

static var fieldArray : boolean[] = new boolean[24];

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











/*
function CreateBrick (posX : float) {
	var obj : GameObject = GameObject.Instantiate(Resources.Load("Prefabs/objBrick"));
	obj.transform.position = Vector2(posX, -5);
	return obj;
}

function RemoveBrickLeft () {
	var leftestPos = 0;
	for (var i = 0; i < fieldArray.Length; i++) {
		if (fieldArray[i]) {
			leftestPos = i;
			fieldArray[i] = false;
			break;
		}
	}
	var list = GameObject.FindGameObjectsWithTag("tagBrick");
	for (var item in list) {
		if (item.GetComponent(scrBrick).fieldPos == leftestPos) {
			item.GetComponent(scrBrick).FlyOut();
			break;
		}
	}
}

function ResetField () {
	for (var i = 0; i < fieldArray.Length; i++) {
		fieldArray[i] = false;
	}
	for (i = fieldArray.Length * 0.275; i < fieldArray.Length * 0.725; i++) {
		fieldArray[i] = true;
	}
}

function CreateFirstBricks () {
	for (var i = 0; i < fieldArray.Length; i++) {
		if (fieldArray[i] == true) {
			var obj = CreateBrick((-fieldArray.Length/2 + i) * 0.32);
			obj.GetComponent(scrBrick).fieldPos = i;
		}
	}
}
*/







