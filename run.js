let InfrastructureProcess = require('../obj/src/container/InfrastructureProcess').InfrastructureProcess;

try {
    new InfrastructureProcess().run(process.argv);
} catch (ex) {
    console.error(ex);
}