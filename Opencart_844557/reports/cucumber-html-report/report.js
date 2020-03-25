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
formatter.scenarioOutline({
  "line": 4,
  "name": "RegAndLog",
  "description": "",
  "id": "opencart-website;regandlog",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tc01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launch the browser for valid register",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the  user opens opencart register page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user enters the valid register details",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the  user opens opencart login page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The user enters \"\u003cemailid\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the user close the login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "opencart-website;regandlog;",
  "rows": [
    {
      "cells": [
        "emailid",
        "pass"
      ],
      "line": 14,
      "id": "opencart-website;regandlog;;1"
    },
    {
      "cells": [
        "soundaryariya27@gmail.com",
        "sound"
      ],
      "line": 15,
      "id": "opencart-website;regandlog;;2"
    },
    {
      "cells": [
        "lakshmikiruba80@gmail.com",
        "kirubakar"
      ],
      "line": 16,
      "id": "opencart-website;regandlog;;3"
    },
    {
      "cells": [
        "elakkiyamsp@gmail.com",
        "elakkiya"
      ],
      "line": 17,
      "id": "opencart-website;regandlog;;4"
    },
    {
      "cells": [
        "sound",
        "sound11"
      ],
      "line": 18,
      "id": "opencart-website;regandlog;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "RegAndLog",
  "description": "",
  "id": "opencart-website;regandlog;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tc01"
    },
    {
      "line": 1,
      "name": "@opencart_Feature"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launch the browser for valid register",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the  user opens opencart register page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user enters the valid register details",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the  user opens opencart login page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The user enters \"soundaryariya27@gmail.com\" and \"sound\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the user close the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegAndLogSteps.the_user_launch_the_browser_for_valid_register()"
});
formatter.result({
  "duration": 32509248339,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_register_page()"
});
formatter.result({
  "duration": 4833996616,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_enters_the_valid_register_details()"
});
formatter.result({
  "duration": 6600482279,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_login_page()"
});
formatter.result({
  "duration": 1922444001,
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
  "duration": 8462564028,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_close_the_login_page()"
});
formatter.result({
  "duration": 346204099,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "RegAndLog",
  "description": "",
  "id": "opencart-website;regandlog;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tc01"
    },
    {
      "line": 1,
      "name": "@opencart_Feature"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launch the browser for valid register",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the  user opens opencart register page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user enters the valid register details",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the  user opens opencart login page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The user enters \"lakshmikiruba80@gmail.com\" and \"kirubakar\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the user close the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegAndLogSteps.the_user_launch_the_browser_for_valid_register()"
});
formatter.result({
  "duration": 16346937808,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_register_page()"
});
formatter.result({
  "duration": 3113697752,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_enters_the_valid_register_details()"
});
formatter.result({
  "duration": 5780916354,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_login_page()"
});
formatter.result({
  "duration": 1740799366,
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
  "duration": 7099487052,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_close_the_login_page()"
});
formatter.result({
  "duration": 2100355672,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "RegAndLog",
  "description": "",
  "id": "opencart-website;regandlog;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tc01"
    },
    {
      "line": 1,
      "name": "@opencart_Feature"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launch the browser for valid register",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the  user opens opencart register page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user enters the valid register details",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the  user opens opencart login page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The user enters \"elakkiyamsp@gmail.com\" and \"elakkiya\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the user close the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegAndLogSteps.the_user_launch_the_browser_for_valid_register()"
});
formatter.result({
  "duration": 11490477786,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_register_page()"
});
formatter.result({
  "duration": 3746760195,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_enters_the_valid_register_details()"
});
formatter.result({
  "duration": 5711995515,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_login_page()"
});
formatter.result({
  "duration": 2589389134,
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
  "duration": 7269662571,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_close_the_login_page()"
});
formatter.result({
  "duration": 2059330360,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "RegAndLog",
  "description": "",
  "id": "opencart-website;regandlog;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tc01"
    },
    {
      "line": 1,
      "name": "@opencart_Feature"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launch the browser for valid register",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the  user opens opencart register page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user enters the valid register details",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the  user opens opencart login page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The user enters \"sound\" and \"sound11\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the user close the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegAndLogSteps.the_user_launch_the_browser_for_valid_register()"
});
formatter.result({
  "duration": 14301125763,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_register_page()"
});
formatter.result({
  "duration": 3999745166,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_enters_the_valid_register_details()"
});
formatter.result({
  "duration": 6137392379,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_login_page()"
});
formatter.result({
  "duration": 1778558033,
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
  "duration": 7093665592,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_close_the_login_page()"
});
formatter.result({
  "duration": 149942004,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "",
  "description": "Wishlist",
  "id": "opencart-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@tc02"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "the user logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "add items to wishlist",
  "keyword": "When "
});
formatter.match({
  "location": "WishlistSteps.logedin()"
});
formatter.result({
  "duration": 15959102711,
  "status": "passed"
});
formatter.match({
  "location": "WishlistSteps.wishes()"
});
formatter.result({
  "duration": 12740652300,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Comparison",
  "description": "",
  "id": "opencart-website;comparison",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@tc03"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "open the site",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "compare price of 2 products",
  "keyword": "When "
});
formatter.match({
  "location": "CompareSteps.log()"
});
formatter.result({
  "duration": 13066856650,
  "status": "passed"
});
formatter.match({
  "location": "CompareSteps.comparison()"
});
formatter.result({
  "duration": 9661785672,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Specials",
  "description": "",
  "id": "opencart-website;specials",
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
  "name": "click specials",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "display special offers",
  "keyword": "When "
});
formatter.match({
  "location": "SpecialSteps.logedin()"
});
formatter.result({
  "duration": 16110496334,
  "status": "passed"
});
formatter.match({
  "location": "SpecialSteps.wishes()"
});
formatter.result({
  "duration": 7757271153,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Gift",
  "description": "",
  "id": "opencart-website;gift",
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
  "name": "logged in to enter recipient details",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "enter recipient details",
  "keyword": "When "
});
formatter.match({
  "location": "GiftSteps.logedin()"
});
formatter.result({
  "duration": 21730760396,
  "status": "passed"
});
formatter.match({
  "location": "GiftSteps.wishes()"
});
formatter.result({
  "duration": 11610935302,
  "status": "passed"
});
});