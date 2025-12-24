import { useEffect, useState } from "react";

export default function useScrollSpy(
  selector = "main[id]",
  threshold = 0.6
) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        let found = false;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            found = true;
            setActiveSection(entry.target.id);
          }
        });

        if (!found) setActiveSection("");
      },
      { threshold }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [selector, threshold]);

  return activeSection;
}
