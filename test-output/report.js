$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Vivek Bidgar/eclipse-workspace/MavenProjectadvance/src/main/java/Feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Validate login to applications",
  "description": "",
  "id": "validate-login-to-applications",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login to facebook application",
  "description": "",
  "id": "validate-login-to-applications;login-to-facebook-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user should login with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on log in button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "validate home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "log out of facebook",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "validate-login-to-applications;login-to-facebook-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "validate-login-to-applications;login-to-facebook-application;;1"
    },
    {
      "cells": [
        "vivekdnyanobabidgar@gmail.com",
        "jyotivivek"
      ],
      "line": 14,
      "id": "validate-login-to-applications;login-to-facebook-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Login to facebook application",
  "description": "",
  "id": "validate-login-to-applications;login-to-facebook-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user should login with \"vivekdnyanobabidgar@gmail.com\" and \"jyotivivek\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on log in button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "validate home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "log out of facebook",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.user_on_login_page()"
});
formatter.result({
  "duration": 81373822200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vivekdnyanobabidgar@gmail.com",
      "offset": 24
    },
    {
      "val": "jyotivivek",
      "offset": 60
    }
  ],
  "location": "StepDefn.user_should_login_with(String,String)"
});
formatter.result({
  "duration": 1681813600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.click_on_login_button()"
});
formatter.result({
  "duration": 299812500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.validate_home_page()"
});
formatter.result({
  "duration": 12403574200,
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d81.0.4044.122)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-OEHU1QCS\u0027, ip: \u0027192.168.0.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\VIVEKB~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:61493}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 81.0.4044.122, webStorageEnabled: true}\nSession ID: edecb1628a0e78ee58306e6714d43fe5\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027_1qv9\u0027]//span[contains(text(),\u0027Vivek\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat StepDefination.StepDefn.validate_home_page(StepDefn.java:54)\r\n\tat ✽.Then validate home page(C:/Users/Vivek Bidgar/eclipse-workspace/MavenProjectadvance/src/main/java/Feature/login.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefn.log_out_of_facebook()"
});
formatter.result({
  "status": "skipped"
});
});