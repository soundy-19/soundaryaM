package com.opencart.steps;
import com.opencart.pages.RegAndLoginPages;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegAndLogSteps
{
	RegAndLoginPages reglog=new RegAndLoginPages();
	
	
	@Given("^the user launch the browser for valid register$")
			public void the_user_launch_the_browser_for_valid_register() throws Throwable 
			{
				reglog.url("chrome");
			 
			}

	
	@When("^the  user opens opencart login page$")
			public void the_user_opens_opencart_login_page() throws Throwable 
			{
				reglog.opencart_login();
			   
			}

	@Then("^The user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void the_user_enters_the_valid_login_details(String emailid,String pass) throws Throwable {
		reglog.login_details(emailid,pass);
		Thread.sleep(2000);
	}
			
	@Then("^the user close the login page$")
			public void the_user_close_the_login_page() throws Throwable 
			{
				reglog.quit();
			   
			}
}