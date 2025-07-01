package cucumber.domain.models;

public class CashSlot {

	private int content;

	public int getContents() {
		return content;
	}

	public void dispense(int requestedAmount) {
		content = requestedAmount;

	}

}
