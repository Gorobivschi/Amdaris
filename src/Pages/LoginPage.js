import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase"
import { useUser, useUserDispatch } from "../UserContext";

function LoginPage() {
    const provider = new GoogleAuthProvider();
    const user = useUser();
    const dispatch = useUserDispatch();

    function signTheUserIn() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user
                dispatch({ user: user, action: "added" });
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                console.log(error)
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }


    return (
    <div>
        <div>
    <link rel="stylesheet" href="./logstyle.css"></link>
    
    <title>Logare</title>
        </div>

    <div id="index"></div>
    <div class="container">
        <h2>Loghează-te cu Google</h2>
    
        <button class="btn-login" onClick={signTheUserIn}>Log in</button>
        {user && (
            <div> {JSON.stringify(user)}
            <button class="btn-login" onClick={() => {
                signOut(auth).then((result) => {
                    window.location.reload()
                })
            }} >Log out</button>
            </div>
        )}
    </div>
    </div>)
}

export default LoginPage;
