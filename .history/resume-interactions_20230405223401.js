/**
 * @author Ellen Min
 * Last updated: 04-05-2023
 * This is the javascript page for resume.html for my personal website.
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
    companyName.classList.toggle("highlighted");

    let descriptions = this.querySelectorAll("p");
    for (let i = 0; i < descriptions.length; i++) {
      let currDesc = descriptions[i];
      if (currDesc.querySelectorAll("a").length == 0) {
        currDesc.classList.toggle("highlightedDescrip");
      } else {
        currDesc.classList.toggle("workex");
      }
    }

    this.querySelector("h3").classList.toggle("highlightedLoc");
    this.querySelector("h4").classList.toggle("highlightedLoc"); // terrible style fix later
  }

  function toggleHighlight() {
    let companyName = this.querySelector("h2");
    companyName.classList.toggle("highlighted");

    let descriptions = this.querySelectorAll("p");
    for (let i = 0; i < descriptions.length; i++) {
      let currDesc = descriptions[i];
      if (currDesc.querySelectorAll("a").length == 0) {
        currDesc.classList.toggle("highlightedDescrip");
      } else {
        currDesc.classList.toggle("workex");
      }
    }

    this.querySelector("h3").classList.toggle("highlightedLoc");
    this.querySelector("h4").classList.toggle("highlightedLoc"); // terrible style fix later
  }

  init();
})();
