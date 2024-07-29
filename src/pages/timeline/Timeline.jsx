import React, { useEffect, useState } from 'react';
import Style from "./Timeline.module.css";

export default function Timeline() {
    const [time, setTime] = useState([]);
    const urlT = "https://raw.githubusercontent.com/LeahJKH/MikuApiGithub/main/json/mikuTimeLine.json";
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(urlT);
                const data = await response.json();
                setTime(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [urlT]); // Corrected dependency array

    console.log(time);

    return (
        <>
        <div className={Style.mikuLine}>
       
            {time.map((item, index) => (
                <div key={index} className={Style.MikuContEven}>
                    <h2>{item.time}</h2>
                    <p>{item.event}</p>
                </div>
            ))}
            </div>
        </>
    );
}