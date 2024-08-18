import Link from "next/link";

export default function Logo() {
  return (
    <Link href={'/'} className="flex gap-1">
      <span className="deewall_logp">
        Deepwall
      </span>
    </Link>
  );
}