import { css } from '@emotion/react';
import React, { useState } from 'react';
import { Container, Row, Tab, Tabs } from 'react-bootstrap';
import Datacard from './DataCard';
import './tab.css';

const DataScreen = ({ currentData }) => {
    const [tabKey, setTabKey] = useState('summary');
    const onChangeTab = (key) => {
        setTabKey(key)
    };
    const summaryName = [
        'speedometerData/airSpeed',
        'altimeterData/altitude',
        'leftTachometerData/power',
        'rightTachometerData/power',
        'leftTachometerData/rotationSpeed',
        'rightTachometerData/rotationSpeed',
        'dataStationData/groundSpeed',
        'timestamp'
    ]
    const summary = summaryName.map(key => {
        return (currentData && currentData[key]) || null
    })
    return (
        <div css={styles.wrap}>
            <Tabs
                activeKey={tabKey}
                onSelect={onChangeTab}
            >
                <Tab eventKey='summary' title='Summary'>
                    <Container fluid>
                        <Row xs={1} md={2}>
                            {summary.map((val, key) => (<Datacard data={val} key={key} />))}
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey='all' title='All'>
                    <Container fluid>
                        <Row xs={1} md={2}>
                            {currentData && Object.keys(currentData).map((key) => (<Datacard data={currentData[key]} key={key} />))}
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey='battery' title='Battery'>
                    <Container fluid>
                        <Row xs={1} md={2}>
                            {currentData && Object.keys(currentData).map((key) => (currentData[key].isBattery && <Datacard data={currentData[key]} key={key} />))}
                        </Row>
                    </Container>
                </Tab>
            </Tabs>
            {/* <TabPanel value='' */}
        </div>
    )
}

const styles = {
    wrap: css({
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    }),
}

export default DataScreen