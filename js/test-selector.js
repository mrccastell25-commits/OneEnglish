function startQuick() {
  loadScript("js/quick-test.js");
}

function startProfessional() {
  loadScript("js/professional-test.js");
}

function loadScript(src) {
  const s = document.createElement("script");
  s.src = src;
  document.body.appendChild(s);
}
