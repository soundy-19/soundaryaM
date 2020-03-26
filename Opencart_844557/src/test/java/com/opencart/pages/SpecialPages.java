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

public class SpecialPages {
WebDriver driver;
	

	public void open_special()//open site
	{
		System.setProperty("webdriver.chrome.driver", "Driver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize(); //maximizes the window
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS); //implicit wait occurs
		driver.get("https://demo.opencart.com/"); //opens the site
		driver.findElement(By.xpath("/html/body/footer/div/div/div[3]/ul/li[4]/a")).click(); //specials is clicked
	}

	public void offers() //checking product offers 
	{
		String s=driver.findElement(By.xpath("//*[@id=\"content\"]/div[2]/div[1]/div/div[2]/div[1]/h4/a")).getText(); //gets product on offer
		System.out.println(s); //prints product on offer
		String v=driver.findElement(By.xpath("//*[@id=\"content\"]/div[2]/div[2]/div/div[2]/div[1]/h4/a")).getText(); //gets product on offer
		System.out.println(v); //prints product on offer
	}
	//To take screenshot 
		public void screenshot(String path) throws InterruptedException, IOException
		{
			Thread.sleep(4000); //waits for required time
			TakesScreenshot snap = (TakesScreenshot)driver;
			File source = snap.getScreenshotAs(OutputType.FILE);
			FileUtils.copyFile(source, new File(path));
			Thread.sleep(3000); //waits for required time
			driver.close();
		}

}
