/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

//Needs  to be removed after development 
__webpack_require__(5);

window.onscroll = function (event) {
  //Check scroll up or down 
  var elements = document.querySelectorAll(".content");
  for (var i = 0; i < elements.length; ++i) {
    var el = elements[i];
    if (_isVisible(el)) {
      el.style["overflow-y"] = "scroll";
    } else {

      el.style["overflow-y"] = "hidden";
    }
  }
};

// grab elements as array, rather than as NodeList
var elements = document.querySelectorAll(".content");
for (var i = 0; i < elements.length; ++i) {
  elements[i].onscroll = function (event) {
    var el = event.target;
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;
    if (elemTop < window.innerHeight && elemBottom >= 0) {
      el.parentElement.scrollIntoView({ behavior: "auto", block: "start", inline: "nearest" });
    }
  };
}

var _isVisible = function _isVisible(el) {
  var elemTop = el.getBoundingClientRect().top;
  var elemBottom = el.getBoundingClientRect().bottom;

  // Only completely visible elements return true:
  // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  // Partially visible elements return true:
  var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
};

var elements = document.querySelectorAll(".pages");
for (var i = 0; i < elements.length; ++i) {
  elements[i].style["min-height"] = window.innerHeight + "px";
}

var arrowElement = document.querySelectorAll(".arrow")[0];
arrowElement.onclick = function (event) {
  location.href = "#about";
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\r\n<html>\r\n\r\n<head>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width\">\r\n    <title>Mouli seerangan</title>\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n</head>\r\n\r\n<body>\r\n    <header class='menuBar'>\r\n        <div class='brand-container'><a href='#home_page'><span class='brand-initials'>MS</span><span class='brand-name'>Mouli Seerangan</span></a></div>\r\n        <nav>\r\n            <div class='nav-container'>\r\n                <div><a class='slide' href='#about_page'><span class='element'><i class=\"fa fa-fire fa-2x\" aria-hidden=\"true\"></i></span><span class='name'>About</span></a></div>\r\n                <div><a class='slide' href='#projects_page'><span class='element'><i class=\"fa fa-book fa-2x\" aria-hidden=\"true\"></i></span><span class='name'>Projects</span></a></div>\r\n                <div><a class='slide' href='#portfolio_page'><span class='element'><i class=\"fa fa-tags  fa-2x\" aria-hidden=\"true\"></i></span><span class='name'>Portfolio</span></a></div>\r\n                <div><a class='slide' href='#contacts_page'><span class='element'><i class=\"fa fa-envelope-open-o  fa-2x\" aria-hidden=\"true\"></i></span><span class='name'>Contact</span></a></div>\r\n                <!-- <div><a class='slide' href='#'><span class='element'>C</span><span class='name'>Contact</span></a></div>--></div>\r\n        </nav>\r\n    </header>\r\n    <section class=\"pages\" id='home_page'>\r\n        <div id=\"bgTile\">\r\n            <div id=\"infoPage\">\r\n                <div id=\"imageDiv\"><img src=\"src/css/img/Photo.jpg\" alt=\"profile Pic\" width=\"164\" height=\"164\" /></div>\r\n                <h1>Mouli Seerangan</h1>\r\n                <h2>Web Developer,Software Engineer</h2>\r\n                <p class=\"description\">I am a web developer living in New Jersey, USA . I enjoy designing and coding web applications, running and music.\r\n                    <br>\r\n                    <br>Follow me on <a href=\"https://www.linkedin.com/in/MouliSeerangan\" target=\"_blank\">Linkedin </a>or <a href=\"https://www.twitter.com/moulisp\" target=\"_blank\">twitter</a>.</p>\r\n            </div>\r\n            <div class=\"arrow\"></div>\r\n        </div>\r\n    </section>\r\n    <section class=\"pages\" id='about_page'>\r\n        <div class=\"left-content\">\r\n            <h1>About Me</h1></div>\r\n        <div class=\"content \" id=\"about\">\r\n            <div class=\"right-content\">\r\n                <p>I’m a web developer/software engineer in New Jersey, USA. I'm originally from India and graduated in 2009 from Anna University with a B.E. in Computer Science and Engineering. Since then I have adopted, mastered and moved on from many languages, frameworks and architectures. I currently focus on Javascript heavy web application development. </p>\r\n                <p>I have worked on wide range of applications ranging from Geospatial applications to Management tools to client-server application to autimation tools. Over the years, I have developed apps for Telecommunication, Retails, Manufacturing, Insurance and Healthcare industry clients. </p>\r\n                <p>I'm a Microsoft certified Developer (Programming in HTML5 with JavaScript and CSS3) and Oracle certified profesional (Java SE 6 Programmer).\r\n                    <div id=\"certi_img_div\"><img src=\"src/css/img/MS_Certificate.png\" alt=\"Microsoft Certificate\" width=\"200\" height=\"200\" /><img src=\"src/css/img/Oracle_Certificate.png\" alt=\"Oracle Certificate\" width=\"200\" height=\"200\" /></div>\r\n                </p>\r\n                <h2>Summary :</h2>\r\n                <ul>\r\n                    <li>Lucid understanding and Strong developing experience with HTML5, JavaScript, AJAX and CSS3.</li>\r\n                    <li>Hands-on experience in JavaScript frameworks like DOJO, React and JQuery.</li>\r\n                    <li>Developed application using XML/JSON to link with back-end applications.</li>\r\n                    <li>Expertise in debugging and troubleshooting existing code using Firebug and Developer Tools.</li>\r\n                    <li>Hands-on experience in AngularJS and Bootstrap. </li>\r\n                    <li>Worked in Core Java, J2EE, spring and Hibernate.</li>\r\n                    <li>Proficient in complete Software Development Life Cycle (Waterfall and Agile Methodology based projects).</li>\r\n                    <li>Possess a good ability to grasp the underlying business process, quick learning and strong analytical skill.</li>\r\n                    <li>Ability to work as an individual and easily get on with team members.</li>\r\n                    <li>Experienced in all phases of classic SDLC such as Analysis, Design, Development, Implementation and maintenance.</li>\r\n                    <li>Good communication skills with leadership quality and problem solving skills.</li>\r\n                    <li>Strong knowledge of Design Patterns including J2EE Design Patterns Singleton, MVC, Front Controller, Strategy Pattern.</li>\r\n                    <li>Research-oriented, motivated, proactive, self-starter with technical and interpersonal skills.</li>\r\n                </ul>\r\n                <h2>Technical Exposure :</h2>\r\n                <div id=\"TechTblDiv\">\r\n                    <table class=\"tecExp\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>Technologies</td>\r\n                                <td>HTML5, JavaScript, CSS3, AJAX, Servlet, JSP, JDBC, Restful.\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Frameworks </td>\r\n                                <td>DOJO, React, JQuery, AngularJS, ARCGIS JS, Bootstrap, spring, Hibernate. </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Other Tools </td>\r\n                                <td>GIT, SVN, Maven, Rational Clearcase, JIRA, Eclipse, SQL Developer.</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Database </td>\r\n                                <td>Oracle, DB2.\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Servers</td>\r\n                                <td>Tomcat, WebSphere Application Server.</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <section class=\"pages\" id='projects_page'>\r\n        <div class=\"left-content\">\r\n            <h1>Projects</h1></div>\r\n        <div class=\"content \" id=\"profile\">\r\n            <div class=\"right-content\">\r\n                <div id=\"cd-timeline\" class=\"cd-container\">\r\n                    <div class=\"cd-timeline-block\">\r\n                        <div class=\"cd-timeline-img cd-picture\"></div>\r\n                        <!-- cd-timeline-img -->\r\n                        <div class=\"cd-timeline-content\">\r\n                            <h2>Network Geographic </h2>\r\n                            <p>This application provides information on the Spatial Data and used across organization. </p>\r\n                            <!-- <a href=\"#0\" class=\"cd-read-more\">Read more</a>--><span class=\"cd-date\">2015 Oct - Present</span></div>\r\n                        <!-- cd-timeline-content -->\r\n                    </div>\r\n                    <!-- cd-timeline-block -->\r\n                    <div class=\"cd-timeline-block\">\r\n                        <div class=\"cd-timeline-img cd-movie\"></div>\r\n                        <!-- cd-timeline-img -->\r\n                        <div class=\"cd-timeline-content\">\r\n                            <h2>Product Cluster Planning Tool </h2>\r\n                            <p>This tool is a web-based solution that will enable client’s Merchandising Organization to generate and fine tune essential metrics in the Product Line Review, to align with financial goals for each category. </p><span class=\"cd-date\">2014 Mar - 2015 Sep</span></div>\r\n                        <!-- cd-timeline-content -->\r\n                    </div>\r\n                    <!-- cd-timeline-block -->\r\n                    <div class=\"cd-timeline-block\">\r\n                        <div class=\"cd-timeline-img cd-picture\"></div>\r\n                        <!-- cd-timeline-img -->\r\n                        <div class=\"cd-timeline-content\">\r\n                            <h2>Labor Promotion Management Tool </h2>\r\n                            <p>For Helping client Stores, we had developed Labor Promotions Management Tool specific for creating and managing promotions for Labor items. </p><span class=\"cd-date\">2013 June - 2014 Feb</span></div>\r\n                        <!-- cd-timeline-content -->\r\n                    </div>\r\n                    <!-- cd-timeline-block -->\r\n                    <div class=\"cd-timeline-block\">\r\n                        <div class=\"cd-timeline-img cd-location\"></div>\r\n                        <!-- cd-timeline-img -->\r\n                        <div class=\"cd-timeline-content\">\r\n                            <h2>Oxygen</h2>\r\n                            <p>Oxygen is envisaged to be an application that would help to expedite the “Creation” process. It would integrate data and systems, give users access to specific information through high level multilayered security model, improve the information flow between different user communities such as Creators, Formula Management etc. involved in the “Creation” process, thus reducing average cycle time from 10-30 business days to 5-10 business days. </p><span class=\"cd-date\">2011 Dec - 2013 June</span></div>\r\n                        <!-- cd-timeline-content -->\r\n                    </div>\r\n                    <!-- cd-timeline-block -->\r\n                    <div class=\"cd-timeline-block\">\r\n                        <div class=\"cd-timeline-img cd-location\"></div>\r\n                        <!-- cd-timeline-img -->\r\n                        <div class=\"cd-timeline-content\">\r\n                            <h2>Survey Builder</h2>\r\n                            <p>Survey Builder is internal survey tool with advanced questioning types and advance the user interface akin to leading survey site. </p><span class=\"cd-date\">2011 Jan - 2011 Nov</span></div>\r\n                        <!-- cd-timeline-content -->\r\n                    </div>\r\n                    <!-- cd-timeline-block -->\r\n                    <div class=\"cd-timeline-block\">\r\n                        <div class=\"cd-timeline-img cd-movie\"></div>\r\n                        <!-- cd-timeline-img -->\r\n                        <div class=\"cd-timeline-content\">\r\n                            <h2>Claims Call Center Initiative </h2>\r\n                            <p>This tool helps the customer care rep to quickly go through the process and help the customer to save time.</p><span class=\"cd-date\">2009 Nov - 2010 Dec</span></div>\r\n                        <!-- cd-timeline-content -->\r\n                    </div>\r\n                    <!-- cd-timeline-block -->\r\n                </div>\r\n                <!-- cd-timeline -->\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <section class=\"pages\" id=\"portfolio_page\">\r\n        <div class=\"left-content\">\r\n            <h1>Portfolio</h1></div>\r\n        <div class=\"content \" id='portfolio'>\r\n            <div class=\"right-content\">\r\n                <h1>No.1 sports</h1><img src=\"src/css/img/sports.jpg\" alt=\"No.1 sports Management\" />\r\n                <br>\r\n                <br>\r\n                <br>\r\n                <h1>Portfolio Site</h1><img src=\"src/css/img/portfolio.jpg\" alt=\"No.1 sports Management\" /></div>\r\n        </div>\r\n    </section>\r\n    <section class=\"pages\" id=\"contacts_page\">\r\n        <div class=\"left-content\">\r\n            <h1>Contact</h1></div>\r\n        <div class=\"content \" id='contact'>\r\n            <div class=\"right-content\">\r\n                <!-- <h2>Get in touch:</h2>-->\r\n                <ul>\r\n                    <li><a href=\"mailto:moulisp@gmail.com\" target=\"_top\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i><span>Send me a eMail </span></a></li>\r\n                    <li><a href=\"https://www.linkedin.com/in/MouliSeerangan\" target=\"_blank\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i><span>Connect with me on LinkedIn </span></a></li>\r\n                    <li><a href=\"https://twitter.com/moulisp\" target=\"_blank\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i><span>Follow me on twitter </span></a></li>\r\n                    <li><a href=\"https://github.com/moulisp\" target=\"_blank\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i><span>GitHub </span></a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</body>\r\n\r\n</html>"

/***/ })
/******/ ]);