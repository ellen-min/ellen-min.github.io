/**
 * @author Ellen Min
 * Last updated: 04-05-2023
 * This is the javascript page for projects.html for my personal website.
 */

(function () {
  "use strict";

  function init() {
    let allProjects = qsa("div.project");
    for (let i = 0; i < allProjects.length; i++) {
      // not using toggle due to bug ... fix later
      allProjects[i].addEventListener("mouseover", addHighlight);
      allProjects[i].addEventListener("mouseout", removeHighlight);
    }
  }

  function addHighlight() {
    this.querySelector("h2").classList.add("highlighted");

    let descriptions = this.querySelectorAll("p");
    for (let i = 0; i < descriptions.length; i++) {
      let currDesc = descriptions[i];
      if (currDesc.querySelectorAll("a").length == 0) {
        currDesc.classList.add("highlightedDescrip");
      } else {
        currDesc.classList.remove("workex");
      }
    }
  }

  function removeHighlight() {
    this.querySelector("h2").classList.remove("highlighted");

    let descriptions = this.querySelectorAll("p");
    for (let i = 0; i < descriptions.length; i++) {
      let currDesc = descriptions[i];
      if (currDesc.querySelectorAll("a").length == 0) {
        currDesc.classList.remove("highlightedDescrip");
      } else {
        currDesc.classList.add("workex");
      }
    }
  }

  init();
})();
