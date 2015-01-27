#pragma strict

var startingPosY : float;
var finalPosY : float;
var fieldPos : int;
var active = true;

function Start () {
	startingPosY = transform.position.y;
	finalPosY = 0;
}

function Update () {
	if (transform.position.y != finalPosY) {
		FlyToPosition();
	}
}

function FlyToPosition () {
	transform.position.y = Mathf.Lerp(startingPosY, finalPosY, Time.time * 0.5);
}

function FlyOut () {
	yield WaitForSeconds(1);
	Destroy(gameObject);
}