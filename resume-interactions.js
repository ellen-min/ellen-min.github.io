/**
 * @author Ellen Min
 * Last updated: 04-05-2023
 * interactive javascript page for resume.html
 */

(function () {
  "use strict";

  function init() {
    let allExperiences = qsa("div.experience");
    for (let i = 0; i < allExperiences.length; i++) {
      // not using toggle due to bug ... fix later
      allExperiences[i].addEventListener("mouseover", addHighlight);
      allExperiences[i].addEventListener("mouseout", removeHighlight);
    }
  }

  function addHighlight() {
    let companyName = this.querySelector("h2");
    companyName.classList.add("highlighted");

    let descriptions = this.querySelectorAll("p");
    for (let i = 0; i < descriptions.length; i++) {
      let currDesc = descriptions[i];
      if (currDesc.querySelectorAll("a").length == 0) {
        currDesc.classList.add("highlightedDescrip");
      } else {
        currDesc.classList.remove("workex");
      }
    }

    this.querySelector("h3").classList.add("highlightedLoc");
  }

  function removeHighlight() {
    let companyName = this.querySelector("h2");
    companyName.classList.remove("highlighted");

    let descriptions = this.querySelectorAll("p");
    for (let i = 0; i < descriptions.length; i++) {
      let currDesc = descriptions[i];
      if (currDesc.querySelectorAll("a").length == 0) {
        currDesc.classList.remove("highlightedDescrip");
      } else {
        currDesc.classList.add("workex");
      }
    }

    this.querySelector("h3").classList.remove("highlightedLoc");
    this.querySelector("h4").classList.remove("highlightedLoc");
  }

  init();
})();
