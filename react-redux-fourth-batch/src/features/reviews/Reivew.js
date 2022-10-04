export default function Review({review})
{
    return (<div>
        <h5> {review.review}</h5>
        <div> {review.rating}</div>
    </div>)
}