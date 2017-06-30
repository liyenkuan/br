#pragma strict

function OnTriggerEnter(col:Collider){
var control :com =col.GetComponent.<com>();
 if(control != null){
 control.canTurn =true ;
 }
} 
function OnTriggerExit(col:Collider){
var control :  com = col.GetComponent.<com>() ;
 if(control != null){
 control.canTurn =false ;
 }
} 
