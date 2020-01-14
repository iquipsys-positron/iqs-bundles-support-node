import { CompositeFactory } from 'pip-services3-components-node';
import { DefaultContainerFactory } from 'pip-services3-container-node';

import { FeedbacksClientFactory } from 'pip-clients-feedbacks-node';
import { AnnouncementsClientFactory } from 'pip-clients-announcements-node';

export class SupportBundleClientsFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new FeedbacksClientFactory);
        this.add(new AnnouncementsClientFactory);

    }

}
