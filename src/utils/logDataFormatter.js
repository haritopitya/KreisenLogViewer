import * as Fas from '@fortawesome/free-solid-svg-icons'
import { unixtimeToStr } from './date'

const color = {
  'default': '#f8f9fa',
  'altimeterData': '#007bff',
  'speedometerData': '#28a745',
  'dataStationData': '#FC7100',
  'empennageData': '#e83e8c',
  'leftTachometerData': '#803EF3',
  'rightTachometerData': '#803EF3',
  'legacyTachometerData': '#803EF3',
  'currentVoltageData': '#198754',
  'distance': '#dc143c',
}

const format = {
  'timestamp': {
    title: '時刻',
    icon: Fas.faClock,
    formatter: (val) => (
      val === -1 ? '---' : unixtimeToStr(val)
    ),
    unit: '',
    color: color.default,
    visible: true,
    isBattery: false,
  },
  'altimeterData/altitude': {
    title: '高度',
    icon: Fas.faTachometerAlt,
    formatter: (val) => (
      val === -1 ? '---' : (val / 1000).toFixed(2)
    ),
    unit: 'm',
    color: color.altimeterData,
    visible: true,
    isBattery: false,
  },
  'altimeterData/battery': {
    title: 'バッテリー(高度計)',
    icon: Fas.faBatteryThreeQuarters,
    formatter: (val) => (
      val === -1 ? '---' : val / 10
    ),
    unit: 'V',
    color: color.altimeterData,
    visible: false,
    isBattery: true,
  },
  'speedometerData/airSpeed': {
    title: '対気速',
    icon: Fas.faWind,
    formatter: (val) => (
      val === -1 ? '---' : val / 10
    ),
    unit: 'm/s',
    color: color.speedometerData,
    visible: true,
    isBattery: false,
  },
  'speedometerData/battery': {
    title: 'バッテリー(対気速計)',
    icon: Fas.faBatteryThreeQuarters,
    formatter: (val) => (
      val === -1 ? '---' : val / 10
    ),
    unit: 'V',
    color: color.speedometerData,
    visible: false,
    isBattery: true,
  },
  'dataStationData/GPSaltitude': {
    title: '高度(GPS)',
    icon: Fas.faTachometerAlt,
    formatter: (val) => (
      val === -1 ? '---' : val / 10
    ),
    unit: 'm',
    color: color.dataStationData,
    visible: true,
    isBattery: false,
  },
  'dataStationData/groundSpeed': {
    title: '対地速度',
    icon: Fas.faFighterJet,
    formatter: (val) => (
      val === -1 ? '---' : (val / 1000 / 3.6).toFixed(2)
    ),
    unit: 'm/s',
    color: color.dataStationData,
    visible: true,
    isBattery: false,
  },
  'dataStationData/latitude': {
    title: '緯度',
    icon: Fas.faCrosshairs,
    formatter: (val) => (
      val === -1 ? '---' : (Math.floor(val / 10000000) + val % 10000000 / 6000000).toFixed(5)
    ),
    unit: '',
    color: color.dataStationData,
    visible: true,
    isBattery: false,
  },
  'dataStationData/longitude': {
    title: '経度',
    icon: Fas.faCrosshairs,
    formatter: (val) => (
      val === -1 ? '---' : (Math.floor(val / 10000000) + val % 10000000 / 6000000).toFixed(5)
    ),
    unit: '',
    color: color.dataStationData,
    visible: true,
    isBattery: false,
  },
  'dataStationData/trueCourse': {
    title: '進路(真方位)',
    icon: Fas.faCompass,
    formatter: (val) => (
      val === -1 ? '---' : val / 100
    ),
    unit: '°',
    color: color.dataStationData,
    visible: true,
    isBattery: false,
  },
  'dataStationData/roll': {
    title: 'ロール',
    icon: Fas.faPaperPlane,
    formatter: (val) => (
      val === 400 ? '---' : val / 10
    ),
    unit: '°',
    color: color.dataStationData,
    visible: false,
    isBattery: false,
  },
  'dataStationData/pitch': {
    title: 'ピッチ',
    icon: Fas.faPaperPlane,
    formatter: (val) => (
      val === 400 ? '---' : val / 10
    ),
    unit: '°',
    color: color.dataStationData,
    visible: false,
    isBattery: false,
  },
  'dataStationData/yaw': {
    title: 'ヨー',
    icon: Fas.faPaperPlane,
    formatter: (val) => (
      val === 400 ? '---' : val / 10
    ),
    unit: '°',
    color: color.dataStationData,
    visible: false,
    isBattery: false,
  },
  'dataStationData/pressure': {
    title: '気圧',
    icon: Fas.faCompressArrowsAlt,
    formatter: (val) => (
      val === -1 ? '---' : val
    ),
    unit: 'hPa',
    color: color.dataStationData,
    visible: false,
    isBattery: false,
  },
  'dataStationData/temperature9': {
    title: '温度(DS/9軸)',
    icon: Fas.faThermometerThreeQuarters,
    formatter: (val) => (
      val === -1 ? '---' : val / 10
    ),
    unit: '℃',
    color: color.dataStationData,
    visible: true,
    isBattery: false,
  },
  'dataStationData/temperatureP': {
    title: '温度(DS/気圧計)',
    icon: Fas.faThermometerThreeQuarters,
    formatter: (val) => (
      val === -1 ? '---' : val / 10
    ),
    unit: '℃',
    color: color.dataStationData,
    visible: false,
    isBattery: false,
  },
  'dataStationData/battery': {
    title: 'バッテリー(DS)',
    icon: Fas.faBatteryThreeQuarters,
    formatter: (val) => (
      val === -1 ? '---' : val / 10
    ),
    unit: 'V',
    color: color.dataStationData,
    visible: false,
    isBattery: true,
  },
  'dataStationData/UTC': {
    title: 'UTC(GPS)',
    icon: Fas.faClock,
    formatter: (val) => {
      if (val === -1) return '---'
      const str = ('00000000' + val.toString()).slice(-8)
      return `${str.substring(0, 2)}:${str.substring(2, 4)}:${str.substring(4, 6)}`
    },
    unit: '',
    color: color.dataStationData,
    visible: true,
    isBattery: false,
  },
  'dataStationData/direction': {
    title: '方位',
    icon: Fas.faCompass,
    formatter: (val) => (val / 10),
    unit: '°',
    color: color.dataStationData,
    visible: true,
    isBattery: false,
  },
  'legacyTachometerData/Speed': {
    title: '回転数',
    icon: Fas.faSyncAlt,
    formatter: (val) => (
      val === -1 ? '---' : val
    ),
    unit: 'rpm',
    color: color.legacyTachometerData,
    visible: true,
    isBattery: false,
  },
  'legacyTachometerData/temperature': {
    title: '温度(17回転計)',
    icon: Fas.faThermometerThreeQuarters,
    formatter: (val) => (
      val === -1 ? '---' : val / 10
    ),
    unit: '℃',
    color: color.legacyTachometerData,
    visible: false,
    isBattery: false,
  },
  'legacyTachometerData/power': {
    title: '出力(17回転計)',
    icon: Fas.faBiking,
    formatter: (val) => (
      val === -1 ? '---' : val
    ),
    unit: 'W',
    color: color.legacyTachometerData,
    visible: false,
    isBattery: false,
  },
  'legacyTachometerData/battery': {
    title: 'バッテリー(17回転計)',
    icon: Fas.faBatteryThreeQuarters,
    formatter: (val) => (
      val === -1 ? '---' : val / 10
    ),
    unit: 'V',
    color: color.legacyTachometerData,
    visible: false,
    isBattery: true,
  },
  'rightTachometerData/rotationSpeed': {
    title: '回転数(右回転計)',
    icon: Fas.faSyncAlt,
    formatter: (val) => (
      val < 10  ? '---' : val
    ),
    unit: 'rpm',
    color: color.rightTachometerData,
    visible: false,
    isBattery: false,
  },
  'rightTachometerData/temperature': {
    title: '温度(右回転計)',
    icon: Fas.faThermometerThreeQuarters,
    formatter: (val) => (
      val === -1 ? '---' : val / 10
    ),
    unit: '℃',
    color: color.rightTachometerData,
    visible: false,
    isBattery: false,
  },
  'rightTachometerData/power': {
    title: '出力(右回転計)',
    icon: Fas.faBiking,
    formatter: (val) => (
      val === -1 ? '---' : val
    ),
    unit: 'W',
    color: color.rightTachometerData,
    visible: true,
    isBattery: false,
  },
  'rightTachometerData/bridgeRaw': {
    title: 'ひずみゲージ(右回転計)',
    icon: Fas.faWaveSquare,
    formatter: (val) => (
      val === -1 ? '---' : val
    ),
    unit: '',
    color: color.rightTachometerData,
    visible: false,
    isBattery: false,
  },
  'rightTachometerData/quaternionW': {
    title: 'quatW(右回転計)',
    icon: Fas.faDiceD20,
    formatter: (val) => (
      val === -1 ? '---' : val
    ),
    unit: '',
    color: color.rightTachometerData,
    visible: false,
    isBattery: false,
  },
  'rightTachometerData/battery': {
    title: 'バッテリー(右回転計)',
    icon: Fas.faBatteryThreeQuarters,
    formatter: (val) => (
      val === -1 ? '---' : val / 10
    ),
    unit: 'V',
    color: color.rightTachometerData,
    visible: false,
    isBattery: true,
  },
  'leftTachometerData/rotationSpeed': {
    title: '回転数(左回転計)',
    icon: Fas.faSyncAlt,
    formatter: (val) => (
      val < 10 ? '---' : val
    ),
    unit: 'rpm',
    color: color.leftTachometerData,
    visible: false,
    isBattery: false,
  },
  'leftTachometerData/temperature': {
    title: '温度(左回転計)',
    icon: Fas.faThermometerThreeQuarters,
    formatter: (val) => (
      val === -1 ? '---' : val / 10
    ),
    unit: '℃',
    color: color.leftTachometerData,
    visible: false,
    isBattery: false,
  },
  'leftTachometerData/power': {
    title: '出力(左回転計)',
    icon: Fas.faBiking,
    formatter: (val) => (
      val === -1 ? '---' : val
    ),
    unit: 'W',
    color: color.leftTachometerData,
    visible: true,
    isBattery: false,
  },
  'leftTachometerData/bridgeRaw': {
    title: 'ひずみゲージ(左回転計)',
    icon: Fas.faWaveSquare,
    formatter: (val) => (
      val === -1 ? '---' : val
    ),
    unit: '',
    color: color.leftTachometerData,
    visible: false,
    isBattery: false,
  },
  'leftTachometerData/quaternionW': {
    title: 'quatW(左回転計)',
    icon: Fas.faDiceD20,
    formatter: (val) => (
      val === -1 ? '---' : val
    ),
    unit: '',
    color: color.leftTachometerData,
    visible: false,
    isBattery: false,
  },
  'leftTachometerData/battery': {
    title: 'バッテリー(左回転計)',
    icon: Fas.faBatteryThreeQuarters,
    formatter: (val) => (
      val === -1 ? '---' : val / 10
    ),
    unit: 'V',
    color: color.leftTachometerData,
    visible: false,
    isBattery: true,
  },
  'empennageData/elevatorAngle': {
    title: 'エレベータ角',
    icon: Fas.faRuler,
    formatter: (val) => (
      val === -1 ? '---' : val / 10
    ),
    unit: '°',
    color: color.empennageData,
    visible: false,
    isBattery: false,
  },
  'empennageData/elevatorDisplay': {
    title: 'エレベータ',
    icon: Fas.faArrowsAltV,
    formatter: (val) => (
      val === -1 ? '---' : val - 3
    ),
    unit: '',
    color: color.empennageData,
    visible: true,
    isBattery: false,
  },
  'empennageData/elevatorTemperature': {
    title: '温度(エレベータサーボ)',
    icon: Fas.faThermometerThreeQuarters,
    formatter: (val) => (
      val === -1 ? '---' : val
    ),
    unit: '℃',
    color: color.empennageData,
    visible: false,
    isBattery: false,
  },
  'empennageData/elevatorTrim': {
    title: 'エレベータトリム',
    icon: Fas.faArrowsAltV,
    formatter: (val) => (
      val === -1 ? '---' : val
    ),
    unit: '',
    color: color.empennageData,
    visible: false,
    isBattery: false,
  },
  'empennageData/elevatorVoltage': {
    title: '電圧(エレベータサーボ)',
    icon: Fas.faCarBattery,
    formatter: (val) => (
      val === -1 ? '---' : val / 100
    ),
    unit: 'V',
    color: color.empennageData,
    visible: false,
    isBattery: false,
  },
  'empennageData/rudderAngle': {
    title: 'ラダー角',
    icon: Fas.faRuler,
    formatter: (val) => (
      val === -1 ? '---' : val / 10
    ),
    unit: '°',
    color: color.empennageData,
    visible: false,
    isBattery: false,
  },
  'empennageData/rudderDisplay': {
    title: 'ラダー',
    icon: Fas.faArrowsAltH,
    formatter: (val) => (
      val === -1 ? '---' : val - 3
    ),
    unit: '',
    color: color.empennageData,
    visible: true,
    isBattery: false,
  },
  'empennageData/rudderTemperature': {
    title: '温度(ラダーサーボ)',
    icon: Fas.faThermometerThreeQuarters,
    formatter: (val) => (
      val === -1 ? '---' : val
    ),
    unit: '℃',
    color: color.empennageData,
    visible: false,
    isBattery: false,
  },
  'empennageData/rudderTrim': {
    title: 'ラダートリム',
    icon: Fas.faArrowsAltH,
    formatter: (val) => (
      val === -1 ? '---' : val
    ),
    unit: '',
    color: color.empennageData,
    visible: false,
    isBattery: false,
  },
  'empennageData/rudderVoltage': {
    title: '電圧(ラダーサーボ)',
    icon: Fas.faCarBattery,
    formatter: (val) => (
      val === -1 ? '---' : val / 100
    ),
    unit: 'V',
    color: color.empennageData,
    visible: false,
    isBattery: false,
  },
  'empennageData/controllerBattery': {
    title: 'コントローラバッテリー',
    icon: Fas.faBatteryThreeQuarters,
    formatter: (val) => (
      val === -1 ? '---' : val / 10
    ),
    unit: 'V',
    color: color.empennageData,
    visible: false,
    isBattery: false,
  },
  'currentVoltageData/voltage': {
    title: 'サーボ電圧',
    icon: Fas.faCarBattery,
    formatter: (val) => (
      val === -1 ? '---' : val / 1000
    ),
    unit: 'V',
    color: color.currentVoltageData,
    visible: true,
    isBattery: false,
  },
  'currentVoltageData/current': {
    title: 'サーボ電流',
    icon: Fas.faAtom,
    formatter: (val) => (
      val
    ),
    unit: 'mA',
    color: color.currentVoltageData,
    visible: true,
    isBattery: false,
  },
  'currentVoltageData/power': {
    title: 'サーボ電力',
    icon: Fas.faPlug,
    formatter: (val) => (
      val === -1 ? '---' : val / 1000
    ),
    unit: 'W',
    color: color.currentVoltageData,
    visible: false,
    isBattery: false,
  },
  'currentVoltageData/energy': {
    title: 'サーボ電力量',
    icon: Fas.faPlug,
    formatter: (val) => (
      val === -1 ? '---' : val / 10
    ),
    unit: 'mAh',
    color: color.currentVoltageData,
    visible: true,
    isBattery: false,
  },
  'currentVoltageData/battery': {
    title: '電流計バッテリー',
    icon: Fas.faBatteryThreeQuarters,
    formatter: (val) => (
      val === -1 ? '---' : val / 10
    ),
    unit: 'V',
    color: color.currentVoltageData,
    visible: true,
    isBattery: true,
  },
}

const formatData = (key, value) => {
  if (format[key]) {
    return {
      title: format[key].title,
      icon: format[key].icon,
      value: format[key].formatter(value),
      rawValue: value,
      unit: format[key].unit,
      color: format[key].color,
      key: key,
      visible: format[key].visible,
      isBattery: format[key].isBattery,
    }
  } else {
    return {
      title: key,
      icon: Fas.faDatabase,
      value,
      rawValue: value,
      unit: '',
      key: key,
      visible: false,
      isBattery: false,
    }
  }
}

export {
  formatData,
  color,
}