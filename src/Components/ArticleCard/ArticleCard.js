import React from 'react'
import { 
    Card, 
    CardImg, 
    CardTitle, 
    CardSubtitle, 
    CardBody, 
    Badge 
} from 'reactstrap'
import classes from './ArticleCard.module.css'
import { Link } from 'react-router-dom'

export function timeStampToString(ts) {
    const date = new Date(ts*1000)
    return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
}

const ArticleCard = (props) => {
    return (
        <Card className={classes.ArticleCard}>
            <Link to={'article/' + props.data.id}>
                <CardImg 
                    top
                    width='100%'
                    src="https://picsum.photos/200"
                    alt='Card Image'
                    className={classes.CardImage}
                />
            </Link>
            <CardBody className= {classes.CardBody} >
                <CardTitle className= {classes.CardTitle} >
                    <Link to={'article/' + props.data.id}>
                        {props.data.title}
                    </Link>
                </CardTitle>
                <CardSubtitle className= {classes.CardSubtitle} >
                    <Badge className= {classes.ArticleLabel} >
                        {props.data.category}
                    </Badge>
                    <Badge className= {classes.CreateDate} >
                        {props.data.createdAt}
                    </Badge>
                </CardSubtitle>
            </CardBody>
        </Card>
    )
}

export default ArticleCard