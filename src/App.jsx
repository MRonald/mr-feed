import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/MRonald.png',
      name: 'Michael Ronald',
      role: 'Fullstack Developer',
    },
    content: [
      {
        type: 'paragraph', 
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus libero magnam molestiae molestias sint adipisci nam'
      },
      {
        type: 'paragraph', 
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus libero magnam molestiae molestias sint adipisci nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum adipisci veniam quod. Necessitatibus eos quisquam hic quos amet'
      },
    ],
    publishedAt: new Date('2022-12-09 09:00:16'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/MRonald.png',
      name: 'Michael Ronald',
      role: 'Fullstack Developer',
    },
    content: [
      {
        type: 'paragraph', 
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus libero magnam molestiae molestias sint adipisci nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum adipisci veniam quod. Necessitatibus eos quisquam hic quos amet blanditiis? Veritatis temporibus alias, voluptatum ab aspernatur debitis placeat laudantium exercitationem quasi?'
      },
      {
        type: 'paragraph', 
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus libero magnam molestiae molestias sint adipisci nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum adipisci veniam quod. Necessitatibus eos quisquam hic quos amet blanditiis? Veritatis temporibus alias, voluptatum ab aspernatur debitis placeat laudantium exercitationem quasi?'
      },
    ],
    publishedAt: new Date('2022-12-09 07:52:16'),
  },
];

function App() {
  return (
    <div>
      <Header />
      
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
            );
          })}
        </main>
      </div>
    </div>
  )
}

export default App
