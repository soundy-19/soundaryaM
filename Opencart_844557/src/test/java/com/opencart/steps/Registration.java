package com.opencart.steps;

import com.opencart.pages.RegAndLoginPages;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Registration {
	RegAndLoginPages reglog=new RegAndLoginPages();
	

@Given("^Launching the chrome browser and opening the website$")
public void launching_the_chrome_browser() throws Throwable {
   reglog.url("chrome");
    
}


@Then("^User enters registeration details$")
public void user_enters_username_and_password() throws Throwable {
	
	reglog.register_details();
    
}

@Then("^close the browser$")
public void close_the_browser() throws Throwable {
	reglog.quit();
   
}


}
