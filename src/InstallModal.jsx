import { useEffect, useState } from "react";

function InstallModal() {
  const [prompt, setPrompt] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const installApp = async () => {
    if (!prompt) return;
    prompt.prompt();
    await prompt.userChoice;
    setPrompt(null);
  };

  if (!prompt) return null;

  return (
    <div className="install-modal">
      <div className="box">
        <h5>Add CuboidSoft to Home Screen</h5>
        <p>Install our app for quick access.</p>
        <button className="btn btn-primary bg-lblue" onClick={installApp}>Install</button>
      </div>
    </div>
  );
}

export default InstallModal;
