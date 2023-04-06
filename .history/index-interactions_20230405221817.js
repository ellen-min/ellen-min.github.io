/**
 * @author Ellen Min
 * Last updated: 04-05-2023
 * This is the javascript page for index.html for my personal website.
 */

(function () {
  "use strict";

  function init() {
    id("myname").addEventListener("mouseout", toggleName);
    id("mynamehidden").addEventListener("mouseover", toggleName);
  }

  function toggleName() {
    id("myname").classList.toggle("hidden");
    id("mynamehidden").classList.toggle("hidden");
  }

  init();
})();
