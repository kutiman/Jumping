#pragma strict

var direction = 1; // -1 if the arrow flies to the left
var hit = false;

function Start () {
	if (direction == -1) {
		transform.rotation.y = 180;
	}
	yield WaitForSeconds(3);
	Destroy(gameObject);
}

function Update () {
	if (!hit) {FlyAcross();}
}

function FlyAcross () {
	var flySpeed = 10.0;
	transform.position.x += flySpeed * Time.deltaTime * direction;
}

function OnTriggerEnter (other : Collider) {
	Debug.Log("Hit");
	if (!hit && other.gameObject.tag == "Player") {
		hit = true;
		transform.parent = other.gameObject.transform;
	}
}