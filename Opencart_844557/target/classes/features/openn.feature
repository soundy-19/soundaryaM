@opencart_Feature 
Feature: Opencart website 
@tc_01
Scenario: Registeration
Given Launching the chrome browser and opening the website
Then User enters registeration details
And close the browser

@tc02
Scenario Outline:  RegAndLog
    Given the user launch the browser for valid register
	When the  user opens opencart login page
	Then The user enters "<emailid>" and "<pass>"
	Then the user close the login page
	
	Examples:
	
	|emailid                  |pass |
	|soundaryariya27@gmail.com |sound    |
	|lakshmikiruba80@gmail.com |kirubakar|
	|elakkiyamsp@gmail.com     |elakkiya |
	|sound                     |sound11  | 
 

@tc03 
Scenario: 
Wishlist

	Given the user logged in
	When add items to wishlist
	 
@tc04
Scenario: Comparison
    Given open the site
	When compare price of 2 products
	
@tc05
Scenario: Specials
    Given click specials
	When display special offers
	
@tc06	
 Scenario: Gift
	Given logged in to enter recipient details
	When enter recipient details
	

	
