import { useState, useEffect } from "react";

export default function FunFactMiku() {
    const [facts, setFacts] = useState([]);
    const url = "https://raw.githubusercontent.com/LeahJKH/mikuviteInfo/main/json/FunFactsMiku.json";
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setFacts(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [url]);
        const randomNumber = Math.floor(Math.random() * facts.length);
    return (
        <>
            <div>
                <img src="" alt="" />
                <p>- {facts[randomNumber]}</p>
            </div>
        </>
    );
}