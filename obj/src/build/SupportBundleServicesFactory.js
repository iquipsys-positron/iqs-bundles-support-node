"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_services_feedbacks_node_1 = require("pip-services-feedbacks-node");
const pip_services_announcements_node_1 = require("pip-services-announcements-node");
class SupportBundleServicesFactory extends pip_services3_container_node_1.DefaultContainerFactory {
    constructor() {
        super();
        this.add(new pip_services_feedbacks_node_1.FeedbacksServiceFactory);
        this.add(new pip_services_announcements_node_1.AnnouncementsServiceFactory);
    }
}
exports.SupportBundleServicesFactory = SupportBundleServicesFactory;
//# sourceMappingURL=SupportBundleServicesFactory.js.map