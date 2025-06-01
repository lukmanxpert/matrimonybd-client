import { PuffLoader } from 'react-spinners'

const Loading = () => {
    return (
        <div className="min-h-60 flex justify-center items-center">
            <PuffLoader color="#fa005d" size={80} speedMultiplier={2} />
        </div>
    )
}

export default Loading