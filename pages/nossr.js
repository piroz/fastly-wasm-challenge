import React, { useState, useEffect } from 'react';
import Nav from "../components/nav"
import Photos from "../components/photos"
import { jsonTottekuruYatsu } from "../services/backend"
import { withLatency } from "../libs/latency"

function Nossr() {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        withLatency(jsonTottekuruYatsu())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <div><p>No data</p><Nav /></div>

    return (
        <div>
            <Photos images={data.images} />
            <Nav />
        </div>
    );
};

export default Nossr