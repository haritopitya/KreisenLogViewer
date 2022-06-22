import { getAxios } from './axios'
import { formatData } from './logDataFormatter'

const getLogData = async (group,number) => {
  const axios = getAxios()
  const response = await axios.get(`/data/${group}/${number}/logdata.json`)
  const logData = response.data

  const logDataArray = []

  for (const key in logData) {
    logDataArray.push(logData[key])
  }

  logDataArray.sort((a, b) => a.timestamp - b.timestamp)

  return logDataArray
}

const extractByDuration = (logData, start, end) => {
  const extractedData = []

  for (const snapshot of logData) {
    const { timestamp } = snapshot

    if (timestamp && start <= timestamp && timestamp <= end) {
      extractedData.push(snapshot)
    }
  }

  return extractedData
}

const flattenSnapshot = (snapshot, basename = '') => {
  let flattenedSnapshot = {}

  for (const key in snapshot) {
    if (key === 'rawData') continue
    if (key === 'calibrationData') continue

    if (typeof snapshot[key] === 'object') {
      flattenedSnapshot = Object.assign(
        flattenedSnapshot, flattenSnapshot(snapshot[key], basename + key + '/')
      )
    } else {
      flattenedSnapshot[basename + key] = formatData(basename + key, snapshot[key])
    }
  }

  return flattenedSnapshot
}

const formatLogData = (logData) => {
  const formattedLogdata = []

  for (const snapshot of logData) {
    formattedLogdata.push(
       flattenSnapshot(snapshot)
    )
  }

  return formattedLogdata
}

const getElementNames = (snapshot, basename = '') => {
  let names = []

  for (const key in snapshot) {
    if (key === 'rawData') continue
    if (key === 'calibrationData') continue

    if (typeof snapshot[key] === 'object' && !snapshot[key].title) {
      names = names.concat(getElementNames(snapshot[key], basename + key + '/'))
    } else {
      names.push({ key: basename + key, name: snapshot[key].title })
    }
  }

  return names
}

const getAircraftLatLng = (flattenedLogData) => {
  const latLng = {}
  if (flattenedLogData) {
    latLng.latitude = parseFloat(flattenedLogData['dataStationData/latitude'].value)
    latLng.longitude = parseFloat(flattenedLogData['dataStationData/longitude'].value)
    latLng.bearing = parseFloat(flattenedLogData['dataStationData/trueCourse'].value) || 0;
  }
  return latLng
}

export {
  getLogData,
  extractByDuration,
  formatLogData,
  getElementNames,
  getAircraftLatLng,
}
