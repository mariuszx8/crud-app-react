import React, { useState, useEffect } from 'react';
import axios from 'axios'; // http client for node

function Campaigns() {

    const [data,setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get("http://192.109.240.27:8080/Campaign");
            setData(res.data);
        }
        fetchData();
    }, []);


    return (
        <div>
              <div>
                <div>
                    <div>Name</div>
                    <div>Keywords</div>
                    <div>Bid amount</div>
                    <div>Status</div>
                    <div>Town</div>
                    <div>Radius</div>
                </div>
                {data.map((item) => (
                    <div>
                        <div>{item.name}</div>
                        <div>{item.keywords}</div>
                        <div>{item.bidAmount}</div>
                        <div>{item.status}</div>
                        <div>{item.town}</div>
                        <div>{item.radius}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Campaigns;
