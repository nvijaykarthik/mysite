import React, { Component } from 'react';
import axios from 'axios';
import '../css/markdown.css';
import { Link } from 'react-router-dom';

class BlogList extends Component {
    state = {
        content: '',
        blogData: [],
        blogContent: []
    }

    render() {
        return (
            <section className="u-content-space">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            {this.state.blogContent.map(b => {
                                let nameRemovedMd=b.name.split(".");
                                let date_title=nameRemovedMd[0].split("_");
                                let title=this.findAndReplace(date_title[1],"-"," ")
                                let link='/blog/'+b.path
                                return(
                                    <div className="border-bottom" key={b.name}>
                                    <header className="mb-0">
                                        <Link to={link}><h2 className="h2">{title}</h2></Link> 
                                        <p className="h5">{date_title[0]}</p>
                                    </header>
                                    <div>
                                        ......summary........
                                    </div>
                                     <Link to={link} className="btn btn btn-outline-primary">Read More...</Link>
                                    </div>
                                )
                                })
                            }
                        </div>
                        <div className="col-md-2">
                            <h3 className="h5 mb-3">Filter By Date</h3>
                            <div className="list-group">
                                {this.state.blogData.map(b => {
                                   return <a key={b.name} onClick={(e) => this.getPost(b.name, e)} href="#"
                                            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                        {b.name}
                                    </a>
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    getContent = () => {
        let self = this;
        let url = 'https://api.github.com/repos/nvijaykarthik/nvijaykarthik.github.io/contents/_blog';
        let header = { 'content-type': 'application/vnd.github.VERSION.raw' }
        axios.get(url,
            { headers: header }).then(
            resp => {
                let blogData = resp.data.filter(d => d.type === 'dir');
                blogData.sort((a, b) => {
                    return new Date(b.name) - new Date(a.name);
                })
                self.setState({
                    blogData: blogData
                })
            },
            err => {
                console.err(err);
            }
            )
    }

    getPost = (dir) => {
        let self = this;
        let url = 'https://api.github.com/repos/nvijaykarthik/nvijaykarthik.github.io/contents/_blog/' + dir;
        let header = { 'content-type': 'application/vnd.github.VERSION.raw' }
        axios.get(url,
            { headers: header }).then(
            resp => {
                let blogData = resp.data.filter(d => d.type === 'file');
                self.setState({
                    blogContent: blogData
                })
            },
            err => {
                console.err(err);
            }
            )
    }

    getPostSummary=(path)=>{
        let self = this;
        let url = 'https://api.github.com/repos/nvijaykarthik/nvijaykarthik.github.io/contents/' + path;
        let header = { 'content-type': 'application/vnd.github.VERSION.raw' }
        axios.get(url,
            { headers: header }).then(
            resp => {
                console.log(resp.data.content)
            },
            err => {
                console.err(err);
            }
            )
    }

    formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month].join('-');
    }

    renderAsMarkdown(text) {
        let self = this;
        let url = "https://api.github.com/markdown/raw"
        let header = { 'content-type': 'text/plain' }
        axios.post(url, text, { headers: header }).then(
            resp => {
                self.setState({
                    content: resp.data
                })
            },
            err => {
                console.err(err);
            }
        );
    }

    findAndReplace(string, target, replacement) {

        var i = 0, length = string.length;
        for (i; i < length; i++) {
            string = string.replace(target, replacement);
        }
        return string;
    }

    componentDidMount() {
        this.getContent();
        let thisMonth = this.formatDate(new Date());
        this.getPost(thisMonth);
    }


}

export default BlogList;
