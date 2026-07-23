// enforces that this code can only be called on the server
// https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment
import "server-only";

import { cookies } from "next/headers";
import { initializeServerApp, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// Returns an authenticated client SDK instance for use in Server Side Rendering
// and Static Site Generation
export async function getAuthenticatedAppForUser() {
  const authIdToken = (await cookies()).get("__session")?.value;

  // Firebase Server App is a new feature in the JS SDK that allows you to
  // instantiate the SDK with credentials retrieved from the client & has
  // other affordances for use in server environments.
  const firebaseServerApp = initializeServerApp(
    // https://github.com/firebase/firebase-js-sdk/issues/8863#issuecomment-2751401913
    initializeApp({
      apiKey: "AIzaSyCzkjDA6XQFgLfdVtHtRMyLOjubwi0e37g",
      authDomain: "public-database-2.firebaseapp.com",
      databaseURL: "https://public-database-2-default-rtdb.firebaseio.com",
      projectId: "public-database-2",
      storageBucket: "public-database-2.firebasestorage.app",
      messagingSenderId: "1063065957137",
      appId: "1:1063065957137:web:f37150cd8e334d1a9dd2b0",
      measurementId: "G-E4JS903ZLN"
    }),
    {
      authIdToken,
    }
  );

  const auth = getAuth(firebaseServerApp);
  await auth.authStateReady();

  return { firebaseServerApp, currentUser: auth.currentUser };
}
