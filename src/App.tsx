import { Header } from "./components/header";
import Post from "./components/Post";
import { Sidebar } from "./components/Sidebax";

import styles from './App.module.css';
import './global.css'

const posts = [
  {
      id: 1,
      author: {
          avatar_url: 'https://github.com/karenyov.png',
          name: 'Karen Vicente',
          role: 'Analista de Sistemas'
      },
      content: [
          { type: 'paragraph', content: 'Fala galeraa 👋' },
          { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
          { type: 'link', content: 'jane.design/doctorcare' },
          { type: 'link', content: '#novoprojeto' },
          { type: 'link', content: '#nlw' },
          { type: 'link', content: '#rocketseat' }
      ],
      publishedAt: new Date('2022-05-3 20:00:00')
  },
  {
      id: 2,
      author: {
          avatar_url: 'https://github.com/maykbrito.png',
          name: 'Mayk Brito',
          role: 'Educador @Rockeseat'
      },
      content: [
          { type: 'paragraph', content: 'Fala galeraa 👋' },
          { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
          { type: 'link', content: 'jane.design/doctorcare' },
          { type: 'link', content: '#novoprojeto' },
          { type: 'link', content: '#nlw' },
          { type: 'link', content: '#rocketseat' }
      ],
      publishedAt: new Date('2022-05-10 10:00:00')
  },
];

function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
