package com.opencart.pages;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class ComparePages
{
	
WebDriver driver;
	public void opening() //open site
	{
		System.setProperty("webdriver.chrome.driver", "Driver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize(); //maximizes the window
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS); //implicit wait occurs
		driver.get("https://demo.opencart.com/"); //opens the opencart site
	}

	public void compare() //compare 2 products
	{
		
		String a=driver.findElement(By.xpath("//*[@id=\"content\"]/div[2]/div[1]/div/div[2]/p[2]")).getText();//gets first product's detail
		String b=driver.findElement(By.xpath("//*[@id=\"content\"]/div[2]/div[2]/div/div[2]/p[2]")).getText();//gets second product's detail
		System.out.println(a); //prints first product's detail
		System.out.println(b); //prints second product's detail
		
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

	
