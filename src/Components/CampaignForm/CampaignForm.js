import React, { useState} from 'react';
import './CampaignForm.scss';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router';

function CampaignForm({campaign}) {

    const [id, setId] = useState(campaign._id === '' ? uuidv4() : campaign._id);
    const [name, setName] = useState(campaign.name);
    const [campaignKeywords, setKeywords] = useState(campaign.keywords);
    const [bidAmount, setBidAmount] = useState(campaign.bidAmount);
    const [fund, setFund] = useState(campaign.fund);
    const [status, setStatus] = useState(campaign.status);
    const [town, setTown] = useState(campaign.town);
    const [radius, setRadius] = useState(campaign.radius);

    const history = useHistory();

    let towns = [];
    let keywords = [];
    var campaignData = JSON.parse(localStorage.getItem("campaignData"));
    for (var i =0; i< campaignData.length; i++) {
        towns[i] = campaignData[i].town;
        for (const el of campaignData[i].keywords) {
            keywords.push(el);
        }
    }
    var uniqueTowns = Array.from([...new Set(towns)]);
    var uniqueKeywords = Array.from([...new Set(keywords)]);

    const saveData = (event) => {
        event.preventDefault();
        var i = campaignData.length-1;
        var newCampaign = {
            _id: id,
            name: name,
            keywords: campaignKeywords,
            bidAmount:bidAmount,
            fund:fund,
            status: status,
            town: town,
            radius: radius,
        };
        campaignData[i+1] = newCampaign;
        localStorage.setItem("campaignData", JSON.stringify(campaignData));
        alert("Saved campaign");
        history.push('/')
    }

    const resetForm = (event) => {
        setId(uuidv4());
        setName('');
        setKeywords([]);
        setBidAmount('');
        setFund('');
        setStatus(false);
        setTown('');
        setRadius('');
    }

    return (
        <form onSubmit={saveData} onReset={resetForm}>
            <div>
                <label>
                    Campaign name:
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter campaign name"
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
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
                        value={campaignKeywords.join(" ")}
                        onChange={(event) => setKeywords(event.target.value.split(" "))}
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
                        checked={status}
                        onChange={(event) => setStatus(event.target.value)}
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
                        value={bidAmount}
                        onChange={(event) => setBidAmount(event.target.value)}
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
                        value={fund}
                        onChange={(event) => setFund(event.target.value)}
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
                        value={town}
                        onChange={(event) => setTown(event.target.value)}
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
                        value={radius}
                        onChange={(event) => setRadius(event.target.value)}
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
