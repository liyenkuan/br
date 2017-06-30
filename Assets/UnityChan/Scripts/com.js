#pragma strict
private var speed : float = 500 ;
private var body : Rigidbody;
private var anim : Animator ;
private var prePos : Vector2 ;
private var col : CapsuleCollider ;
private var targetRot : Quaternion ;
 var lock : boolean = false;
 var canTurn : boolean = false ;
 //var actionDone : boolean = false ;

function Awake () {
 body = GetComponent.<Rigidbody>() ;
 anim = GetComponent.<Animator>() ;
 col = GetComponent.<CapsuleCollider>() ;
}

function Update () {
 var newVel :Vector3 = transform.TransformDirection(Vector3(0,0,1))*speed*Time.deltaTime;
 body.velocity = Vector3(newVel.x, body.velocity.y , newVel.z);
 anim.SetFloat("Speed",body.velocity.magnitude);
 Swipe() ;
 Rotate() ;	
  Way();

  if (way_state == 1)
  {
    transform.position.x = 0;
  }
  else if (way_state == 2)
  {
   transform.position.x = 4;
  }
   else if (way_state == 0)
   {
    transform.position.x = -4;
   }
}
  var way_state = 1 ;
function Way(){
if  (way_state == 1)//玩家在跑道
{
if (Input.GetKeyUp(KeyCode.LeftArrow))
{
      transform.position.x = -4;
      way_state=0;
      yield WaitForSeconds(2);
}
else if (Input.GetKeyUp(KeyCode.RightArrow))
{
      transform.position.x = 4;
      way_state=2;
      yield WaitForSeconds(2);
}
}
if  (way_state == 2)//玩家在跑道3
{
if (Input.GetKeyUp(KeyCode.LeftArrow))
{
      transform.position.x = 0;
      way_state=1;
     
}
else if (Input.GetKeyUp(KeyCode.RightArrow))
{
      transform.position.x = 4;
      way_state=2;
    
}
}
if  (way_state == 0)//玩家在跑道1
{
if (Input.GetKeyUp(KeyCode.LeftArrow))
{
      transform.position.x = -4;
      way_state=0;
     
}
else if (Input.GetKeyUp(KeyCode.RightArrow))
{
      transform.position.x = 0;
      way_state=1;
     
}
}
}

function Rotate(){
transform.rotation = Quaternion.RotateTowards(transform.rotation, targetRot, 500*Time.deltaTime);
}
function Swipe(){
  if (Input.GetMouseButtonDown(0)) {
  prePos = Input.mousePosition ;
  //actionDone = false ;
  }
  if(Input.GetMouseButton(0)){
   if(Vector3.Distance(prePos, Input.mousePosition)>30 && !lock  ){//&&actionDone
   if(canTurn){
    if(prePos.x < Input.mousePosition.x){
    targetRot = Quaternion.LookRotation(transform.right) ;
    canTurn = false;
    //actionDone = true ;
    }else{
  targetRot = Quaternion.LookRotation(-transform.right) ;
     canTurn = false;
     //actionDone = true ;
 } 
 }else{
       if(prePos.y < Input.mousePosition.y){
     DelayJump() ;
     anim.SetTrigger("Jump");
     lock = true ;
    // actionDone = true ;
    }else{
     anim.SetTrigger("Slide");
     lock = true ;
     //actionDone = true ;
    }
    }
   }
   prePos = Input.mousePosition ;
   }
  }
 function DelayJump(){
 yield WaitForSeconds(0.35) ;
  body.AddForce(Vector3(0,350,0)*Time.deltaTime ,ForceMode.Impulse);
 }
 function Slider(){
 col.height = 0.8 ;
 col.center.y-=0.4 ;
 BackToRun();
 }
 function BackToRun(){
 yield WaitForSeconds(1);
 col.height = 1.6 ;
 col.center.y+=0.4 ;
 }