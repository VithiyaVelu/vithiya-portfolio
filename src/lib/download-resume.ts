import type { MouseEvent } from "react";

const FILENAME = "Vithiya_V_Resume.pdf";
let cached: Blob | null = null;
let pending: Promise<Blob | null> | null = null;

function load(url: string) {
  if (cached) return Promise.resolve(cached);
  if (!pending) {
    pending = fetch(url, { credentials: "include" })
      .then(async (r) => {
        if (!r.ok) return null;
        const b = await r.blob();
        if (!b.type.includes("pdf") && b.size < 10_000) return null;
        cached = new Blob([b], { type: "application/pdf" });
        return cached;
      })
      .catch(() => null)
      .finally(() => {
        pending = null;
      });
  }
  return pending;
}

export function prefetchResume(url: string) {
  void load(url);
}

function save(blob: Blob) {
  const href = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = href;
  a.download = FILENAME;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(href), 30_000);
}

export function handleResumeClick(e: MouseEvent<HTMLAnchorElement>, url: string) {
  e.preventDefault();
  if (cached) return save(cached);
  load(url).then((b) => {
    if (b) save(b);
    else window.open(url, "_blank", "noopener");
  });
}
