/* global d3 */

var pt = pt || {};

pt.slideIdToFunctions = {
  'sketch-lines': {
    init: () => {
      pt.sketchLines.init();
    },
    '-1': () => {
      // all the lines positioned by character, and also their names
      var animateBefore = true;
      var triggerForce = true;
      pt.sketchLines.drawLines(hamiltonAllLines, animateBefore, triggerForce);
      pt.sketchLines.drawSongs(hamiltonCharacters, 'middle');
      pt.sketchLines.drawStaffs([]);
      pt.sketchLines.drawCurves([]);
      pt.sketchLines.drawThemes([]);
    },
    0: () => {
      // lines grouped consecutively
      // positioned by character, and also their names
      var animateBefore = true;
      var triggerForce = true;
      pt.sketchLines.drawLines(hamiltonGroupedLines, animateBefore, triggerForce);
      pt.sketchLines.drawSongs(hamiltonCharacters, 'middle');
      pt.sketchLines.drawStaffs([]);
      pt.sketchLines.drawCurves([]);
      pt.sketchLines.drawThemes([]);
    },
    1: () => {
      // fade in sketch notes, do no animating
      var animateBefore = false;
      var triggerForce = true;
      pt.sketchLines.drawLines(hamiltonGroupedLines, animateBefore, triggerForce);
      pt.sketchLines.drawSongs(hamiltonCharacters, 'middle');
      pt.sketchLines.drawStaffs([]);
      pt.sketchLines.drawCurves([]);
      pt.sketchLines.drawThemes([]);
      // so lower opacity of everything
      pt.sketchLines.lowerOpacity();
    },
    2: () => {
      pt.sketchLines.drawSongs([], 'start');
      pt.sketchLines.drawStaffs([]);
      pt.sketchLines.drawCurves([]);
      pt.sketchLines.drawThemes([]);

      var animateBefore = false;
      var triggerForce = true;
      // fade out sketch notes and first try at rectangular lines
      // don't animate path before re-positioning
      pt.sketchLines.drawLines(hamiltonLines, animateBefore, triggerForce, () => {
        pt.sketchLines.drawSongs(hamiltonSongs, 'start');
      });
    },
    3: () => {
      // add in diamond theme, but nothing else should animate
      var animateBefore = false;
      var triggerForce = false;
      pt.sketchLines.drawLines(hamiltonLines, animateBefore, triggerForce)
      pt.sketchLines.drawSongs(hamiltonSongs, 'start');
      pt.sketchLines.drawStaffs([]);
      pt.sketchLines.drawCurves([]);
      pt.sketchLines.drawThemes(hamiltonThemes);
    },
    4: () => {
      // fade in second sketch note, do no animating
      var animateBefore = false;
      var triggerForce = true;
      pt.sketchLines.drawLines(hamiltonLines, animateBefore, triggerForce)
      pt.sketchLines.drawSongs(hamiltonSongs, 'start');
      pt.sketchLines.drawStaffs([]);
      pt.sketchLines.drawCurves([]);
      pt.sketchLines.drawThemes(hamiltonThemes);
      pt.sketchLines.lowerOpacity();
    },
    5: () => {
      pt.sketchLines.drawSongs([], 'start');
      pt.sketchLines.drawThemes([]);

      // fade out sketch notes, animate in final lines and background staff and themes
      var animateBefore = false;
      var triggerForce = true;
      pt.sketchLines.drawLines(hamiltonFinalLines, animateBefore, triggerForce, () => {
        pt.sketchLines.drawSongs(hamiltonFinalSongs, 'start');
        pt.sketchLines.drawStaffs(hamiltonFinalSongs);
        pt.sketchLines.drawCurves(hamiltonFinalThemes);
      });
    },
    6: () => {
      // take away staff finally
      var animateBefore = false;
      var triggerForce = false;
      pt.sketchLines.drawLines(hamiltonFinalLines, animateBefore, triggerForce);
      pt.sketchLines.drawSongs(hamiltonFinalSongs, 'start');
      pt.sketchLines.drawCurves(hamiltonFinalThemes);
      pt.sketchLines.drawStaffs([]);
    },
  }
};

function removeSVGs() {

  //Remove (heavy) all existing svg currently running

}//removeSVGs
