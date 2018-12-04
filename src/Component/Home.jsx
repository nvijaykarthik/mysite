import React, { Component } from 'react';
import springICO from '../icon-spring-framework.svg';
import microservice from '../img/microservice.png';
import pinakee from '../img/pinakee.png';
import blector from '../img/blector.png';
import firestrap from '../img/wip.png';

const opnSrcIcoStl={
    height:'300px'
    };
const opnSrcBodyHeight={
    height:'200px'
    };
class Home extends Component {
    
    render() {
        return (
            <div>
                <section className="u-content-space">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-3">
                                <img alt="" width="300" className="u-box-shadow-lg img-fluid rounded-circle mt-1" src="https://avatars1.githubusercontent.com/u/7747313?s=460&amp;v=4"></img>
                            </div>
                            <div className="col-md-9">
                                <h1>VijayKarthik Nagarajan</h1>
                                <h4><i>Full Stack/Polyglot: Engineer (Development,Archietct)</i></h4>
                                13+ years of industrial experience and still going on.<br/>
                                Experience on Microservice, Docket, PCF, heroku. <br/>
                                Interested in block chain technology and contribution to public via blog or opensource solution.<br/>
                                Working on Messaging system using spring integration.
                            </div>
                    </div>
                    </div>
                </section>
                <section class="bg-secondary py-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 text-center text-md-left mb-3 mb-md-0 text-white">
                                <span class=" "></span>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="bg-light u-content-space">
                    <div class="container">
                        <header class="text-center w-md-50 mx-auto mb-8">
                            <h2 class="h1">Skills</h2>
                            <p class="h5">Providing solutions on the key technologies, for faster time to market</p>
                        </header>
                        <div class="row">
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <div class="display-4 text-primary mb-2">
                                    <i class="fas fa-dice-d20"></i>
                                </div>
                                <h4 class="h5">Microservices</h4>
                                <p>Achieve virtually any look and layout design within one UI Kit solution.</p>
                            </div>

                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <div class="display-4 text-primary mb-2">
                                    <i class="fas fa-braille"></i>
                                </div>
                                <h4 class="h5">Firestrap Framework</h4>
                                <p>We strive to figure out ways to help your audience grow through all platforms.</p>
                            </div>

                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <div class="display-4 text-primary mb-2">
                                    <i class="fas fa-cubes"></i>
                                </div>
                                <h4 class="h5">Blockchain Technologies</h4>
                                <p>Find what you need in one template and combine features at will.</p>
                            </div>
                        </div>
                        <hr class="my-8"></hr>

                        <div class="row">
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <div class="display-4 text-primary mb-2">
                                    <img class="sidebyside" width="60" id="spring-framework-icon" src={springICO} alt="spring boot framework icon"></img>
                                </div>
                                <h4 class="h5">Spring Boot / Cloud</h4>
                                <p>Easy and fast adjustments of elements are possible with Stream UI Kit.</p>
                            </div>

                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <div class="display-4 text-primary mb-2">
                                    <i class="fas fa-box"></i>
                                </div>
                                <h4 class="h5">Containerization</h4>
                                <p>Our React Powered App will save you tons of time and cost in your projects.</p>
                            </div>

                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <div class="display-4 text-primary mb-2">
                                    <i class="fas fa-circle-notch"></i>
                                </div>
                                <h4 class="h5">Agile</h4>
                                <p>Power your app with Angular components for no cost within one stop solution.</p>
                            </div>
                        </div>

                    </div>
                </section>
                <section class="u-content-space">
                    <div class="container">
                        <header class="text-center w-md-50 mx-auto mb-8">
                            <h2 class="h1">Opensource Contribution</h2>
                            <p class="h5">Few notable contributions on the Opensource</p>
                        </header>

                        <div class="row">
                            <div class="col-lg-3 col-sm-6 mb-5">
                                <div class="card u-box-shadow-lg">
                                    <div style={opnSrcIcoStl}>
                                    <img class="card-img-top" src={microservice} alt="Microservice" width="400" height="300"></img>
                                    </div>
                                    <div class="card-body" style={opnSrcBodyHeight}>
                                        <h5 class="card-title"><a target="_blank" rel="noopener noreferrer" href="https://github.com/nvijaykarthik/Spring-boot-microservice-Reference-Implementaion-setup-framework">Microservice Reference Impl</a></h5>
                                        <p class="card-text">Reference implementation of the Microserivce using springboot.</p>
                                        
                                    </div>
                                    <div class="card-footer">
                                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/nvijaykarthik/Spring-boot-microservice-Reference-Implementaion-setup-framework" class="btn btn-primary float-right">View Details</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 mb-5">
                                <div class="card u-box-shadow-lg">
                                    <div style={opnSrcIcoStl}>
                                    <img class="card-img-top" src={pinakee} width="400" height="300" alt="Pinakee Transformar Xquery"></img>
                                    </div>
                                    <div class="card-body" style={opnSrcBodyHeight}>
                                        <h5 class="card-title"><a target="_blank" rel="noopener noreferrer" href="https://github.com/nvijaykarthik/pinakee">Pinakee</a>   </h5>
                                        <p class="card-text">Pinakee is a ReST based API for XML transformation using Xquery</p>
                                        
                                    </div>
                                    <div class="card-footer">
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/nvijaykarthik/pinakee" class="btn btn-primary float-right">View Details</a>
                                </div>
                                </div>
                                
                            </div>
                            <div class="col-lg-3 col-sm-6 mb-5">
                                <div class="card u-box-shadow-lg">
                                    <div style={opnSrcIcoStl}>
                                    <img class="card-img-top"  src={firestrap}  width="400" alt="FireStrap"></img>
                                    </div>
                                    <div class="card-body" style={opnSrcBodyHeight}>
                                        <h5 class="card-title"><a target="_blank" rel="noopener noreferrer" href="https://github.com/nvijaykarthik/firestrap">Firestrap</a></h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        
                                    </div>
                                    <div class="card-footer">
                                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/nvijaykarthik/firestrap" class="btn btn-primary float-right">View Details</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 mb-5">
                                <div class="card u-box-shadow-lg">
                                    <div style={opnSrcIcoStl}>
                                    <img class="card-img-top" src={blector}  width="400" height="300" alt="Blector"></img>
                                    </div>
                                    <div class="card-body" style={opnSrcBodyHeight}>
                                        <h5 class="card-title"><a target="_blank" rel="noopener noreferrer" href="https://github.com/nvijaykarthik/block-chain-electronic-voting-reference-implementation-using-javascript">Blector</a></h5>
                                        <p class="card-text">Electronic Voting using block chain (reference Implementation) in Javascript</p>
                                        
                                    </div>
                                    <div class="card-footer">
                                        <a target="_blank" rel="noopener noreferrer"  href="https://github.com/nvijaykarthik/block-chain-electronic-voting-reference-implementation-using-javascript" class="btn btn-primary float-right">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
