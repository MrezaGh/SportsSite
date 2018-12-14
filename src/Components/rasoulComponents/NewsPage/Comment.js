import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import './NewsPage.css';
import './Comment.css'

export default class Comment extends Component {

    render() {

        return (

            <div className="mytextalignright ui message ">

                <div className="ui minimal comments">
                    <h3 className="ui dividing header">Comments</h3>


                    <div className="comments">
                        <div className="comment">
                            <div className="content">
                                <a className="author">سید ناصر</a>
                                <div className="metadata">
                                    <span className="date">5 days ago</span>
                                </div>
                                <div className="text">
                                    خدایا بسه دیگه
                                </div>
                                <div className="actions">
                                    <a className="reply">Reply</a>
                                </div>
                            </div>
                        </div>
                        <div className="comment">
                            <div className="content">
                                <a className="author">سید ناصر</a>
                                <div className="metadata">
                                    <span className="date">5 days ago</span>
                                </div>
                                <div className="text">
                                    خدایا بسه دیگه
                                </div>
                                <div className="actions">
                                    <a className="reply">Reply</a>
                                </div>
                            </div>
                        </div>
                        <form className="ui reply form">
                            <div className="field">
                                <textarea></textarea>
                            </div>
                            <div className="ui blue labeled submit icon button">
                                <i className="icon edit"></i> Add Reply
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );


    }

}