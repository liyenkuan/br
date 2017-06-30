#pragma strict
var bound : Collider ;
var isFirst : boolean = false ;
var Stone : GameObject ;
function Start(){
if(isFirst){
  return;
 }
 var num : int = Random.Range(1,2);
 for(var i=1 ; i<=num ; i++){
 var pos : Vector3 = Vector3(transform.position.x+Random.Range(-4f,4f),0,transform.position.z+Random.Range(0f,-10f));
 Instantiate( Stone , pos , transform.rotation);
 }
}
function OnTriggerEnter(other:Collider){
  if(other.tag =="Player"){
  Copy() ;
  } 
}
function Copy(){
var length : float = bound.bounds.extents.z*1;
var pos : Vector3 = transform.position + Vector3(0,0,length);
(Instantiate(gameObject, pos , transform.rotation)).GetComponent.<floor>().isFirst = false ;
 WaitAndDie();
}
function WaitAndDie(){
yield WaitForSeconds(5);
Destroy(gameObject);
}