import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import FormSection from "./components/FormSection";
import ViewSection from "./components/ViewSection";

function App() {
  const [showViewSection, setShowViewSection] = useState(false);
  const ref = useRef();

  const makeSectionVisibleNScrollable = () => {
    setShowViewSection(true);
    if (ref.current)
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (ref.current)
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [ref, showViewSection]);

  return (
    <>
      <section className="sectionContainer">
        <FormSection showSection={makeSectionVisibleNScrollable} />
      </section>
      {showViewSection && (
        <section ref={ref} className="viewSectionContainer">
          <ViewSection />
        </section>
      )}
    </>
  );
}

export default App;
