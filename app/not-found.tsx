import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        border: "1px solid blue",
      }}
    >
      <div style={{}}>
        <h1 style={{ fontFamily: "var(--outfit)", textAlign: "center" }}>
          404
        </h1>
        <p style={{ textAlign: "center" }}>
          Oops! This page doesn&apos;t exist.
        </p>
        <Link href="/">
          <p style={{ textAlign: "center" }}>Go Home</p>
        </Link>
      </div>
    </div>
  );
}
