#pragma strict
import SceneManagement ;
function OnCollisionEnter (other : Collision) {
	if (other.collider.tag == "Player"){
	   SceneManager.LoadScene(0) ;
	}
}

