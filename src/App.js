import "./App.css";
import { Amplify } from "aws-amplify";

import {
  withAuthenticator,
  Button,
  Heading,
  Authenticator,
} from "@aws-amplify/ui-react";
import styles from "@aws-amplify/ui-react/styles.css";


function App() {
  return (
    <div className="App">
      <div>
        <Heading level={1}>Hello {"HERE"}</Heading>
        <Button >Sign out</Button>
        
      </div>
    </div>
  );
}

export default App;
