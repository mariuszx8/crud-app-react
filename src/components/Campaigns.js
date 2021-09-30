import React, { useState, useEffect } from 'react';
import axios from 'axios'; // http client for node
import './Campaigns.scss';
//GET request
function Campaigns() {

    const [data,setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get("http://192.109.240.27:8080/Campaign");
            setData(res.data);
        }
        fetchData();
    }, []); // empty array means this effect will run only once


// Displaying campaigns list
    return (
        <div className="campaigns-list">
            <div className="name-header">Campaigns:</div>
            {data.map((item) => (
                <div key={item._id} className="flex-container campaign-element">
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
                                    <span className="material-icons">
                                        edit
                                    </span>
                                    Edit
                                </div>
                                <div 
                                    className="delete-btn flex-container"
                                    onClick={() => {if(window.confirm('Are you sure you want to delete this campaign?')){/* delete handler*/};}}
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
