var Web3 = require("web3");
var Tx = require("@ethereumjs/tx").Transaction;

var web3 = new Web3(
	new Web3.providers.WebsocketProvider("ws://127.0.0.1:7545")
);

var account1 = "0x442cEEbecaBDA7884B6C3dCa96611Ab579416A53";

var account2 = "0xd5a585234eDD7c7c6Dc3460992cc3C7B4ceC4A8e";

var privateKey = Buffer.from(
	"2fcc20ce28bab92c3b626fea911cc8f300617971dda914c81d497aac389bde46",
	"hex"
);

// web3.eth.getBalance(account1, (err, bal) => {
// 	console.log(bal);
// });

// console.log(privateKey);

// web3.eth.getTransactionCount(account1, (err, result) => {
// 	txCount = result;

// 	var rawTx = {
// 		nonce: web3.utils.toHex(txCount),
// 		gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
// 		gasLimit: web3.utils.toHex(21000),
// 		to: account2,
// 		value: web3.utils.toHex(web3.utils.toWei("10", "ether")),
// 		data: "0x",
// 	};

// 	console.log(rawTx);

// 	var tx = new Tx(rawTx);
// 	var signedTx = tx.sign(privateKey);

// 	var serializedTx = signedTx.serialize();

// 	console.log(serializedTx);

// 	// console.log(serializedTx.toString('hex'));
// 	// 0xf889808609184e72a00082271094000000000000000000000000000000000000000080a47f74657374320000000000000000000000000000000000000000000000000000006000571ca08a8bbf888cfa37bbf0bb965423625641fc956967b81d12e23709cead01446075a01ce999b56a8a88504be365442ea61239198e23d1fce7d00fcfc5cd3b44b7215f

// 	web3.eth
// 		.sendSignedTransaction("0x" + serializedTx.toString("hex"))
// 		.on("receipt", console.log);
// });

// var subscription = web3.eth
// 	.subscribe("pendingTransactions", function (error, result) {
// 		if (!error) console.log(result);
// 	})
// 	.on("data", function (transaction) {
// 		console.log(transaction);
// 	});

// // unsubscribes the subscription
// subscription.unsubscribe(function (error, success) {
// 	if (success) console.log("Successfully unsubscribed!");
// });
web3.eth
	.subscribe("logs", function (error, result) {
		if (!error) console.log(result);
	})
	.on("connected", function (subscriptionId) {
		console.log(subscriptionId);
	})
	.on("data", function (log) {
		console.log(log);
	})
	.on("changed", function (log) {});
