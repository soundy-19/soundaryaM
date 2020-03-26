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
  "duration": 47496366861,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_register_page()"
});
formatter.result({
  "duration": 18869639676,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_enters_the_valid_register_details()"
});
formatter.result({
  "duration": 9141875361,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_login_page()"
});
formatter.result({
  "duration": 7363835364,
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
  "duration": 12493145956,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_close_the_login_page()"
});
formatter.result({
  "duration": 2097930883,
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
  "duration": 73975622414,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_register_page()"
});
formatter.result({
  "duration": 4158980184,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_enters_the_valid_register_details()"
});
formatter.result({
  "duration": 43111681510,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_login_page()"
});
formatter.result({
  "duration": 5547677282,
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
  "duration": 8284085776,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_close_the_login_page()"
});
formatter.result({
  "duration": 2062842474,
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
  "duration": 60772112318,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_register_page()"
});
formatter.result({
  "duration": 61271748700,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_enters_the_valid_register_details()"
});
formatter.result({
  "duration": 11714161161,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_login_page()"
});
formatter.result({
  "duration": 26611214176,
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
  "duration": 9917443161,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_close_the_login_page()"
});
formatter.result({
  "duration": 157529765,
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
  "duration": 56966419542,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_register_page()"
});
formatter.result({
  "duration": 21095358616,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_enters_the_valid_register_details()"
});
formatter.result({
  "duration": 17436989998,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_login_page()"
});
formatter.result({
  "duration": 10715805240,
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
  "duration": 8162663360,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_close_the_login_page()"
});
formatter.result({
  "duration": 206886982,
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
  "duration": 58345991149,
  "status": "passed"
});
formatter.match({
  "location": "WishlistSteps.wishes()"
});
formatter.result({
  "duration": 11436636712,
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
  "duration": 14456460870,
  "status": "passed"
});
formatter.match({
  "location": "CompareSteps.comparison()"
});
formatter.result({
  "duration": 83853167689,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SHAKTHIDEVI-PC\u0027, ip: \u0027192.168.43.134\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\SHAKTH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:50872}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 21e5f5ee2faf912034bc7185952ef21f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat com.opencart.pages.ComparePages.screenshot(ComparePages.java:44)\r\n\tat com.opencart.steps.CompareSteps.comparison(CompareSteps.java:24)\r\n\tat ✽.When compare price of 2 products(src/main/resources/features/openn.feature:30)\r\n",
  "status": "failed"
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
