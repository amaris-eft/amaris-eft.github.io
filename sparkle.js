/* Sparkle cursor trail — add <script src="sparkle.js"></script> before </body> */
(function () {
  // Skip on touch devices and for people who prefer reduced motion
  if (window.matchMedia("(pointer: coarse)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // ---- Customize here ----
  var COLORS = ["#f5c542", "#f7a8c4", "#c9b6f2", "#ffffff"]; // gold, pink, lavender, white
  var MIN_SIZE = 8;      // px
  var MAX_SIZE = 16;     // px
  var SPACING = 14;      // px the mouse must move before a new sparkle appears
  var MAX_SPARKLES = 40; // cap on screen at once
  // ------------------------

  var style = document.createElement("style");
  style.textContent =
    ".sparkle{position:fixed;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);" +
    "animation:sparkle-fade 800ms ease-out forwards;}" +
    ".sparkle svg{display:block;width:100%;height:100%;filter:drop-shadow(0 0 2px rgba(0,0,0,.25));}" +
    "@keyframes sparkle-fade{" +
    "0%{opacity:1;transform:translate(-50%,-50%) scale(0) rotate(0deg);}" +
    "30%{opacity:1;transform:translate(-50%,-50%) scale(1) rotate(45deg);}" +
    "100%{opacity:0;transform:translate(calc(-50% + var(--dx)),calc(-50% + var(--dy))) scale(.3) rotate(120deg);}}";
  document.head.appendChild(style);

  var STAR =
    '<svg viewBox="0 0 24 24"><path fill="COLOR" d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0Z"/></svg>';

  var lastX = 0, lastY = 0, count = 0;

  document.addEventListener("mousemove", function (e) {
    var dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
    if (dist < SPACING || count >= MAX_SPARKLES) return;
    lastX = e.clientX;
    lastY = e.clientY;

    var size = MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE);
    var el = document.createElement("span");
    el.className = "sparkle";
    el.style.left = e.clientX + (Math.random() * 12 - 6) + "px";
    el.style.top = e.clientY + (Math.random() * 12 - 6) + "px";
    el.style.width = el.style.height = size + "px";
    el.style.setProperty("--dx", (Math.random() * 30 - 15) + "px");
    el.style.setProperty("--dy", (Math.random() * 20 + 10) + "px"); // drifts downward like falling glitter
    el.innerHTML = STAR.replace("COLOR", COLORS[Math.floor(Math.random() * COLORS.length)]);

    document.body.appendChild(el);
    count++;
    el.addEventListener("animationend", function () {
      el.remove();
      count--;
    });
  });
})();
