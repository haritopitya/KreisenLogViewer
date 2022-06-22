import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { DataScreen, Graph, Map, PFD, YoutubePlayer } from "../components/viewer";
import { strToUnixtime } from '../utils/date';
import { formatLogData, getLogData } from '../utils/logData';
import { getMovie } from '../utils/movie';
const ViewerView = () => {
    const { group, number, id } = useParams();
    const [seconds, setSeconds] = useState(0);
    const [movie, setMovie] = useState();
    const [logData, setLogData] = useState([]);
    const [currentLogData, setCurrentLogData] = useState();

    const onUpdate = (seconds) => {
        setSeconds(seconds);
        updateCurrentLogData(seconds)
    }
    useEffect(() => {
        const f = async () => {
            const logData = await getLogData(group, number)
            const formattedLogData = formatLogData(logData)
            setLogData(formattedLogData)
            const movie = await getMovie(group, number, id)
            setMovie(movie)
        }
        f();
    }, [group,number,id])
    const updateCurrentLogData = (seconds) => {
        const { delay, startedAt } = movie || {}
        if (!logData) return null
        let prevSnapshot = logData[0]
        const currentUnixtime = Math.floor(strToUnixtime(startedAt) - delay + seconds * 1000)
        for (const snapshot of logData) {
            console.log(currentUnixtime,snapshot.timestamp.rawValue);
            if (snapshot.timestamp.rawValue > currentUnixtime) break
            prevSnapshot=snapshot
        }
        setCurrentLogData(prevSnapshot)
    }
    return (
        <div css={styles.wrap}>
            <div css={styles.inner}>
                <PFD currentData={currentLogData} />
                <Graph log={logData} />
            </div>
            <div css={styles.inner}>
                <YoutubePlayer id={id} onUpdate={onUpdate} />
                <Map log={logData} currentData={currentLogData} />
            </div>
            <div css={styles.inner}>
                <DataScreen currentData={currentLogData} />
            </div>
        </div>
    )
}

const styles = {
    wrap: css({
        flex: 1,
        display: 'flex',
        overflow: 'hidden',
    }),
    inner: css({
        flex: 1,
    }),
}

export default ViewerView