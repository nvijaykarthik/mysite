import React, { Component } from 'react';
import axios from 'axios';
import reactRender from 'react-render-html';
import '../css/markdown.css';

const pageURL='https://api.github.com/repos/nvijaykarthik/nvijaykarthik.github.io/contents/';

class BlogPage extends Component {
    state = {
        content: '',
        name: '',
        date:''
    }

    render() {
        return (
            <section className="u-content-space">
                <div className="container">
                    <header class="mb-0">
                        <h2 class="h1">{this.state.name}</h2>
                        <p class="h5">{this.state.date}</p>
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

    getContent = (pageName) => {
        let self = this;
        let url = pageURL.concat(pageName);
        let header = { 'content-type': 'application/vnd.github.VERSION.raw' }
        axios.get(url,
            { headers: header }).then(
                resp => {
                    let buff = new Buffer(resp.data.content, 'base64');
                    let text = buff.toString('ascii');

                     let nameRemovedMd=resp.data.name.split(".");
                    let date_title=nameRemovedMd[0].split("_");
                    let title=this.findAndReplace(date_title[1],"-"," ")

                    this.setState({
                        name: title,
                        date:date_title[0]
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
        let name=this.props.match.params.name;
        let blg=this.props.match.params.blg;
        let folder=this.props.match.params.folder;
        let resource=blg+"/"+folder+"/"+name
        this.getContent(resource);
    }


}

export default BlogPage;
