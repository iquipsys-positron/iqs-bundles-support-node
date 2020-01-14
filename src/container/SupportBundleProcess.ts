import { IReferences } from 'pip-services3-commons-node';
import { ProcessContainer } from 'pip-services3-container-node';
import { DefaultRpcFactory } from 'pip-services3-rpc-node';
import { DefaultAwsFactory } from 'pip-services3-aws-node';

import { SupportBundleServicesFactory } from '../build/SupportBundleServicesFactory';
import { SupportBundleClientsFactory } from '../build/SupportBundleClientsFactory';

export class SupportBundleProcess extends ProcessContainer {

    public constructor() {
        super("supportbundle", "Support bundle for iQuipsys Positron");
        this._factories.add(new SupportBundleServicesFactory);
        this._factories.add(new SupportBundleClientsFactory);
        this._factories.add(new DefaultRpcFactory);
        this._factories.add(new DefaultAwsFactory);
    }

}
