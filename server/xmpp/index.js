var xmpp = require('simple-xmpp');

// Connect ke server XMPP
xmpp.connect({
    jid: 'amrilsyaifa@jabberix.com',
    password: 'Am12il1991!',
    host: 'jabberix.com',
    port: 5222
});

// Kirim pesan ke penerima
// xmpp.send('diingat@jabberix.com', 'Ini adalah pesan testing yang dikirim dari xmpp_saya ke xmpp_penerima', false);

// Jika xmpp client kita berhasil terhubung / login ke xmpp server, maka tampilkan pesan berikut
xmpp.on('online', function (data) {
    console.log('Terkoneksi dengan Jabber ID : ' + data.jid);
});

// Jika ada error di xmpp, munculkan pesannya
xmpp.on('error', function (err) {
    console.error(err);
})

// Jika ada yang melakukan permintaan pertemanan, kita accept secara otomatis
xmpp.on('subscribe', function (from) {
    console.log(from + ' ingin menambahkan anda sebagai teman')
    xmpp.acceptSubscription(from)
    console.log(from + ' telah ditambahkan sebagai teman')
})

// Tampilkan pesan jika ada pesan masuk (terima pesan)
xmpp.on('chat', function (from, message) {
    console.log(message);
    xmpp.send(from, 'echo: ' + message);
});

module.exports = xmpp;