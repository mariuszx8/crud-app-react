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
                    <div className="flex-container">
                        <div className="campaign-details">
                            <div>Keywords: {item.keywords.map((keyword) => keyword + " ")}</div>
                            <div>Status: {item.status}</div>
                        </div>
                        <div className="campaign-details">
                            <div>Bid amount: {item.bidAmount}</div>
                            <div>Town: {item.town}</div>
                        </div>
                        <div className="campaign-details">
                            <div>Campaign fund: {item.fund}</div>
                            <div>Radius: {item.radius}</div>
                        </div>
                        <div className="campaign-options">
                            <div>
                                <div className="edit-btn flex-container">
                                    <span className="material-icons">
                                        edit
                                    </span>
                                    Edit
                                </div>
                                <div className="delete-btn flex-container">
                                    <span className="material-icons">
                                        delete
                                    </span>
                                    Delete
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Campaigns;
