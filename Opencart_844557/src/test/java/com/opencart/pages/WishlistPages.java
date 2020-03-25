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

public class WishlistPages {
	WebDriver driver;
	

	public void loginpass() //login
	{
		System.setProperty("webdriver.chrome.driver", "Driver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		driver.get("https://demo.opencart.com/");
		driver.findElement(By.xpath("//*[@id=\"top-links\"]/ul/li[2]/a/i")).click();
		driver.findElement(By.xpath("//*[@id=\"top-links\"]/ul/li[2]/ul/li[2]/a")).click();
		driver.findElement(By.xpath("//*[@id=\"input-email\"]")).sendKeys("soundaryariya27@gmail.com");
		driver.findElement(By.xpath("//*[@id=\"input-password\"]")).sendKeys("sound");
		driver.findElement(By.xpath("//*[@id=\"content\"]/div/div[2]/div/form/input")).click();
		

	}

	public void wish() //open wishlist
	{
		driver.findElement(By.xpath("//*[@id=\"column-right\"]/div/a[5]")).click();
		
	}
	//To take screenshot 
			public void screenshot(String path) throws InterruptedException, IOException
			{
				Thread.sleep(4000);
				TakesScreenshot snap = (TakesScreenshot)driver;
				File source = snap.getScreenshotAs(OutputType.FILE);
				FileUtils.copyFile(source, new File(path));
				Thread.sleep(3000);
				driver.close();
			}

	
}
