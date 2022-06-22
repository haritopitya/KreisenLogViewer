import React from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from '@emotion/react'
const DataCard = ({ data }) => {
    if (!data) return null
    const styles = {
        card: css({
            marginTop: '5px',
            marginBottom: '5px',
            borderColor:data.color
        }),
        icon: css({
            fontSize: '40px',
            color:data.color,
        }),
        val:css( {
            fontSize: '30px',
            color: data.color,
        }),
        title:css( {
            fontSize: '12px',
            color: 'white',
        }),
    }
    return (
        <Col>
            <Card
                bg='dark'
                css={styles.card} >
                <Card.Body>
                    <Container>
                        <Row>
                            <Col xs="4">
                                <div css={styles.icon}>
                                    <FontAwesomeIcon icon={data.icon} />
                                </div>
                            </Col>
                            <Col xs="8">
                                <div css={styles.title}>
                                    {data.title}
                                </div>
                                <div css={styles.val} >
                                    {data.value} {data.unit}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card >
        </Col >
    )
}

export default DataCard