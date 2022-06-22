import ReactPlayer from 'react-player';

const YoutubePlayer = ({ id,onUpdate }) => {
    const onSeek = (seconds) => onUpdate(seconds)
    const onProgress = ({ playedSeconds }) => onUpdate(playedSeconds)
    return (
        <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            progressInterval={100}
            onSeek={onSeek}
            onProgress={onProgress}
            controls={true}
            width='100%'
            height='50%' />
    )
}

export default YoutubePlayer