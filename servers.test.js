describe('Servers test (with setup and tear-down)', function() {
	beforeEach(function() {
		// initialization logic
		serverNameInput.value = 'Alice';
	});

	it('should add a new server to allServers on submitServerInfo()', function() {
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers['server' + serverId].serverName).toEqual('Alice');
	});

	it('should create tds on updateServerTable()', function() {
		submitServerInfo();
		updateServerTable();

		let allTd = document.querySelectorAll('#serverTable tbody tr td');
		expect(allTd[0].innerText).toEqual('Alice');
		expect(allTd[1].innerText).toEqual('$0.00');
	});

	afterEach(function() {
		// teardown logic
		allServers = {};
		serverTbody.innerHTML = '';
		serverId = 0;
	});
});
