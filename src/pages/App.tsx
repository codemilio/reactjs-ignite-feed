import { Header } from '../components/Header'
import { PostList } from '../components/PostList'
import { Sidebar } from '../components/Sidebar'
import { Wrapper } from '../components/Wrapper'

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