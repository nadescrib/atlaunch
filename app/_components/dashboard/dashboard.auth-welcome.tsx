import Image from "next/image";

export default function AuthWelcome() {
  return (
    <div className="auth-welcome">
      <Image
        src={"/images/user-4.png"}
        alt="Profile Picture"
        width={72}
        height={72}
        className="profile-picture"
      />
      <div className="content">
        <p>Hello again,</p>
        <p>John Doe</p>
      </div>
    </div>
  );
}
