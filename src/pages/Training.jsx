import { useState } from "react";
import Communication from '../components/communication';
import Containment from '../components/containment';
import Eradication from '../components/eradication';
import Identification from '../components/identification';
import Practices from '../components/practices';
import Recovery from '../components/recovery';

export default function Training() {
    const [activeTab, setActiveTab] = useState('identification');

    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
    };

    return (
        <div>
            <div className="mb-4 border-b border-gray-200 font-alata">
                <ul className="flex flex-row items-center justify-center -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                    <li className="me-2" role="presentation">
                        <button
                        className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'identification' ? 'border-red-800' : 'border-transparent'}`}
                        onClick={() => handleTabClick('identification')}
                        type="button"
                        role="tab"
                        aria-controls="identification"
                        aria-selected={activeTab === 'identification'}
                        >
                        Incident Identification
                        </button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button
                        className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'containment' ? 'border-red-800' : 'border-transparent'}`}
                        onClick={() => handleTabClick('containment')}
                        type="button"
                        role="tab"
                        aria-controls="containment"
                        aria-selected={activeTab === 'containment'}
                        >
                        Containment Strategies
                        </button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button
                        className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'eradication' ? 'border-red-800' : 'border-transparent'}`}
                        onClick={() => handleTabClick('eradication')}
                        type="button"
                        role="tab"
                        aria-controls="eradication"
                        aria-selected={activeTab === 'eradication'}
                        >
                        Eradication Techniques
                        </button>
                    </li>
                    <li role="presentation">
                        <button
                        className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'recovery' ? 'border-red-800' : 'border-transparent'}`}
                        onClick={() => handleTabClick('recovery')}
                        type="button"
                        role="tab"
                        aria-controls="recovery"
                        aria-selected={activeTab === 'recovery'}
                        >
                        Recovery Procedures
                        </button>
                    </li>
                    <li role="presentation">
                        <button
                        className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'communication' ? 'border-red-800' : 'border-transparent'}`}
                        onClick={() => handleTabClick('communication')}
                        type="button"
                        role="tab"
                        aria-controls="communication"
                        aria-selected={activeTab === 'communication'}
                        >
                        Communication and Coordination
                        </button>
                    </li>
                    <li role="presentation">
                        <button
                        className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'practices' ? 'border-red-800' : 'border-transparent'}`}
                        onClick={() => handleTabClick('practices')}
                        type="button"
                        role="tab"
                        aria-controls="practices"
                        aria-selected={activeTab === 'practices'}
                        >
                        Best Practices
                        </button>
                    </li>
                </ul>
            </div>
            <div id="default-tab-content" className="font-alata">
                <div className={`p-4 rounded-lg flex justify-center ${activeTab === 'identification' ? '' : 'hidden'}`} id="identification" role="tabpanel">
                    <Identification/>
                </div>
                <div className={`p-4 rounded-lg flex justify-center ${activeTab === 'containment' ? '' : 'hidden'}`} id="containment" role="tabpanel">
                    <Containment/>
                </div>
                <div className={`p-4 rounded-lg flex justify-center ${activeTab === 'eradication' ? '' : 'hidden'}`} id="eradication" role="tabpanel">
                    <Eradication/>
                </div>
                <div className={`p-4 rounded-lg flex justify-center ${activeTab === 'recovery' ? '' : 'hidden'}`} id="recovery" role="tabpanel">
                    <Recovery/>
                </div>
                <div className={`p-4 rounded-lg flex justify-center ${activeTab === 'communication' ? '' : 'hidden'}`} id="communication" role="tabpanel">
                    <Communication/>
                </div>
                <div className={`p-4 rounded-lg flex justify-center ${activeTab === 'practices' ? '' : 'hidden'}`} id="practices" role="tabpanel">
                    <Practices/>
                </div>
            </div>
        </div>
    )
}