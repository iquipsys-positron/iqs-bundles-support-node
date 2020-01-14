import { CompositeFactory } from 'pip-services3-components-node';
import { DefaultContainerFactory } from 'pip-services3-container-node';

import { FeedbacksServiceFactory } from 'pip-services-feedbacks-node';
import { AnnouncementsServiceFactory } from 'pip-services-announcements-node';

export class SupportBundleServicesFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new FeedbacksServiceFactory);
        this.add(new AnnouncementsServiceFactory);

    }

}
