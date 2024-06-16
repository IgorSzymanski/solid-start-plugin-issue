import { A } from '@solidjs/router'

export default function Index() {
  return (
    <>
      This is the Index page
      <ul>
        <li><A href="/typescript">TypeScript</A></li>
        <li><A href="/civet">Civet</A></li>
        <li><A href="/civet-but-typescript">Civet but in TypeScript</A></li>
      </ul>
    </>
    )
}
