package StepDefination;

import static org.junit.Assert.assertEquals;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class StepDefn {
	WebDriver driver;
	
	public Properties data() throws IOException {
		Properties prop = new Properties();
		FileInputStream ip = new FileInputStream("C:\\Users\\Vivek Bidgar\\eclipse-workspace\\MavenProjectadvance\\src\\main\\java\\data.properties");
		prop.load(ip);
		return prop;
	}
	
	@Given("^user is on facebook login page$")
	public void user_on_login_page() throws IOException {
		System.setProperty("webdriver.chrome.driver", "D:\\Selenium jar Driver\\chromedriver.exe");  
		driver = new ChromeDriver();
		driver.get(data().getProperty("facebookURL"));
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		assertEquals(driver.getTitle(), data().getProperty("facebookTitle"));
		driver.manage().timeouts().pageLoadTimeout(10000, TimeUnit.MILLISECONDS);
	}
	
	@Then("^user should login with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_should_login_with(String username, String password) throws IOException {
		driver.findElement(By.xpath(data().getProperty("fcusername"))).clear();
		driver.findElement(By.xpath(data().getProperty("fcusername"))).sendKeys(username);
		driver.findElement(By.xpath(data().getProperty("fcpassword"))).clear();
		driver.findElement(By.xpath(data().getProperty("fcpassword"))).sendKeys(password);
	}
	
	@Then("^click on log in button$")
	public void click_on_login_button() throws IOException {
		driver.findElement(By.xpath(data().getProperty("fcloginbtn"))).click();
	}
	
	@Then("^validate home page$")
	public void validate_home_page() throws IOException {
		WebElement name = driver.findElement(By.xpath(data().getProperty("namevalidate")));
		assertEquals("Vivek", name.getText());	
	}
	
	@Then("^log out of facebook$")
	public void log_out_of_facebook() {
		driver.close();
	}
}
