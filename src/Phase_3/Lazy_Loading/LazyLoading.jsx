import { lazy, Suspense, useState } from "react";

const About = lazy(() => import("./About"));

function LazyLoading() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div>
      <h1>Lazy Loading Example</h1>

      <button onClick={() => setShowAbout(true)}>
        Show About
      </button>

      {showAbout && (
        <Suspense fallback={<p>Loading About...</p>}>
          <About />
        </Suspense>
      )}
    </div>
  );
}

export default LazyLoading;