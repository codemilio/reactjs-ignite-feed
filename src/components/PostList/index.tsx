import { IPost } from '../../utils/types'
import { Post } from './post'

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
      {
        type: 'PARAGRAPH',
        content: 'Meu post bla bla bla'
      },
      {
        type: 'PARAGRAPH',
        content: 'More content lorem ipsom blas sbasde salm...'
      },
      {
        type: 'LINK',
        content: '#ignite'
      },
      {
        type: 'LINK',
        content: '#hashtag'
      },
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