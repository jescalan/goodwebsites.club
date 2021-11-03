import FrankTaillandierTribute from 'components/frank-tribute'
import Head from 'next/head'
import s from './style.module.css'

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Good Websites Club</title>
      </Head>
      <main className={s.root}>
        <h1>💖 Good Websites Club 💖</h1>
        <p>
          We are an open community of web developers aiming to build great
          websites at any scale. Lots more goodness coming here soon. Want to
          get involved?{' '}
          <a href="https://discord.gg/8uWUGS4G7A">
            Join our community on discord
          </a>
        </p>
      </main>
      <FrankTaillandierTribute />
    </>
  )
}
