const args = process.argv.slice(2);

args.forEach(arg => {
	let envvar = process.env[arg]
	if (envvar == undefined){
	console.error(`Could not find "${arg}" in environment`);
	} else {
	console.log(envvar);
	}
});
