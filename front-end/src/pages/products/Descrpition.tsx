
type Props = {
  gender?: string;
  category?: string
}

export default function Descrpition({ gender, category }: Props) {
  return (
    <div >
      <p style={{ textTransform: 'capitalize' }}>{category}</p>
      <p style={{ textTransform: 'capitalize' }} >{gender} gender </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero est dolorum blanditiis adipisci numquam id sapiente at labore odit autem.</p>
    </div>
  )
}
