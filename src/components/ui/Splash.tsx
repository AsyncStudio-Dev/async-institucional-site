"use client";

import { useEffect, useState } from "react";
import { Mark } from "../brand/Mark";

const STORAGE_KEY = "async-studio-intro-seen";

type Phase = "idle" | "playing" | "leaving" | "done";

export function Splash() {
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    let alreadySeen = true;
    try {
      alreadySeen = sessionStorage.getItem(STORAGE_KEY) === "true";
    } catch {
      alreadySeen = true;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const release = () => {
      document.documentElement.removeAttribute("data-intro-pending");
    };

    if (alreadySeen || prefersReducedMotion) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "true");
      } catch {
        // sessionStorage indisponível (modo privado, etc.) — segue sem travar a introdução
      }
      release();
      setPhase("done");
      return;
    }

    document.body.setAttribute("data-intro-active", "true");
    setPhase("playing");

    const leaveTimer = setTimeout(() => setPhase("leaving"), 1100);
    const doneTimer = setTimeout(() => {
      try {
        sessionStorage.setItem(STORAGE_KEY, "true");
      } catch {
        // ok, apenas repete a introdução na próxima visita
      }
      release();
      document.body.removeAttribute("data-intro-active");
      setPhase("done");
    }, 1550);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "idle" || phase === "done") {
    return null;
  }

  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-deep-forest transition-opacity duration-[400ms] ease-out ${
        phase === "leaving" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <Mark className="h-14 w-14 animate-fade-up text-async-green sm:h-16 sm:w-16" />
      <p className="font-display mt-5 animate-fade-in text-sm font-medium tracking-[0.02em] text-mint-white opacity-0 [animation-delay:280ms]">
        async<span className="font-normal text-mint-white/55"> studio</span>
      </p>
    </div>
  );
}
