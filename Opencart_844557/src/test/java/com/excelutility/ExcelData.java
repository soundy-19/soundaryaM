package com.excelutility;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ExcelData {
	public  String first_name(int i) throws IOException {
		  
		  FileInputStream fil = new FileInputStream(new File("src\\test\\resources\\Testdata\\opencart.xlsx"));
		  XSSFWorkbook workbook = new XSSFWorkbook(fil);
		  XSSFSheet sheet=workbook.getSheet("Sheet1");
		  
		    
			  XSSFRow row =sheet.getRow(i);
			  XSSFCell cell=row.getCell(0);
			  cell.setCellType(Cell.CELL_TYPE_STRING);
			  String em=cell.getStringCellValue();
			        
		return em;
}
	public  String Lastname(int i) throws IOException {
		  
		  FileInputStream fil = new FileInputStream(new File("src\\test\\resources\\Testdata\\opencart.xlsx"));
		  XSSFWorkbook workbook = new XSSFWorkbook(fil);
		  XSSFSheet sheet=workbook.getSheet("Sheet1");
		  
		  
			  XSSFRow row =sheet.getRow(i);
			  XSSFCell cell1=row.getCell(1);
			  cell1.setCellType(Cell.CELL_TYPE_STRING);
			  String pwd=cell1.getStringCellValue();
  
		return pwd;
		
}
	public  String email(int i) throws IOException {
		  
		  FileInputStream fil = new FileInputStream(new File("src\\test\\resources\\Testdata\\opencart.xlsx"));
		  XSSFWorkbook workbook = new XSSFWorkbook(fil);
		  XSSFSheet sheet=workbook.getSheet("Sheet1");
		  
		  
			  XSSFRow row =sheet.getRow(i);
			  XSSFCell cell2=row.getCell(2);
			  cell2.setCellType(Cell.CELL_TYPE_STRING);
			  String ema=cell2.getStringCellValue();

		return ema;
		
}
	
	public  String phone(int i) throws IOException {
		  
		  FileInputStream fil = new FileInputStream(new File("src\\test\\resources\\Testdata\\opencart.xlsx"));
		  XSSFWorkbook workbook = new XSSFWorkbook(fil);
		  XSSFSheet sheet=workbook.getSheet("Sheet1");
		  
		  
			  XSSFRow row =sheet.getRow(i);
			  XSSFCell cell3=row.getCell(3);
			  cell3.setCellType(Cell.CELL_TYPE_STRING);
			  String tele=cell3.getStringCellValue();

		return tele;
		
}
	public  String pass(int i) throws IOException {
		  
		  FileInputStream fil = new FileInputStream(new File("src\\test\\resources\\Testdata\\opencart.xlsx"));
		  XSSFWorkbook workbook = new XSSFWorkbook(fil);
		  XSSFSheet sheet=workbook.getSheet("Sheet1");
		  
		  
			  XSSFRow row =sheet.getRow(i);
			  XSSFCell cell4=row.getCell(4);
			  cell4.setCellType(Cell.CELL_TYPE_STRING);
			  String pass=cell4.getStringCellValue();

		return pass;
		
}
	public  String C_pass(int i) throws IOException {
		  
		  FileInputStream fil = new FileInputStream(new File("src\\test\\resources\\Testdata\\opencart.xlsx"));
		  XSSFWorkbook workbook = new XSSFWorkbook(fil);
		  XSSFSheet sheet=workbook.getSheet("Sheet1");
		  
		  
			  XSSFRow row =sheet.getRow(i);
			  XSSFCell cell5=row.getCell(5);
			  cell5.setCellType(Cell.CELL_TYPE_STRING);
			  String c_pass=cell5.getStringCellValue();

		return c_pass;
		
}
	
}