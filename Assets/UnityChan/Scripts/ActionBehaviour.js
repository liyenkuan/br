#pragma strict
class ActionBehaviour extends StateMachineBehaviour{
 function OnStateExit(anim:Animator, state:AnimatorStateInfo, id:int){
   anim.GetComponent.<com>().lock = false ;
 }
}
