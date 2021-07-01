import s from "./style.module.css";

export default function IndexPage() {
  return (
    <main className={s.root}>
      <h1>💖 Good Websites Club 💖</h1>
      <p>
        We are an open community of web developers aiming to build great
        websites at any scale. Lots more goodness coming here soon. Want to get
        involved? <a href="https://twitter.com/jescalan">Drop Jeff a DM</a>
      </p>
    </main>
  );
}
