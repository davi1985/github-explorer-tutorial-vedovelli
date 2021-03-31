import './styles.scss';

export function RepositoriesList({ repositories }) {
  return (
    <>
      {repositories.map(repository => (
        <div className="list" key={repository.id}>
          <p>Nome:
            <span>{repository.name}</span>
          </p>

          <p>Linguagem:
            <span>{repository.language}</span>
          </p>

          <p>
            Link: 
            <a href={repository.html_url}>
              {repository.html_url}
            </a>
          </p>
        </div>
      ))}
    </>
  )
}

