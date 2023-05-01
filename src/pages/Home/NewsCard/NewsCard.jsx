import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaEye, FaStar, FaRegStar } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const NewsCard = ({ news }) => {
    const { title, details, _id, image_url, author, total_view, rating } = news;
    return (
        <Card className="my-4">
            <Card.Header className='d-flex align-items-center'>

                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p>{moment(author?.published_date).format("y-MM-D")}</p>
                </div>
                <FaRegBookmark></FaRegBookmark>
                <FaShareAlt></FaShareAlt>


            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ?
                        <>{details}</> :
                        <>{details.slice(0, 250)}....<Link className='btn text-primary btn-link' to={`/news/${_id}`}>Read More</Link></>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center">
                <div className='flex-grow-1 d-flex align-items-center gap-2'>
                    <Rating style={{ maxWidth: 250 }} value={rating} readOnly />
                    <span>{rating?.number}</span>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    <FaEye></FaEye>{total_view}
                </div>
            </Card.Footer>
        </Card >
    );
};

export default NewsCard;