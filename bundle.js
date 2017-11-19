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

module.exports = "<!doctype html>\r\n<html>\r\n\r\n<head>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width\">\r\n  <title>Mouli seerangan</title>\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n</head>\r\n\r\n<body>\r\n  <header class='menuBar'>\r\n    <div class='brand-container'>\r\n      <a href='#home_page'>\r\n        <span class='brand-initials'>MS</span>\r\n        <span class='brand-name'>Mouli Seerangan</span>\r\n      </a>\r\n    </div>\r\n    <nav>\r\n      <div class='nav-container'>\r\n        <div>\r\n          <a class='slide' href='#about_page'>\r\n            <span class='element'>\r\n              <i class=\"fa fa-fire fa-2x\" aria-hidden=\"true\"></i>\r\n            </span>\r\n            <span class='name'>About</span>\r\n          </a>\r\n        </div>\r\n\r\n        <div>\r\n          <a class='slide' href='#projects_page'>\r\n            <span class='element'>\r\n              <i class=\"fa fa-book fa-2x\" aria-hidden=\"true\"></i>\r\n            </span>\r\n            <span class='name'>Projects</span>\r\n          </a>\r\n        </div>\r\n        <div>\r\n          <a class='slide' href='#portfolio_page'>\r\n            <span class='element'>\r\n              <i class=\"fa fa-tags  fa-2x\" aria-hidden=\"true\"></i>\r\n            </span>\r\n            <span class='name'>Portfolio</span>\r\n          </a>\r\n        </div>\r\n        <div>\r\n          <a class='slide' href='#contacts_page'>\r\n            <span class='element'>\r\n              <i class=\"fa fa-envelope-open-o  fa-2x\" aria-hidden=\"true\"></i>\r\n            </span>\r\n            <span class='name'>Contact</span>\r\n          </a>\r\n        </div>\r\n        <!-- <div>\r\n          <a class='slide' href='#'>\r\n            <span class='element'>C</span>\r\n            <span class='name'>Contact</span>\r\n          </a>\r\n        </div> -->\r\n      </div>\r\n    </nav>\r\n\r\n  </header>\r\n\r\n\r\n\r\n  <section class=\"pages\" id='home_page'>\r\n    <div id=\"bgTile\">\r\n      <div id=\"infoPage\">\r\n        <img src=\"src/css/img/photo.jpg\" alt=\"profilePic\" width=\"164\" height=\"164\" />\r\n        <h1>Mouli Seerangan</h1>\r\n        <h2>Web Developer, Software Engineer</h2>\r\n        <p class=\"description\">I am a web developer living in New Jersey, USA . I enjoy designing and coding web applications, running and music.\r\n          <br>\r\n          <br> Follow me on LinkedIn or twitter.</p>\r\n      </div>\r\n      <div class=\"arrow\"></div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"pages\" id='about_page'>\r\n    <div class=\"left-content\">\r\n        <h1> About Me</h1>\r\n    </div>\r\n    <div class=\"content \" id=\"about\">\r\n\r\n\r\n      <div class=\"right-content\">\r\n        <h1>Me and\r\n          <i class=\"fa fa-code \" aria-hidden=\"true\"></i>\r\n        </h1>\r\n        <p>I’m a web developer/software engineer in New Jersey, USA. I'm originally from India and graduated in 2009 from Anna\r\n          University with a B.E. in Computer Science and Engineering. Since then I have adopted, mastered and moved on from\r\n          many languages, frameworks and architectures. I currently focus on Javascript heavy web application development.\r\n        </p>\r\n        <p>I have worked on wide range of applications ranging from Geospatial applications to Management tools to client-server\r\n          application to autimation tools. Over the years, I have developed apps for Telecommunication, Retails, Manufacturing,\r\n          Insurance and Healthcare industry clients.\r\n        </p>\r\n        <p>I'm a Microsoft certified Developer (Programming in HTML5 with JavaScript and CSS3) and Oracle certified profesional\r\n          (Java SE 6 Programmer).\r\n          <div id=\"certi_img_div\">\r\n            <img src=\"src/css/img/MS_Certificate.png\" alt=\"profilePic\" width=\"200\" height=\"200\" />\r\n            <img src=\"src/css/img/Oracle_Certificate.png\" alt=\"profilePic\" width=\"200\" height=\"200\" />\r\n          </div>\r\n        </p>\r\n\r\n        <h2>Summary :</h2>\r\n        <ul>\r\n          <li>Lucid understanding and Strong developing experience with HTML5, JavaScript, AJAX and CSS3.</li>\r\n          <li>Hands-on experience in JavaScript frameworks like DOJO, React and JQuery.</li>\r\n          <li>Developed application using XML/JSON to link with back-end applications.</li>\r\n          <li>Expertise in debugging and troubleshooting existing code using Firebug and Developer Tools.</li>\r\n          <li>Hands-on experience in AngularJS and Bootstrap. </li>\r\n          <li>Worked in Core Java, J2EE, spring and Hibernate.</li>\r\n          <li>Proficient in complete Software Development Life Cycle (Waterfall and Agile Methodology based projects).</li>\r\n          <li>Possess a good ability to grasp the underlying business process, quick learning and strong analytical skill.</li>\r\n          <li>Ability to work as an individual and easily get on with team members.</li>\r\n          <li>Experienced in all phases of classic SDLC such as Analysis, Design, Development, Implementation and maintenance.</li>\r\n          <li>Good communication skills with leadership quality and problem solving skills.</li>\r\n          <li>Strong knowledge of Design Patterns including J2EE Design Patterns Singleton, MVC, Front Controller, Strategy Pattern.</li>\r\n          <li>Research-oriented, motivated, proactive, self-starter with technical and interpersonal skills.</li>\r\n        </ul>\r\n        <h2>Technical Exposure :</h2>\r\n        <div id=\"TechTblDiv\">\r\n          <table class=\"tecExp\">\r\n            <tbody>\r\n              <tr>\r\n                <td>Technologies</td>\r\n                <td>HTML5, JavaScript, CSS3, AJAX, Servlet, JSP, JDBC, Restful.</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Frameworks </td>\r\n                <td>DOJO, React, JQuery, AngularJS, ARCGIS JS, Bootstrap, spring, Hibernate.\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Other Tools </td>\r\n                <td>GIT, SVN, Maven, Rational Clearcase, JIRA, Eclipse, SQL Developer.</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Database </td>\r\n                <td>Oracle, DB2.</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Servers</td>\r\n                <td>Tomcat, WebSphere Application Server.</td>\r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"pages\" id='projects_page'>\r\n    <div class=\"left-content\">\r\n      <h1> Projects</h1>\r\n    </div>\r\n    <div class=\"content \" id=\"profile\">\r\n\r\n\r\n      <div class=\"right-content\">\r\n\r\n\r\n        <div id=\"cd-timeline\" class=\"cd-container\">\r\n          <div class=\"cd-timeline-block\">\r\n            <div class=\"cd-timeline-img cd-picture\">\r\n\r\n            </div>\r\n            <!-- cd-timeline-img -->\r\n\r\n            <div class=\"cd-timeline-content\">\r\n              <h2>Network Geographic </h2>\r\n              <p>\r\n                This application provides information on the Spatial Data and used across organization.\r\n              </p>\r\n              <!-- <a href=\"#0\" class=\"cd-read-more\">Read more</a> -->\r\n              <span class=\"cd-date\">2015 Oct - Present</span>\r\n            </div>\r\n            <!-- cd-timeline-content -->\r\n          </div>\r\n          <!-- cd-timeline-block -->\r\n\r\n          <div class=\"cd-timeline-block\">\r\n            <div class=\"cd-timeline-img cd-movie\">\r\n            </div>\r\n            <!-- cd-timeline-img -->\r\n\r\n            <div class=\"cd-timeline-content\">\r\n              <h2>Product Cluster Planning Tool </h2>\r\n              <p>\r\n                This tool is a web-based solution that will enable client’s Merchandising Organization to generate and fine tune essential\r\n                metrics in the Product Line Review, to align with financial goals for each category.\r\n              </p>\r\n              <span class=\"cd-date\">2014 Mar - 2015 Sep</span>\r\n            </div>\r\n            <!-- cd-timeline-content -->\r\n          </div>\r\n          <!-- cd-timeline-block -->\r\n\r\n          <div class=\"cd-timeline-block\">\r\n            <div class=\"cd-timeline-img cd-picture\">\r\n            </div>\r\n            <!-- cd-timeline-img -->\r\n\r\n            <div class=\"cd-timeline-content\">\r\n              <h2>Labor Promotion Management Tool </h2>\r\n              <p>\r\n                For Helping client Stores, we had developed Labor Promotions Management Tool specific for creating and managing promotions\r\n                for Labor items.\r\n              </p>\r\n              <span class=\"cd-date\">2013 June - 2014 Feb</span>\r\n            </div>\r\n            <!-- cd-timeline-content -->\r\n          </div>\r\n          <!-- cd-timeline-block -->\r\n\r\n          <div class=\"cd-timeline-block\">\r\n            <div class=\"cd-timeline-img cd-location\">\r\n            </div>\r\n            <!-- cd-timeline-img -->\r\n\r\n            <div class=\"cd-timeline-content\">\r\n              <h2>Oxygen</h2>\r\n              <p>\r\n                Oxygen is envisaged to be an application that would help to expedite the “Creation” process. It would integrate data and\r\n                systems, give users access to specific information through high level multilayered security model, improve\r\n                the information flow between different user communities such as Creators, Formula Management etc. involved\r\n                in the “Creation” process, thus reducing average cycle time from 10-30 business days to 5-10 business days.\r\n              </p>\r\n              <span class=\"cd-date\">2011 Dec - 2013 June</span>\r\n            </div>\r\n            <!-- cd-timeline-content -->\r\n          </div>\r\n          <!-- cd-timeline-block -->\r\n\r\n          <div class=\"cd-timeline-block\">\r\n            <div class=\"cd-timeline-img cd-location\">\r\n            </div>\r\n            <!-- cd-timeline-img -->\r\n\r\n            <div class=\"cd-timeline-content\">\r\n              <h2>Survey Builder</h2>\r\n              <p>\r\n                Survey Builder is internal survey tool with advanced questioning types and advance the user interface akin to leading survey\r\n                site.\r\n              </p>\r\n              <span class=\"cd-date\">2011 Jan - 2011 Nov</span>\r\n            </div>\r\n            <!-- cd-timeline-content -->\r\n          </div>\r\n          <!-- cd-timeline-block -->\r\n\r\n          <div class=\"cd-timeline-block\">\r\n            <div class=\"cd-timeline-img cd-movie\">\r\n            </div>\r\n            <!-- cd-timeline-img -->\r\n\r\n            <div class=\"cd-timeline-content\">\r\n              <h2>Claims Call Center Initiative </h2>\r\n              <p>This tool helps the customer care rep to quickly go through the process and help the customer to save time.</p>\r\n              <span class=\"cd-date\">2009 Nov - 2010 Dec</span>\r\n            </div>\r\n            <!-- cd-timeline-content -->\r\n          </div>\r\n          <!-- cd-timeline-block -->\r\n        </div>\r\n        <!-- cd-timeline -->\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n\r\n\r\n\r\n  <section class=\"pages\" id=\"portfolio_page\">\r\n    <div class=\"left-content\">\r\n        <h1>Portfolio</h1>\r\n    </div>\r\n    <div class=\"content \" id='portfolio'>\r\n      <div class=\"right-content\">\r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"pages\" id=\"contacts_page\">\r\n    <div class=\"left-content\">\r\n        <h1>Contact</h1>\r\n    </div>\r\n    <div class=\"content \" id='contact'>\r\n\r\n\r\n      <div class=\"right-content\">\r\n        <h2>Get in touch:</h2>\r\n        <ul>\r\n          <li> <a href=\"\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i> </a> Send me a eMail </li>\r\n          <li> <i class=\"fa fa-linkedin\" aria-hidden=\"true\"> </i> Connect with me on LinkedIn</li>\r\n          <li> <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>Follow me on twitter</li>\r\n           <li> <i class=\"fa fa-github\" aria-hidden=\"true\"></i> GitHub</li> \r\n          \r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n\r\n  <script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js\"></script>\r\n</body>\r\n\r\n</html>"

/***/ })
/******/ ]);