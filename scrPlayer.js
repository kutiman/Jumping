#pragma strict

var gravity = 0.1;
var momentum = 0.0;
var jumping = false;
 

function Start () {

}

function Update () {
	Move();
}

function Jump () {
	var jumpLength = 4;
	jumping = true;
	rigidbody.velocity.y += jumpLength;
}


function Move () {
	var walkSpeed = 2;
	if (Input.GetKeyDown(KeyCode.UpArrow) && !jumping) {
		Jump();
	}
	if (Input.GetKey(KeyCode.RightArrow) && !jumping) {
		transform.position.x += walkSpeed * Time.deltaTime;
	}
	else if (Input.GetKey(KeyCode.LeftArrow) && !jumping) {
		transform.position.x -= walkSpeed * Time.deltaTime;
	} 
}

function OnCollisionEnter () {
	jumping = false;
}

