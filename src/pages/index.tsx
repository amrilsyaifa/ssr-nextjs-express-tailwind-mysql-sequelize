import Nav from '../components/nav'
import api from '../api'

export default function IndexPage({ names }) {
  console.log('isi props', names)
  return (
    <div>
      <Nav />
      <div className="hero">
        <h1 className="title">Next.js + Tailwind CSS</h1>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await api('/users');
  return { props: { names: res } }
}

