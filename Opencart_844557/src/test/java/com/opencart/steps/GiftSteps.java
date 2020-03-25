package com.opencart.steps;

import java.io.IOException;

import com.opencart.pages.GiftcertificatesPages;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class GiftSteps {
	 GiftcertificatesPages giftcertification = new  GiftcertificatesPages();

		@Given("^logged in to enter recipient details$")
		public void logedin() 
		{
			
			giftcertification.login_pass() ;
		}

		@When("^enter recipient details$")
		public void wishes() throws InterruptedException, IOException
		{
			
			giftcertification.recipient();
			giftcertification.screenshot("src/test/resources/Screenshots/gift.png");
		}
}
