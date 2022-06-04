import { useEffect, useState } from "react";
import axios from "axios";

function Views () {

        const [visit, setVisit] = useState("");
        const getVisits = () => {
            axios.get("https://api.countapi.xyz/hit/warm-tanuki-218cc5.netlify.app/9e93e05a-364c-4055-b235-6085d52e1158")
            .then(res => {
                console.log(res);
                setVisit(res.data.value);
            });
} 
    useEffect(() => {
        getVisits()
    },[]);

    return<div>
<h5 className="visit-h5" >Visits: { visit }</h5>
    </div>
}
export default Views;