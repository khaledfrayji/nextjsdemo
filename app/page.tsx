"use client";

import { useState } from "react";
import dynamic from "next/dynamic";


const MonacoEditor = dynamic(
  () => import("@monaco-editor/react").then((mod) => mod.default),
  { ssr: false }
);

const reactRouterCode = `// index.js (React App entry)
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// App.js
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

// Navbar.js
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-800 text-white">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;

// Home.js
export default function Home() {
  return <h2>Home Page</h2>;
}

// About.js
export default function About() {
  return <h2>About Page</h2>;
}

// Contact.js
export default function Contact() {
  return <h2>Contact Page</h2>;
}
`;

const Page = () => {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen text-white font-sans p-8 space-y-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-cyan-300">
          Next.js Bootcamp  Session #3
        </h1>
      </header>

      <section className="space-y-8">
        <div className="bg-gray-800 p-6 rounded-lg border border-cyan-600">
          <h2 className="text-2xl font-semibold text-cyan-200">Overview</h2>
          <p className="mt-2 text-lg text-slate-300">
            In today’s session we will explore the App Router folder and routing
            in Next.js: how it works, how routing used to work before the App
            Router, and how this compares to routing in a typical React
            application.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-indigo-600">
          <h2 className="text-2xl font-semibold text-indigo-200">
            Routing Before the App Router
          </h2>
          <p className="mt-2 text-lg text-slate-300">
            Until Next.js 12, the primary routing system was the Pages Router...
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-violet-600">
          <h2 className="text-2xl font-semibold text-violet-200">
            Routing in React vs Next.js
          </h2>
          <p className="mt-2 text-lg text-slate-300">
            In a standard React application, routing is not built into the
            framework itself. Libraries like React Router provide routing
            capabilities to define UI navigation...
          </p>

          {/* Code Editor in place of the image */}
          <div className="border border-slate-700 rounded-lg overflow-hidden mt-4">
            <MonacoEditor
              height="350px"
              defaultLanguage="javascript"
              defaultValue={reactRouterCode}
              options={{
                readOnly: true,
                fontSize: 14,
                minimap: { enabled: false },
                automaticLayout: true,
              }}
            />
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-emerald-600">
          <h2 className="text-2xl font-semibold text-emerald-200">
            App Router and Routing in Next.js 16
          </h2>
          <p className="mt-2 text-lg text-slate-300">
            Next.js 16 builds on the App Router introduced in Next.js 13...
          </p>
        </div>
      </section>

      <footer className="mt-12">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-5 rounded"
        >
          Click count: {count}
        </button>
      </footer>
    </main>
  );
};

export default Page;
