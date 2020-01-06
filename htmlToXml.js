const fs = require("fs");
const folder = "./html";
const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function convert(file) {
  const { stdout, stderr } = await exec(
    `tidy -q -asxml --numeric-entities yes ./html/${file} >./xml/${file}.xml`
  );
  console.log("stdout:", stdout);
  console.log("stderr:", stderr);
}

function test() {
  fs.readdir(folder, (err, files) => {
    files.forEach(file => {
      convert(file);
    });
  });
}

test();
localStorage;
