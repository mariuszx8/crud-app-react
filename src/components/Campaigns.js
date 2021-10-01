import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios'; // http client for node
import '../App.scss';
import './Campaigns.scss';
//GET request
function Campaigns() {

    const [data,setData] = useState([]);

    useEffect(() => {
        var cData = localStorage.getItem("campaignData");
        async function fetchData() {
            if (cData!=null) {
                setData(JSON.parse(cData));
            } else {
                var res = [{"_id":"6155e3d99c855bb61558d2ec","name":"Wiosenna odwilż","keywords":["wiosna","promocja","ceny"],"bidAmount":300,"fund":5000,"status":true,"town":"Warszawa","radius":40},{"_id":"61560bba017d85faace7687c","name":"Zima 2021","keywords":["zima","promocja","obniżka"],"bidAmount":500,"fund":8000,"status":false,"town":"Kraków","radius":20},{"_id":"61562c995050127a4821732d","name":"Sportowa Polska","keywords":["sport","ruch"],"bidAmount":700,"fund":9000,"status":true,"town":"Warszawa","radius":400}];
                setData(res);
                localStorage.setItem("campaignData", JSON.stringify(res));
            }
        }
        fetchData();
        
    }, []); // empty array means this effect will run only once

    function deleteHandler(paramID) {
        var campaignData = JSON.parse(localStorage.getItem("campaignData"));
        for (var i =0; i< campaignData.length; i++) {
            if (campaignData[i]._id == paramID) {
                campaignData.splice(i, 1);
            }
        }
        localStorage.setItem("campaignData", JSON.stringify(campaignData));
        window.location.reload(false);
    }


// Displaying campaigns list
    return (
        <div className="campaigns-list">
            <div className="name-header">Campaigns:</div>
            {data.map((item) => (
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
                                <Link to={`/EditCampaign`} className="flex-container" style={{alignItems:'center'}}>
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
            ))}
        </div>
    )
}

export default Campaigns;
