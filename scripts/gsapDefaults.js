// #######################################################
// #######################################################
// Highlight all of the code and just uncomment it all.
// Highlight all of the code and just uncomment it all.
// Highlight all of the code and just uncomment it all.
// #######################################################
// #######################################################

// Comment out any lines that you don't need.
import { gsap } from "gsap/dist/gsap";
import { Flip } from "gsap/dist/Flip";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Observer } from "gsap/dist/Observer";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { ScrambleTextPlugin } from "gsap/dist/ScrambleTextPlugin";
import { SplitText } from "gsap/dist/SplitText";

// Adding licensed GSAP files
// Use UMD/CommonJS for importing
// Use the ZIP file method:
// 1. Put the gsap-bonus.tgz file (found in the npm-install-this directory) in the root directory of your project.
// 2. yarn add ./gsap-bonus.tgz
// Using the ZIP file method prevents other developers from using your license because node_module files are not included in GitHub.

gsap.registerPlugin(
  Flip,
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  ScrollSmoother, // ScrollSmoother must be applied to EVERY page.
  ScrambleTextPlugin,
  SplitText
);

gsap.defaults({
  duration: 1.2,
});

export * from "gsap/dist/gsap";
export * from "gsap/dist/Flip";
export * from "gsap/dist/ScrollTrigger";
export * from "gsap/dist/Observer";
export * from "gsap/dist/ScrollToPlugin";
export * from "gsap/dist/ScrollSmoother";
export * from "gsap/dist/ScrambleTextPlugin";
export * from "gsap/dist/SplitText";

gsap.registerEffect({
  name: "reveal",
  effect: (targets, config) => {
    return gsap.fromTo(
      targets,
      { x: config.x, y: config.y, autoAlpha: 0 },
      { x: 0, y: 0, autoAlpha: 1 }
    );
  },
  defaults: { duration: 1.2, x: 0, y: 0 }, //defaults get applied to any "config" object passed to the effect
  extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
});

gsap.registerEffect({
  name: "scramble",
  effect: (targets, config) => {
    return gsap.to(targets, {
      scrambleText: {
        text: config.final,
        chars: "lowerCase",
        revealDelay: 0.5,
      },
    });
  },
});
