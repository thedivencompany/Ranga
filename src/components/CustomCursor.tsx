import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.3 });
  const tx = useSpring(x, { stiffness: 120, damping: 20 });
  const ty = useSpring(y, { stiffness: 120, damping: 20 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      setHover(!!t.closest("[data-cursor='hover'], a, button"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <>
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hover ? 1.6 : 1, opacity: hover ? 0.9 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="h-2.5 w-2.5 rounded-full bg-primary-deep"
        />
      </motion.div>
      <motion.div
        style={{ x: tx, y: ty }}
        className="pointer-events-none fixed left-0 top-0 z-[99] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hover ? 2.4 : 1, opacity: hover ? 0.4 : 0.25 }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
          className="h-10 w-10 rounded-full border border-primary"
        />
      </motion.div>
    </>
  );
}