#pragma strict

var jumping = false;
var verticalVelocity = 0.0;

var sprList = new Array();

function Start () {
	sprList = GetSpriteList("Sprites/jack");
}

function Jump () {
	var jumpLength = 4;
	jumping = true;
	verticalVelocity = jumpLength;
}

function GetSpriteList (str : String) {
	var spriteList = new Array();
	spriteList = Resources.LoadAll(str);
	var sprList : Array = new Array();
	for (var i = 1; i < spriteList.length; i++) {
		sprList.Add(spriteList[i]);
	}
	return sprList;
}

function Move () {
	var walkSpeed = 2;
	if (jumping) {}
	else if (Input.GetKeyDown(KeyCode.UpArrow)) {Jump();}
	else if (Input.GetKey(KeyCode.DownArrow)) {Crouch();}
	else if (Input.GetKey(KeyCode.RightArrow)) {transform.position.x += walkSpeed * Time.deltaTime;}
	else if (Input.GetKey(KeyCode.LeftArrow)) {transform.position.x -= walkSpeed * Time.deltaTime;}
	
	transform.position.y += verticalVelocity * Time.deltaTime;
	
	if (!Input.GetKey(KeyCode.DownArrow) || jumping) {
		Stand();
	}
}

function StayInBorders () {
	var edge = 4.0;
	var ground = -0.98;
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

function Crouch () {
	gameObject.GetComponent(SpriteRenderer).sprite = sprList[1];
	GetComponent(BoxCollider).size.y = 1.5;
}

function Stand () {
	gameObject.GetComponent(SpriteRenderer).sprite = sprList[0];
	GetComponent(BoxCollider).size.y = 2;
}




















