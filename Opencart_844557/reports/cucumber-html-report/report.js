$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/features/openn.feature");
formatter.feature({
  "line": 2,
  "name": "Opencart website",
  "description": "",
  "id": "opencart-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@opencart_Feature"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Registeration",
  "description": "",
  "id": "opencart-website;registeration",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@tc_01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Launching the chrome browser and opening the website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters registeration details",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Registration.launching_the_chrome_browser()"
});
formatter.result({
  "duration": 15546020643,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_enters_username_and_password()"
});
formatter.result({
  "duration": 103658213853,
  "status": "passed"
});
formatter.match({
  "location": "Registration.close_the_browser()"
});
formatter.result({
  "duration": 272413543,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "RegAndLog",
  "description": "",
  "id": "opencart-website;regandlog",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@tc02"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "the user launch the browser for valid register",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the  user opens opencart login page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The user enters \"\u003cemailid\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "the user close the login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "opencart-website;regandlog;",
  "rows": [
    {
      "cells": [
        "emailid",
        "pass"
      ],
      "line": 18,
      "id": "opencart-website;regandlog;;1"
    },
    {
      "cells": [
        "soundaryariya27@gmail.com",
        "sound"
      ],
      "line": 19,
      "id": "opencart-website;regandlog;;2"
    },
    {
      "cells": [
        "lakshmikiruba80@gmail.com",
        "kirubakar"
      ],
      "line": 20,
      "id": "opencart-website;regandlog;;3"
    },
    {
      "cells": [
        "elakkiyamsp@gmail.com",
        "elakkiya"
      ],
      "line": 21,
      "id": "opencart-website;regandlog;;4"
    },
    {
      "cells": [
        "sound",
        "sound11"
      ],
      "line": 22,
      "id": "opencart-website;regandlog;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "RegAndLog",
  "description": "",
  "id": "opencart-website;regandlog;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@tc02"
    },
    {
      "line": 1,
      "name": "@opencart_Feature"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "the user launch the browser for valid register",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the  user opens opencart login page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The user enters \"soundaryariya27@gmail.com\" and \"sound\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "the user close the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegAndLogSteps.the_user_launch_the_browser_for_valid_register()"
});
formatter.result({
  "duration": 15872769017,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_login_page()"
});
formatter.result({
  "duration": 3907800706,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "soundaryariya27@gmail.com",
      "offset": 17
    },
    {
      "val": "sound",
      "offset": 49
    }
  ],
  "location": "RegAndLogSteps.the_user_enters_the_valid_login_details(String,String)"
});
formatter.result({
  "duration": 9036773813,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_close_the_login_page()"
});
formatter.result({
  "duration": 203883235,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "RegAndLog",
  "description": "",
  "id": "opencart-website;regandlog;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@tc02"
    },
    {
      "line": 1,
      "name": "@opencart_Feature"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "the user launch the browser for valid register",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the  user opens opencart login page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The user enters \"lakshmikiruba80@gmail.com\" and \"kirubakar\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "the user close the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegAndLogSteps.the_user_launch_the_browser_for_valid_register()"
});
formatter.result({
  "duration": 16271329779,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_login_page()"
});
formatter.result({
  "duration": 4183888916,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lakshmikiruba80@gmail.com",
      "offset": 17
    },
    {
      "val": "kirubakar",
      "offset": 49
    }
  ],
  "location": "RegAndLogSteps.the_user_enters_the_valid_login_details(String,String)"
});
formatter.result({
  "duration": 7778319141,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_close_the_login_page()"
});
formatter.result({
  "duration": 224721067,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "RegAndLog",
  "description": "",
  "id": "opencart-website;regandlog;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@tc02"
    },
    {
      "line": 1,
      "name": "@opencart_Feature"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "the user launch the browser for valid register",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the  user opens opencart login page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The user enters \"elakkiyamsp@gmail.com\" and \"elakkiya\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "the user close the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegAndLogSteps.the_user_launch_the_browser_for_valid_register()"
});
formatter.result({
  "duration": 25572320643,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_login_page()"
});
formatter.result({
  "duration": 5743382663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "elakkiyamsp@gmail.com",
      "offset": 17
    },
    {
      "val": "elakkiya",
      "offset": 45
    }
  ],
  "location": "RegAndLogSteps.the_user_enters_the_valid_login_details(String,String)"
});
formatter.result({
  "duration": 7541720838,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_close_the_login_page()"
});
formatter.result({
  "duration": 2148407110,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "RegAndLog",
  "description": "",
  "id": "opencart-website;regandlog;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@tc02"
    },
    {
      "line": 1,
      "name": "@opencart_Feature"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "the user launch the browser for valid register",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the  user opens opencart login page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The user enters \"sound\" and \"sound11\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "the user close the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegAndLogSteps.the_user_launch_the_browser_for_valid_register()"
});
formatter.result({
  "duration": 8368083716,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_login_page()"
});
formatter.result({
  "duration": 1789032801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sound",
      "offset": 17
    },
    {
      "val": "sound11",
      "offset": 29
    }
  ],
  "location": "RegAndLogSteps.the_user_enters_the_valid_login_details(String,String)"
});
formatter.result({
  "duration": 7036998668,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_close_the_login_page()"
});
formatter.result({
  "duration": 2088943143,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "",
  "description": "Wishlist",
  "id": "opencart-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@tc03"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "the user logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "add items to wishlist",
  "keyword": "When "
});
formatter.match({
  "location": "WishlistSteps.logedin()"
});
formatter.result({
  "duration": 26575246602,
  "status": "passed"
});
formatter.match({
  "location": "WishlistSteps.wishes()"
});
formatter.result({
  "duration": 12698832898,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Comparison",
  "description": "",
  "id": "opencart-website;comparison",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@tc04"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "open the site",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "compare price of 2 products",
  "keyword": "When "
});
formatter.match({
  "location": "CompareSteps.log()"
});
formatter.result({
  "duration": 12524645184,
  "status": "passed"
});
formatter.match({
  "location": "CompareSteps.comparison()"
});
formatter.result({
  "duration": 10042038674,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Specials",
  "description": "",
  "id": "opencart-website;specials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@tc05"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "click specials",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "display special offers",
  "keyword": "When "
});
formatter.match({
  "location": "SpecialSteps.logedin()"
});
formatter.result({
  "duration": 22067468422,
  "status": "passed"
});
formatter.match({
  "location": "SpecialSteps.wishes()"
});
formatter.result({
  "duration": 9605589140,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Gift",
  "description": "",
  "id": "opencart-website;gift",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@tc06"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "logged in to enter recipient details",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "enter recipient details",
  "keyword": "When "
});
formatter.match({
  "location": "GiftSteps.logedin()"
});
formatter.result({
  "duration": 29123342399,
  "status": "passed"
});
formatter.match({
  "location": "GiftSteps.wishes()"
});
formatter.result({
  "duration": 16664551539,
  "status": "passed"
});
});