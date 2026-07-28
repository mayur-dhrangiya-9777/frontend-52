const argon2 = require('argon2');

async function run() {
  try {
    const hash = await argon2.hash("mayur");

    console.log("Hash:", hash);

    const match = await argon2.verify(hash, "mayu");

    if (match) {
      console.log("Password match");
    } else {
      console.log("Password did not match");
    }

  } catch (err) {
    console.log(err);
  }
}

run();