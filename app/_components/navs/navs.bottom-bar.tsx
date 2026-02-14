import { House, Rocket, UserRound } from "lucide-react";
import Link from "next/link";

export default function BottomBar() {
  return (
    <nav className="bottom-bar">
      <ul>
        <li>
          <Link href={"/"}>
            <House size={32} color="var(--teal900)" />
            <span className="link-label">Home</span>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <Rocket size={32} color="var(--teal900)" />
            <span className="link-label">Launch</span>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <UserRound size={32} color="var(--teal900)" />
            <span className="link-label">Me</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
