package cucumber.stepDefinitions;

import org.junit.Assert;

import cucumber.domain.helpers.DomainHelper;
import io.cucumber.java.en.Then;

public class WithDrawSteps {

	private DomainHelper domainHelper;

	public WithDrawSteps(DomainHelper domainHelper) {
		this.domainHelper = domainHelper;
	}

	@Then("${int} should be dispensed")
	public void $ShouldBeDispensed(int dispensedAmount) {
		Assert.assertEquals(dispensedAmount, domainHelper.getCashSlot().getContents());
	}

}
