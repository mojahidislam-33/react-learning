import { lazy, Suspense } from "react";

const About=lazy(()=> import ("./About"))

function SuspenseExample() {
  return (
    <div>
      <h2>Suspense Example</h2>

      <Suspense fallback={<p>Loading About...</p>}>
        <About />
      </Suspense>
    </div>
  );
}

export default SuspenseExample;