import Nav from "../components/nav"
import { jsonTottekuruYatsu } from "../services/backend"
import { withLatency } from "../libs/latency"
import Photos from "../components/photos"

function Ssr(props) {
    return (
        <div>
            <Photos images={props.images}/>
            <Nav />
        </div>
    );
};

export async function getServerSideProps() {
    const json = await withLatency(await jsonTottekuruYatsu())
    
    return {
        props: {
            images: json.images
        },
    }
}

export default Ssr