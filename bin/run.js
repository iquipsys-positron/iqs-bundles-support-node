let SupportBundleProcess = require('../obj/src/container/SupportBundleProcess').SupportBundleProcess;

try {
    new SupportBundleProcess().run(process.argv);
} catch (ex) {
    console.error(ex);
}