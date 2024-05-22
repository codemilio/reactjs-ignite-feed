import { Header } from './components/Header'
import { PostList } from './components/PostList'
import { Sidebar } from './components/Sidebar'
import { Wrapper } from './components/Wrapper'
import './global.css'

export function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar />
        <PostList />
      </Wrapper>
    </>
  )
}

