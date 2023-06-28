export default function Nav({ position }) {
  return (
    <>
      <nav>
        <ul className={`${position}-nav`}>
          <li>
            <a href="...">Women's</a>
          </li>
          <li>
            <a href="...">Men's</a>
          </li>
          <li>
            <a href="...">On the Street</a>
          </li>
          <li>
            <a href="...">The Catwalk</a>
          </li>
          <li>
            <a href="...">AdWatch</a>
          </li>
          <li>
            <a href="...">About</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
