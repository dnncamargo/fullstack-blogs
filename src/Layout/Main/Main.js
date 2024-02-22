import React, { Component } from "react";
import { Container } from "reactstrap";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";
import firebase from "../../Config/firebase"

const db = firebase.firestore()

class Main extends Component {
    constructor (props) {
        super(props);
        this.state={
            isLoaded: false,
            articles: []
        }
    }

    componentDidMount() {
        this.getArticles()
    }

    getArticles = () => {
        db  
            .collection( 'Articles' )
            .limit( 8 )
            .get()
            .then( docs => {
                if(!docs.empty) {
                    let allArticles = []
                    docs.forEach(function(doc) {
                        const article = {
                            id: doc,
                            ...doc.data()
                        }
                        allArticles.push(article)
                    })

                    this.setState({
                        articles: allArticles
                    }, () => {
                        this.setState({
                            isLoaded: true
                        })
                    })
                }
            })
    }

    render() {
        return (
            <div>
                <Container>
                    {
                        this.setState.isLoaded?
                            this.state.articles.map((article, index) => {
                                return (

                                    <ArticleCard
                                        key     = { index }
                                        data    = { article }
                                    />

                                    )
                            }): ""
                    }
                </Container>
                
            </div>
        )
    }
}

export default Main