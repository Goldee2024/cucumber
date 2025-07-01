package cucumber.domain.models;

public class Account {

	private int balance;

	public int deposit(Integer amount) {
		balance = balance + amount;
		return amount;

	}

	public int getBalance() {

		return this.balance;
	}

}
