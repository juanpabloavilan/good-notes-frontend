import { useState } from "react"

type Note = {
  id: number,
  body: string,
  author: Author,
  created_at: string
  updated_at:string
}

type Author = {
  id: number,
  username: string,
  email: string,
  name: string,
  createdAt: string
}



function App():JSX.Element {
  const [notes, setNotes] = useState<Note[]>([])
  return (
    <div className="flex flex-col bg-white min-h-screen min-w-screen" >
      <header className="flex justify-between items-center h-200">
        <h1>Good <span>notes</span></h1>
        <ul className="flex justify-evenly align-middle w-2/4">
          <li>Cuadernos</li>
          <li>Temas</li>
          <li>Tareas</li>
        </ul>
      </header>
      <main>
        <h2>Hello</h2>
      </main>

      <footer>

      </footer>
    </div>
  )
}

export default App
