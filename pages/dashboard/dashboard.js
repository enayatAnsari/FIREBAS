
// if (!JSON.parse(localStorage.getItem('loggedInUser'))) {
//     window.location.replace("../../index.html");
//     console.log("redirected successfully");
// }
import { signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth } from "/firebaseSetup.js";
let signOutFun = async () => {
    await signOut(auth).then(() => {
        console.log('logged out');
        
    })
    .catch((error) => {
        console.error(error.message);
        
    })
}
document.querySelector('#signout-btn').addEventListener('click', () => {
    signOutFun().then(() => {
        // console.log('successfully loggedout.');
        window.location.replace("../login/login.html");
    })
})
