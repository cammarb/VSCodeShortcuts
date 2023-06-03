import { Link } from "@fluentui/react-components";

export default function Navbar() {
  return (
    <nav className="flex ">
      <div className="m-1 flex items-center gap-1">
        <img
          src="VSCodeIcon.png"
          alt="Visual Studio Code Icon"
          className="w-6"
        />
        <h3>Visual Studio Code</h3>
      </div>
      <div className="m-1 flex items-center gap-4">
        <Link appearance="subtle" href="https://code.visualstudio.com/docs">
          Docs
        </Link>
        <Link
          appearance="subtle"
          href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf"
        >
          PDF
        </Link>
        <Link
          appearance="subtle"
          href="https://github.com/cammarb/VSCodeShortcuts"
        >
          GitHub
        </Link>
      </div>
    </nav>
  );
}
