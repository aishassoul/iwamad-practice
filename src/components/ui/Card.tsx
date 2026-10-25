type CardProps = {
    children: React.ReactNode
  }
  
  export default function Card({ children }: CardProps) {
    return <article className="card">{children}</article>
  }