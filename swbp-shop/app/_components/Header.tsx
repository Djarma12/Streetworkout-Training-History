import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="flex justify-between px-16">
      <span>Logo</span>
      <Navigation />
    </div>
  );
}
