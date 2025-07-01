package cucumber.stepDefinitions;

import org.junit.Assert;

import cucumber.domain.helpers.DomainHelper;
import io.cucumber.java.en.Given;

public class AccountSteps {

	private DomainHelper domainHelper;

	public AccountSteps(DomainHelper domainHelper) {
		this.domainHelper = domainHelper;
	}

	@Given("I have a balance of ${int} in my account")
	public void iHaveABalanceOf$InMyAccount(int amount) {
		domainHelper.getAccount().deposit(amount);
		domainHelper.getAccount().deposit(amount);
		Assert.assertEquals(amount, domainHelper.getAccount().getBalance());
	}

}
