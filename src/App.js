import "./App.css";
import { Amplify } from "aws-amplify";
import AwsExports from "./aws-exports";
import {
  withAuthenticator,
  Button,
  Heading,
  Authenticator,
} from "@aws-amplify/ui-react";
import styles from "@aws-amplify/ui-react/styles.css";
Amplify.configure(AwsExports);

function App({ signOut, user }) {
  return (
    <div className="App">
      <div>
        <Heading level={1}>Hello {user.username}</Heading>
        <Button onClick={signOut}>Sign out</Button>
        <h2>Amplify Todos</h2>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
