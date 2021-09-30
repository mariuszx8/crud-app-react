import React from 'react'

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
        </div>
        <div>
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
                Status:
                <input
                    type="checkbox"
                    name='status'
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
        </div>
        <div>
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
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
    </form>
    )
}

export default CampaignForm
