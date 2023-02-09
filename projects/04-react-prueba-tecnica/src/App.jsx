import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  return (
    <main>
      <div>
        <h1>App de gatitos</h1>
        <button onClick={refreshFact}>Get new fact</button>
        <section>
          {fact && <p>{fact}</p>}
          {imageUrl && (
            <img src={imageUrl} alt={`Image extracted using the first three words for "${fact}"`} />
          )}
        </section>
      </div>
    </main>
  )
}
