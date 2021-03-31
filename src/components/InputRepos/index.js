
import './styles.scss'

export function InputRepos({ submitHandle, userInput }) {

  return (
    <form onSubmit={submitHandle}>
      <input
        type="search"
        placeholder="Informe o usuário e tecle ENTER"
        onChange={userInput}
      />
    </form>
  )
}