import { ComponentType, useEffect, useRef, useState } from "react";

interface LazyMockProps {
  Mock: ComponentType<{ activePanel?: number }>;
  activePanel?: number;
  minHeight?: number;
}

const LazyMock = ({ Mock, activePanel = 0, minHeight = 340 }: LazyMockProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: visible ? undefined : minHeight }}>
      {visible ? <Mock activePanel={activePanel} /> : null}
    </div>
  );
};

export default LazyMock;
