package com.opencart.pages;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
public class GiftcertificatesPages
{
	
WebDriver driver;
	

	public void login_pass() //login
	{
		System.setProperty("webdriver.chrome.driver", "Driver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize(); //maximizes the window
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS); //implicit wait occurs
		driver.get("https://demo.opencart.com/"); //opens the opencart site
		driver.findElement(By.xpath("//*[@id=\"top-links\"]/ul/li[2]/a/i")).click();
		driver.findElement(By.xpath("//*[@id=\"top-links\"]/ul/li[2]/ul/li[2]/a")).click();
		driver.findElement(By.xpath("//*[@id=\"input-email\"]")).sendKeys("soundaryariya27@gmail.com");
		driver.findElement(By.xpath("//*[@id=\"input-password\"]")).sendKeys("sound");
		driver.findElement(By.xpath("//*[@id=\"content\"]/div/div[2]/div/form/input")).click();
		driver.findElement(By.xpath("/html/body/footer/div/div/div[3]/ul/li[2]/a")).click();

	}

	public void recipient() //get recipient details
	{
		
		driver.findElement(By.name("to_name")).sendKeys("Sound");
		driver.findElement(By.name("to_email")).sendKeys("sound@gmail.com");
		driver.findElement(By.xpath("//*[@id=\"content\"]/form/div[5]/div/div[1]/label/input")).click();
		driver.findElement(By.id("input-message")).sendKeys("I love you and so here is your birthday present from me. Hope you love it.");
		driver.findElement(By.name("amount")).sendKeys("10");
		driver.findElement(By.xpath("//*[@id=\"content\"]/form/div[8]/div/input[1]")).click();
		driver.findElement(By.xpath("//*[@id=\"content\"]/form/div[8]/div/input[2]")).click();
		
	}
	//To take screenshot 
		public void screenshot(String path) throws InterruptedException, IOException
		{
			Thread.sleep(4000); //waits for required time
			TakesScreenshot snap = (TakesScreenshot)driver;
			File source = snap.getScreenshotAs(OutputType.FILE);
			FileUtils.copyFile(source, new File(path));
			Thread.sleep(3000); //waits for required time
			driver.close(); //closes the browser
		}
	
}
