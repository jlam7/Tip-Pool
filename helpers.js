// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
	let total = 0;

	for (let key in allPayments) {
		console.log(allPayments);
		let payment = allPayments[key];

		total += Number(payment[type]);
	}

	return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
	return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
	let newTd = document.createElement('td');
	newTd.innerText = value;

	tr.append(newTd);
}

function appendCloseBtn(tr) {
	let closeBtn = document.createElement('td');
	closeBtn.innerText = 'X';
	closeBtn.classList.add('deleteBtn');

	closeBtn.addEventListener('click', function(e) {
		let serverId = e.target.parentElement.id;
		delete allServers[serverId];
		e.target.parentElement.remove();
	});
	tr.append(closeBtn);
}
