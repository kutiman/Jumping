#pragma strict

var direction = 1; // -1 if the arrow flies to the left

function Start () {
	if (direction == -1) {
		transform.rotation.y = 180;
	}
}

function Update () {
	FlyAcross();
}

function FlyAcross () {
	var flySpeed = 12.0;
	transform.position.x += flySpeed * Time.deltaTime * direction;
}

function OnTriggerEnter (other : Collider) {
	Debug.Log("Hit");
	Destroy(other.gameObject);
}