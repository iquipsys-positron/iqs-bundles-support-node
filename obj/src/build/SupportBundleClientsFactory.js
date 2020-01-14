"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_clients_feedbacks_node_1 = require("pip-clients-feedbacks-node");
const pip_clients_announcements_node_1 = require("pip-clients-announcements-node");
class SupportBundleClientsFactory extends pip_services3_container_node_1.DefaultContainerFactory {
    constructor() {
        super();
        this.add(new pip_clients_feedbacks_node_1.FeedbacksClientFactory);
        this.add(new pip_clients_announcements_node_1.AnnouncementsClientFactory);
    }
}
exports.SupportBundleClientsFactory = SupportBundleClientsFactory;
//# sourceMappingURL=SupportBundleClientsFactory.js.map