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
          <a href="https://join.slack.com/t/goodwebsitesclub/shared_invite/zt-u26d7jmd-tklVH7bWjM28dfzJVLLKSA">
            Join our community on slack
          </a>
        </p>
      </main>
    </>
  )
}
