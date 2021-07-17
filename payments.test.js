describe('Payment test (with setup and tear down)', function() {
	beforeEach(function() {
		billAmtInput.value = 20;
		tipAmtInput.value = 4;
	});

	it('should add curPayment object to allPayments', function() {
		submitPaymentInfo();

		expect(Object.keys(allPayments).length).toEqual(1);
	});

	it('should return an object with billAmt, tipAmt, and tipPercent', function() {
		expect(createCurPayment()).toEqual({ billAmt: '20', tipAmt: '4', tipPercent: 20 });
	});

	it('should create tds for paymentTable', function() {
		submitPaymentInfo();

		let allTds = document.querySelectorAll('#paymentTable tbody tr td');

		expect(allTds[0].innerText).toEqual('$20');
		expect(allTds[1].innerText).toEqual('$4');
		expect(allTds[2].innerText).toEqual('20%');
	});

	it('should create tds for summaryTable', function() {
		submitPaymentInfo();

		let allTds = document.querySelectorAll('#summaryTable tbody tr td');

		expect(allTds[0].innerText).toEqual('$20');
		expect(allTds[1].innerText).toEqual('$4');
		expect(allTds[2].innerText).toEqual('20%');
	});

	afterEach(function() {
		billAmtInput.value = '';
		tipAmtInput.value = '';
		allPayments = {};
		paymentId = 0;
		paymentTbody.innerHTML = '';
		summaryTds[0].innerHTML = '';
		summaryTds[1].innerHTML = '';
		summaryTds[2].innerHTML = '';
		serverTbody.innerHTML = '';
	});
});
