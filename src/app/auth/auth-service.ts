import * as firebase from 'firebase';
import { error } from 'util';
export class Authservice{
    signUpUser(email:string ,password:string){
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .catch(
            error => console.log(error)
        )
    }
    signinUser(email:string,password:string){
      firebase.auth().signInWithEmailAndPassword(email,password).then(
          Response=>console.log(Response)
      ).catch(
          error=>console.log(error)
      )
    }
}