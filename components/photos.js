export default function Photos(props) {
    return (
        <ul>
            {props.images.map((img, index) => 
                <li key={index}>
                    <picture>
                        <source srcSet={img.urlWebp} type="image/webp"/>
                        <img width="399" height="399" loading="lazy" src={img.url}/>
                    </picture>
                </li>
            )}
        </ul>
    );
};