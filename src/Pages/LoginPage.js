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


    return (<>
        Salut, apasa aici ca sa intri
        <button onClick={signTheUserIn}>log me innnn</button>
        {user && (
            <>Salut {JSON.stringify(user)}
            <button onClick={() => {
                signOut(auth).then((result) => {
                    window.location.reload()
                })
            }}>Log me out</button>
            </>
        )}
    </>)
}

export default LoginPage;
