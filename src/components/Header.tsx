import Link from "next/link";

export default function Header () {
  return (
    <nav>
      <Link href="/">HOME</Link>
      <Link href="/faq">FAQ</Link>
    </nav>
  )
}