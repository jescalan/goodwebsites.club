import s from "./style.module.css";

export default function IndexPage() {
  return (
    <main className={s.root}>
      <h1>💖 Good Websites Club 💖</h1>
      <p>
        We are an open community of web developers aiming to build great
        websites at any scale. Lots more goodness coming here soon. Want to get
        involved?{" "}
        <a href="https://join.slack.com/t/newworkspace-mqe4911/shared_invite/zt-shzvrkyb-YTxPXyvwJwFpOZJAaZES8w">
          Join our community on slack
        </a>
      </p>
    </main>
  );
}
