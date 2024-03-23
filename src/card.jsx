function card({ title, description, imageUrl}){
    return(
        <div>
            {
                imageUrl ? <img src={imageUrl} alt={title} /> : null
            }
            <h2>
                {title}
            </h2>
            <p>
                {description}
            </p>
        </div>
    );
}
export default card;