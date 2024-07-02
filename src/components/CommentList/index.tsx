import { Comment } from "./comment";
import type { IComment } from "../../utils/types";

type Props = {
  comments: IComment[]
}

export function CommentList({ comments }: Props) {

  return(
    <>
      {comments.map(data => <Comment {...data} key={data.id}/>)}
    </>
  )
}