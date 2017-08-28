/*jslint node: true */
"use strict";

exports.clientName = 'byteball';
exports.minClientVersion = '1.10.0';

// https://console.developers.google.com
exports.pushApiProjectNumber = 0;
exports.pushApiKey = '';

exports.port = 6611;

if(process.env.MYURL == "") {
  process.exit(1);
}

exports.myUrl = 'wss://' + process.env.MYURL + '/bb';
console.log("myUrl is: " + exports.myUrl)

exports.bServeAsHub = true;
exports.bSaveJointJson = true;
exports.bLight = false;

// this is used by wallet vendor only, to redirect bug reports to developers' email
exports.bug_sink_email = 'admin@example.org';
exports.bugs_from_email = 'bugs@example.org';

exports.HEARTBEAT_TIMEOUT = 300*1000;

exports.storage = 'sqlite';


exports.initial_witnesses = [
	'BVVJ2K7ENPZZ3VYZFWQWK7ISPCATFIW3',
	'DJMMI5JYA5BWQYSXDPRZJVLW3UGL3GJS',
	'FOPUBEUPBC6YLIQDLKL6EW775BMV7YOH',
	'GFK3RDAPQLLNCMQEVGGD2KCPZTLSG3HN',
	'H5EZTQE7ABFH27AUDTQFMZIALANK6RBG',
	'I2ADHGP4HL6J37NQAD73J7E5SKFIXJOT',
	'JEDZYC2HMGDBIDQKG3XSTXUSHMCBK725',
	'JPQKPRI5FMTQRJF4ZZMYZYDQVRD55OTC',
	'OYW2XTDKSNKGSEZ27LMGNOPJSYIXHBHC',
	'S7N5FE42F6ONPNDQLCF64E2MGFYKQR2I',
	'TKT4UESIKTTRALRRLWS4SENSTJX6ODCW',
	'UENJPVZ7HVHM6QGVGT6MWOJGGRTUTJXQ'
];

exports.initial_peers = [
	'wss://byteball.org/bb'
];

console.log('finished hub conf');
