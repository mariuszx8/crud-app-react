import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/App.scss';
import './Campaigns.scss';

function Campaigns() {

    const [campaignData,setCampaignData] = useState([]);

    useEffect(() => {
        var cData = JSON.parse(localStorage.getItem("campaignData"));
        if (cData!= null && cData.length > 0) {
            setCampaignData(cData);
        } else {
            var example = [{"_id":"1","name":"Kampania reklamowa","keywords":["promocja","ceny"],"bidAmount":300,"fund":5000,"status":true,"town":"Warszawa","radius":200}];
            setCampaignData(example);
            localStorage.setItem("campaignData", JSON.stringify(example));
        }
    }, []);

    function deleteHandler(itemID) {
        let removeItem = campaignData.filter(campaign => (campaign._id !== itemID))
        setCampaignData(removeItem);
        localStorage.setItem("campaignData", JSON.stringify(removeItem));
    }

    return (
        <div className="campaigns-list">
            <div className="name-header">Campaigns:</div>
            { campaignData.length > 0 ?
                campaignData.map((item) => (
                    <div key={item._id} className="flex-container flex-column campaign-element">
                        <div className="campaign-name">{item.name}</div>
                        <div className="flex-container details-container">
                            <div className="campaign-details">
                                <div>
                                    Keywords: {item.keywords.map((keyword, index) => (<span key={index} className="keyword">{keyword}</span>))}
                                </div>
                                <div>
                                    Status: <span className="bold">{item.status ? "on" : "off"}</span>
                                </div>
                            </div>
                            <div className="campaign-details">
                                <div>
                                    Bid amount: <span className="bold">{item.bidAmount} zł</span>
                                </div>
                                <div>
                                    Campaign fund: <span className="bold">{item.fund} zł</span>
                                </div>
                            </div>
                            <div className="campaign-details">
                                <div>
                                    Town: <span className="bold">{item.town}</span>
                                </div>
                                <div>
                                    Radius: <span className="bold">{item.radius} km</span>
                                    </div>
                            </div>
                            <div className="campaign-options">
                                <div className="edit-btn flex-container">
                                    <Link to={{pathname: "/EditCampaign", state: {campaign: item}}} className="flex-container" style={{alignItems:'center'}}>
                                        <span className="material-icons">
                                            edit
                                        </span>
                                        Edit
                                    </Link>
                                </div>
                                <div 
                                    className="delete-btn flex-container"
                                    onClick={() => {if(window.confirm('Are you sure you want to delete this campaign?')){deleteHandler(item._id)};}}
                                >
                                    <span className="material-icons">
                                        delete
                                    </span>
                                    Delete
                                </div>
                            </div>
                        </div>
                    </div>
                )) : 
                <div className="flex-container flex-column empty-campaigns">
                    Brak wpisów
                </div>
                }
        </div>
    )
}

export default Campaigns;
