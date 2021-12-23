import Link from "next/link"

function Home() {
  return(
    <>
      <h1>Next JS Pre-rendering</h1>
      <br />
      <Link href='/posts'>
        <a>Posts</a>
      </Link>
    </>
  )
}

export default Home
