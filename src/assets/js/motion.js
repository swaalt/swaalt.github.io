import { animate, scroll } from "motion";

document.querySelectorAll("section > div").forEach((item) => {
  scroll(animate(item, { opacity: [0, 1, 1, 0] }), {
    target: item,
    offset: ["start end", "end end", "start start", "end start"]
  });
});
