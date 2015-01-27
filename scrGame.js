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


