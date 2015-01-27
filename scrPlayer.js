#pragma strict

var jumping = false;
var verticalVelocity = 0.0;

function Start () {

}

function Jump () {
	var jumpLength = 4;
	jumping = true;
	verticalVelocity = jumpLength;
}


function Move () {
	var walkSpeed = 2;
	if (jumping) {}
	else if (Input.GetKeyDown(KeyCode.UpArrow)) {Jump();}
	else if (Input.GetKey(KeyCode.RightArrow)) {transform.position.x += walkSpeed * Time.deltaTime;}
	else if (Input.GetKey(KeyCode.LeftArrow)) {transform.position.x -= walkSpeed * Time.deltaTime;}
	transform.position.y += verticalVelocity * Time.deltaTime;
}

function StayInBorders () {
	var edge = 4.0;
	var ground = 0.0;
	if (transform.position.x < -edge) {transform.position.x = -edge;}
	if (transform.position.x > edge) {transform.position.x = edge;}
	if (transform.position.y < ground) {
		transform.position.y = ground; 
		verticalVelocity = 0.0; 
		jumping = false;
	}
	if (transform.position.y > edge) {transform.position.y = ground;}
}

function Gravity () {
	var gravity = 12;
	verticalVelocity -= gravity * Time.deltaTime;
}

function Update () {
	Move();
	StayInBorders();
	Gravity();
}



