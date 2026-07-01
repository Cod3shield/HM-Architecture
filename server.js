/**
 * ==========================================================
 * server.js
 * ==========================================================
 *
 * Simple SMTP Server using Node.js
 *
 * What this file does:
 * 1. Starts an SMTP server.
 * 2. Accepts incoming emails.
 * 3. Reads the complete email message.
 * 4. Prints the email in the console.
 * 5. Saves every received email to the "emails/" folder.
 *
 * This is for learning and local development.
 *
 * To receive emails from the public internet you also need:
 * - A domain name
 * - MX DNS records
 * - A public IP address
 * - Port 25 open
 * - SPF, DKIM and DMARC
 *
 * Install:
 * npm install smtp-server
 *
 * Run:
 * node server.js
 */

const { SMTPServer } = require("smtp-server");
const fs = require("fs");
const path = require("path");

// Create "emails" folder if it does not exist.
const EMAIL_DIR = path.join(__dirname, "emails");

if (!fs.existsSync(EMAIL_DIR)) {
    fs.mkdirSync(EMAIL_DIR);
}

// Create SMTP server.
const server = new SMTPServer({

    // Authentication is disabled.
    authOptional: true,

    // Called every time a client connects.
    onConnect(session, callback) {

        console.log("====================================");
        console.log("New SMTP Connection");
        console.log("Remote Address:", session.remoteAddress);
        console.log("====================================");

        callback();
    },

    // Called when MAIL FROM is received.
    onMailFrom(address, session, callback) {

        console.log("MAIL FROM:", address.address);

        callback();
    },

    // Called for every RCPT TO command.
    onRcptTo(address, session, callback) {

        console.log("RCPT TO:", address.address);

        callback();
    },

    // Called when the email body starts arriving.
    onData(stream, session, callback) {

        let email = "";

        stream.on("data", chunk => {
            email += chunk.toString();
        });

        stream.on("end", () => {

            console.log("\n========== EMAIL RECEIVED ==========\n");

            console.log(email);

            console.log("\n====================================\n");

            const filename = Date.now() + ".eml";

            fs.writeFileSync(
                path.join(EMAIL_DIR, filename),
                email
            );

            console.log("Saved:", filename);

            callback();
        });
    }

});

// SMTP Port
const PORT = 2525;

server.listen(PORT, () => {

    console.log("====================================");
    console.log("SMTP Server Started");
    console.log("Listening on Port:", PORT);
    console.log("====================================");

});