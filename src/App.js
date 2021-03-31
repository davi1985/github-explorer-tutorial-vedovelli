import { useState } from "react";
import { Header } from "./components/Header";
import { InputRepos } from "./components/InputRepos";
import { RepositoriesList } from "./components/RepositoriesList";
import { api } from './service/api'

function App() {
  const [user, setUser] = useState('');
  const [repositories, setRepositories] = useState([]);

  function submitHandle(event) {
    event.preventDefault();
    api.get(`users/${user}/repos`)
      .then(response => {
        setRepositories(response.data);
      });
  }

  function userInput(event) {
    setUser(event.target.value);
  }

  return (
    <>
      <Header />

      <InputRepos
        submitHandle={submitHandle}
        userInput={userInput}
      />
      <RepositoriesList repositories={repositories} />
    </>
  );
}

export default App;
