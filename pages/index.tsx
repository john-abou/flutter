import Link from 'next/link';


export default function IndexPage() {
  return (
    <div>
      <h1>Flutter</h1>
      <ul>
        <li>
          <Link href="/user/profile">
            <a>First</a>
          </Link>
        </li>
        <li>
          <Link href="/user/settings">
            <a>Second</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}