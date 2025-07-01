package cucumber.domain.models;

public class Teller {

	private CashSlot cashSlot;

	public Teller(CashSlot cashSlot) {
		this.cashSlot = cashSlot;
	}

	public void withDrawCash(Account account, int requestedAmount) {
		cashSlot.dispense(requestedAmount);

	}

}
