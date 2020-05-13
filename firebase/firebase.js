import app from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./config";

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.auth = app.auth();
  }

  // Register an user
  async createAccount(name, email, password) {
      const newAccount = await this.auth.createUserWithEmailAndPassword(email, password);

      return await newAccount.user.updateProfile({
          displayName : name
       })
  }

  // Login 
  async login(email, password){
    return this.auth.signInWithEmailAndPassword(email, password);
  }
}
const firebase = new Firebase();
export default firebase;
