"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
const SupportBundleServicesFactory_1 = require("../build/SupportBundleServicesFactory");
const SupportBundleClientsFactory_1 = require("../build/SupportBundleClientsFactory");
class SupportBundleProcess extends pip_services3_container_node_1.ProcessContainer {
    constructor() {
        super("supportbiundle", "Support bundle for iQuipsys Positron");
        this._factories.add(new SupportBundleServicesFactory_1.SupportBundleServicesFactory);
        this._factories.add(new SupportBundleClientsFactory_1.SupportBundleClientsFactory);
        this._factories.add(new pip_services3_rpc_node_1.DefaultRpcFactory);
        this._factories.add(new pip_services3_aws_node_1.DefaultAwsFactory);
    }
}
exports.SupportBundleProcess = SupportBundleProcess;
//# sourceMappingURL=SupportBundleProcess.js.map