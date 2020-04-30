package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\Vivek Bidgar\\eclipse-workspace\\MavenProjectadvance\\src\\main\\java\\Feature\\login.feature"
		,glue= {"StepDefination"}
		,format =  {"pretty","html:test-output"}
		,monochrome = true
		//,strict = true,
		//,dryRun = true	
		)

public class testRunner {

}
