import { useEffect, useMemo, useRef, useState, type CSSProperties, type JSX } from "react";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: string;
  from?: CSSProperties;
  to?: CSSProperties;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "center" | "right";
  tag?: keyof JSX.IntrinsicElements;
  onLetterAnimationComplete?: () => void;
};

const SplitText = ({
  text,
  className = "",
  delay = 50,
  duration = 0.8,
  ease = "cubic-bezier(0.22, 1, 0.36, 1)",
  splitType = "chars",
  from = { opacity: 0, transform: "translateY(20px)" },
  to = { opacity: 1, transform: "translateY(0)" },
  threshold = 0.15,
  rootMargin = "0px",
  textAlign = "center",
  tag = "p",
  onLetterAnimationComplete,
}: SplitTextProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  const tokens = useMemo(() => {
    if (splitType.includes("words")) {
      return text.split(" ").map((word, idx, arr) => `${word}${idx < arr.length - 1 ? " " : ""}`);
    }
    return Array.from(text);
  }, [splitType, text]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Replay every time the element enters the viewport
        setInView(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  useEffect(() => {
    if (!inView || !onLetterAnimationComplete) return;
    const totalDelay = (tokens.length - 1) * delay + duration * 1000;
    const timeout = window.setTimeout(() => onLetterAnimationComplete(), totalDelay);
    return () => window.clearTimeout(timeout);
  }, [delay, duration, inView, onLetterAnimationComplete, tokens.length]);

  const Tag = tag;

  return (
    <Tag
      ref={ref as never}
      className={`split-parent ${className}`}
      style={{ textAlign, display: "inline-block", whiteSpace: "pre-wrap" }}
    >
      {tokens.map((token, idx) => (
        <span
          key={`${token}-${idx}`}
          style={{
            display: "inline-block",
            willChange: "transform, opacity",
            transitionProperty: "transform, opacity",
            transitionDuration: `${duration}s`,
            transitionTimingFunction: ease,
            transitionDelay: inView ? `${(idx * delay) / 1000}s` : "0s",
            ...(inView ? to : from),
          }}
        >
          {token}
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;
