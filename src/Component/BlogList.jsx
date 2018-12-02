import React, { Component } from 'react';
import axios from 'axios';
import reactRender from 'react-render-html';
import '../css/markdown.css';

class BlogList extends Component {
    state = {
        content: '',
        name: ''
    }

    render() {
        return (
            <section className="u-content-space">
                <div className="container">
                    <header class="mb-0">
                        <h2 class="h1">{this.state.name}</h2>
                        <p class="h5">date</p>
                    </header>
                    <div className="row ">
                        <div className="col-md-12 markdown-body">
                            {reactRender(this.state.content)}
                        </div>
                    </div>

                </div>
            </section>
        );
    }

    getContent = () => {
        let self = this;
        let url = 'https://api.github.com/repos/nvijaykarthik/nvijaykarthik.github.io/contents/_posts/2018-02-20-Spring-Rest-custom-error-message-or-response-handling.md';
        let header = { 'content-type': 'application/vnd.github.VERSION.raw' }
        axios.get(url,
            { headers: header }).then(
                resp => {
                    let buff = new Buffer(resp.data.content, 'base64');
                    let text = buff.toString('ascii');
                    let name = this.findAndReplace(resp.data.name,"-", " ");
                    this.setState({
                        name: name
                    })
                    this.renderAsMarkdown(text);
                },
                err => {
                    console.err(err);
                }
            )
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
    }


}

export default BlogList;
