import React from 'react';
import Image from 'next/image';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { AiOutlineDownload, AiFillCrown } from 'react-icons/ai';
import Divider from '../common/Divider';
import { generateUrl } from '../../helper/generateUrl';
import style from '../../../styles/home_page.module.scss';

const Build = ({ videos, router }) => {

    return (
        <Container className={`mt-5 ${style.home_card_container}`}>
            <Row className='justify-content-center'>
                {videos?.slice(0, 15).map((video, index) => {
                    const imageLink = video.thumbnail;
                    const tags = video?.tags;

                    return (
                        <Col lg={4} md={6} sm={11} xs={11}
                            className={`${style.video_card}`}
                            key={index}
                        >
                            <Card className={`${style.card} cardImg shadow-sm text-center p-3 my-3 `}>
                                <Image
                                    width={350}
                                    height={200}
                                    className='img-fluid'
                                    src={imageLink}
                                    alt={video.title}
                                    draggable="false"
                                />

                                <Card.Body>
                                    <Card.Title className={`${style.card_title}`}>
                                        {video.title}
                                    </Card.Title>

                                    <Card.Text className={`${style.card_text}`}>
                                        {tags.map((e, i) =>
                                            <span
                                                key={i}
                                                className='text-muted'
                                            >
                                                {i > 0 && <span className='mx-2'>•</span>}
                                                {e}
                                            </span>
                                        )}
                                    </Card.Text>

                                    <Divider />

                                    <Row className={`${style.card_footer} text-muted justify-content-center`}>
                                        <Col className={`${style.channel_title} col-4 p-0`}>
                                            <AiFillCrown color='orange' />
                                            <span className={style.footer_span}>{video.channelTitle}</span>
                                        </Col>
                                        <Col className={`${style.card_col} col-1 px-1`}>
                                            <Divider type={1} />
                                        </Col>
                                        <Col className={`${style.card_col} col-4 p-0`} onClick={() => router.push(`${generateUrl(video.title)}`)}>
                                            <AiOutlineDownload />
                                            <span className={style.footer_span}><b className={style.bold_download}>Download</b></span>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>)
                })}
            </Row>
        </Container>
    );
};

export default Build;