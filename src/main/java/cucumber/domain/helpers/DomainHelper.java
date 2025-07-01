package cucumber.domain.helpers;

import cucumber.domain.models.Account;
import cucumber.domain.models.CashSlot;
import cucumber.domain.models.Teller;

public class DomainHelper {

	private Account account;
	private Teller teller;
	private CashSlot cashSlot;

	public Account getAccount() {
		if (account == null) {
			return account = new Account();
		}
		return account;
	}

	public CashSlot getCashSlot() {
		if (cashSlot == null) {
			return cashSlot = new CashSlot();
		}
		return cashSlot;
	}

	public Teller getTeller() {
		if (teller == null) {
			return teller = new Teller(getCashSlot());
		}
		return teller;
	}

}
