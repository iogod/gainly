import "./App.css";
import { Amplify } from "aws-amplify";

import {
  withAuthenticator,
  Button,
  Heading,
  Authenticator,
} from "@aws-amplify/ui-react";
import styles from "@aws-amplify/ui-react/styles.css";


function App({ signOut, user }) { 
  // ... 
  // ...
return (
  <div style={styles.container}>
    <Heading level={1}>Hello {user.username}</Heading>
    <Button onClick={signOut}>Sign out</Button>
    <h2>Amplify Todos</h2>
    </div>
)
}
export default withAuthenticator(App);



