/**
samlorem
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Countdown timer
   */
    let countdown = select('.countdown');
const output = countdown.innerHTML;

const countDownDate = function() {
  let timeleft = new Date('Jan 1, 2026 01:00:00').getTime() - new Date().getTime();
    // days
  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    // hours
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // minutes
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    // seconds
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


  countdown.innerHTML = output.replace('%d', days).replace('%h', hours).replace('%m', minutes).replace('%s', seconds);
}
countDownDate();
setInterval(countDownDate, 1000);


})()