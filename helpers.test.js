describe('Helper test', function() {
	beforeEach(function() {
		billAmtInput.value = 30;
		tipAmtInput.value = 3;
		submitPaymentInfo();
	});

	it('should create a sum of billAmt', function() {
		billAmtInput.value = 30;
		tipAmtInput.value = 3;
		submitPaymentInfo();

		expect(sumPaymentTotal('billAmt')).toEqual(60);
	});

	it('should create a sum of tipAmt', function() {
		billAmtInput.value = 30;
		tipAmtInput.value = 3;
		submitPaymentInfo();

		expect(sumPaymentTotal('tipAmt')).toEqual(6);
	});

	it('should create a sum of tipPercent', function() {
		billAmtInput.value = 30;
		tipAmtInput.value = 3;
		submitPaymentInfo();

		expect(sumPaymentTotal('tipPercent')).toEqual(20);
	});

	it('should calculate the tip percentage', function() {
		expect(calculateTipPercent(20, 4)).toEqual(20);
		expect(calculateTipPercent(10, 4)).toEqual(40);
	});

	it('should create a new td', function() {
		let tr = document.createElement('tr');
		appendTd(tr, 'xyz');
		appendTd(tr, 'abc');

		expect(tr.firstChild.innerText).toEqual('xyz');
		expect(tr.lastChild.innerText).toEqual('abc');
		expect(tr.childElementCount).toEqual(2);
	});

	it('should delete a td', function() {
		let tr = document.createElement('tr');
		appendTd(tr, 'xyz');
		appendTd(tr, 'abc');
		appendCloseBtn(tr);

		expect(tr.childElementCount).toEqual(3);
		expect(tr.lastChild.innerText).toEqual('X');
	});

	afterEach(function() {
		allPayments = {};
		paymentId = 0;
		paymentTbody.innerHTML = '';
		summaryTds[0].innerHTML = '';
		summaryTds[1].innerHTML = '';
		summaryTds[2].innerHTML = '';
	});
});
