import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [blog, setBlog] = useState([])
  useEffect(() => {
    fetch('https:jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setBlog(data))
  })

  return (
  <div className="App">
    <header className="App-header">
      <img src={viteLogo} className="App-logo" alt="logo" />
      <img src={reactLogo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.jsx</code> and save to reload.
      </p>
      <div>
        <h1>Blog Posts</h1>
        {blog.length > 0 ? (
          <ul>
            {blog.map((post) => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </header>
  </div>
  )
}

export default App
