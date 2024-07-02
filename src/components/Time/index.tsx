import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

type Props = {
  publishedAt: Date 
}

export function Time({ publishedAt }: Props ) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    includeSeconds: true,
    addSuffix: true,
    locale: ptBR
  })

  return (
    <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
      {publishedDateRelativeToNow}
    </time>
  )
}