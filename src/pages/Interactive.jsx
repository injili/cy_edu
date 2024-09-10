import { useState } from "react";
import Videos from "../components/videos";
import Studies from "../components/studies";

export default function Interactive() {
    const [activeTab, setActiveTab] = useState('videos');

    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
    };

    return (
        <div>
            <div className="mb-4 border-b border-gray-200 font-alata">
                <ul className="flex flex-row items-center justify-center -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                    <li className="me-2" role="presentation">
                        <button
                        className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'videos' ? 'border-red-800' : 'border-transparent'}`}
                        onClick={() => handleTabClick('videos')}
                        type="button"
                        role="tab"
                        aria-controls="videos"
                        aria-selected={activeTab === 'videos'}
                        >
                        Interactive Videos
                        </button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button
                        className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'studies' ? 'border-red-800' : 'border-transparent'}`}
                        onClick={() => handleTabClick('studies')}
                        type="button"
                        role="tab"
                        aria-controls="studies"
                        aria-selected={activeTab === 'studies'}
                        >
                        Case Studies
                        </button>
                    </li>
                </ul>
            </div>
            <div id="default-tab-content" className="font-alata">
                <div className={`p-4 rounded-lg flex justify-center ${activeTab === 'videos' ? '' : 'hidden'}`} id="videos" role="tabpanel">
                    <Videos/>
                </div>
                <div className={`p-4 rounded-lg flex justify-center ${activeTab === 'studies' ? '' : 'hidden'}`} id="studies" role="tabpanel">
                    <Studies/>
                </div>
            </div>
        </div>
    )
}