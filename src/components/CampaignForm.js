import React from 'react'
import './CampaignForm.scss';

function CampaignForm() {
    return (
        <form>
            <div>
                <label>
                    Campaign name:
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter campaign name"
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Keywords:
                    <input
                        type="text"
                        name="keywords"
                        placeholder="Enter keywords for campaign"
                        required
                    />
                </label>
                <label className="status">
                    Status (on/off):
                    <input
                        type="checkbox"
                        name='status'
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Bid amount:
                    <input
                        type="number"
                        name="bidAmount"
                        placeholder="Enter bid amount"
                        min="1"
                        required
                    />
                </label>
                <label>
                    Campaign fund:
                    <input
                        type="number"
                        name="fund"
                        placeholder="Enter campaign fund"
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Town:
                    <input
                        type="text"
                        name="town"
                        placeholder="Enter town name"
                    />
                </label>
                <label>
                    Radius [kilometers]:
                    <input
                        type="number"
                        name="radius"
                        placeholder="Enter campaign radius"
                        required
                    />
                </label>
            </div>
        <div className="buttons">
            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
        </div>    
    </form>
    )
}

export default CampaignForm
