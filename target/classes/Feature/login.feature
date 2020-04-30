Feature: Validate login to applications

Scenario Outline: Login to facebook application

Given user is on facebook login page
Then user should login with "<username>" and "<password>"
Then click on log in button
Then validate home page
Then log out of facebook

Examples:

|  	username  						|  	password  		|
|	vivekdnyanobabidgar@gmail.com 	| 	jyotivivek  	|

