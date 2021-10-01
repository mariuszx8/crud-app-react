import React from 'react';
import './CampaignForm.scss';

function CampaignForm(props) {
    
    //Array of towns for pre-populated dropdown list
    let towns = [];
    //Array of keywords for typeahead
    let keywords = [];
    var campaignData = JSON.parse(localStorage.getItem("campaignData"));
    for (var i =0; i< campaignData.length; i++) {
        towns[i] = campaignData[i].town;
        for (const el of campaignData[i].keywords) {
            keywords.push(el);
        }
    }
    var uniqueTowns = [...new Set(towns)];
    var uniqueKeywords = Array.from([...new Set(keywords)]);

    const saveData = (event) => {
        event.preventDefault();
        if(event.target.status.value==="on") {event.target.status.value=true} else {event.target.status.value=false};
        var campaignData = JSON.parse(localStorage.getItem("campaignData"));
        var i = campaignData.length-1;
        var newID = campaignData[i]._id.split('').sort((a, b) => 0.5 - Math.random());
        var newCampaign = {
            _id: newID.join(""),
            name: event.target.name.value,
            keywords: event.target.keywords.value.split(" "),
            bidAmount:event.target.bidAmount.value,
            fund:event.target.fund.value,
            status: event.target.status.value,
            town: event.target.town.value,
            radius: event.target.radius.value,
        };
        campaignData[i+1] = newCampaign;
        localStorage.setItem("campaignData", JSON.stringify(campaignData));
        alert("Successfully added new campaign");
        if(localStorage.getItem("editedCampaign")!=null) {
            localStorage.removeItem("editedCampaign");
        };
        window.location.reload(false);
    }
    return (
        <form onSubmit={saveData}>
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
                        list='keywords_list'
                    />
                     <datalist id="keywords_list">
                        {uniqueKeywords.map((option, index) =>(<option key={index} value={option}></option>))}
                    </datalist>
                </label>
                <label className="status">
                    Status (on/off):
                    <input
                        type="checkbox"
                        name='status'
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
                        min="1"
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Town:
                    <input
                        list="towns"
                        type="text"
                        name="town"
                        placeholder="Enter town name"
                    />
                    <datalist id="towns">
                        {uniqueTowns.map((option, index) =>(<option key={index} value={option}></option>))}
                    </datalist>
                </label>
                <label>
                    Radius [kilometers]:
                    <input
                        type="number"
                        name="radius"
                        placeholder="Enter campaign radius"
                        min="1"
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
