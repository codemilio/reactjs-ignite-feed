import { IPost } from '../../utils/types'
import { Post } from '../Post'

const postList: IPost[] = [
  {
    id: 'first-123123124',
    author: {
      name: 'Carlos Emilio',
      avatarUrl: 'https://github.com/codemilio.png',
      role: 'Desenvolvedor Web'
    },
    publishedAt: new Date(),
    content: [
      'Meu post bla bla bla',
      'more content lorem ipsom blas sbasde salm'
    ]
  }
]

export function PostList(){
  return(
    <main>
      {postList.map((data) => <Post key={data.id} {...data} />)}
    </main>
  )
}