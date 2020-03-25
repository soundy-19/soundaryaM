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
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		driver.get("https://demo.opencart.com/");
		driver.findElement(By.xpath("/html/body/footer/div/div/div[3]/ul/li[4]/a")).click();
	}

	public void offers() //checking product offers 
	{
		String s=driver.findElement(By.xpath("//*[@id=\"content\"]/div[2]/div[1]/div/div[2]/div[1]/h4/a")).getText();
		System.out.println(s);
		String v=driver.findElement(By.xpath("//*[@id=\"content\"]/div[2]/div[2]/div/div[2]/div[1]/h4/a")).getText();
		System.out.println(v);
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
