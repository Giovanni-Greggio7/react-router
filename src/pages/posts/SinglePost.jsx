import { useParams } from "react-router-dom";

const SinglePost = () => {

    const { id } = useParams()

    return (
        <div className="container">
            <h1 className="text-center">Post:{id}</h1>
        </div>
    )
}

export default SinglePost;