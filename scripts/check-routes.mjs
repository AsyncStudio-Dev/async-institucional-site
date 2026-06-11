import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../src/routes/paths.ts", import.meta.url), "utf8");
const match = source.match(/localizedPaths[^=]*=\s*({[\s\S]*?});/);

assert.ok(match, "localizedPaths export was not found");

const localizedPaths = Function(`"use strict"; return (${match[1]});`)();
const pageKeys = ["home", "services", "projects", "about", "contact"];

assert.deepEqual(Object.keys(localizedPaths.pt).sort(), [...pageKeys].sort());
assert.deepEqual(Object.keys(localizedPaths.en).sort(), [...pageKeys].sort());
assert.deepEqual(localizedPaths.pt, {
  home: "/",
  services: "/servicos",
  projects: "/projetos",
  about: "/sobre",
  contact: "/contato",
});
assert.deepEqual(localizedPaths.en, {
  home: "/en",
  services: "/en/services",
  projects: "/en/projects",
  about: "/en/about",
  contact: "/en/contact",
});

console.info("Route smoke checks passed");
