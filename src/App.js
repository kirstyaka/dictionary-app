import './App.css';
import logo from "./logo.png";
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>
        Coded by Kirsty Akahoho <a href="https://github.com/kirstyaka/dictionary-app" target="_blank">open-sourced on GitHub</a>
        </small>
      </footer>
      </div>
    </div>
  );
}