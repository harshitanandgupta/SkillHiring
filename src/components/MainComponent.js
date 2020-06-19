import React,{Component} from 'react'
import HeaderComponent from './HeaderComponent'
import SearchEmployee from './SearchEmployee'
import {Modal,ModalBody,ModalHeader,Button,Form} from 'reactstrap'
import ProfileView from './ProfileView'
import { Switch, Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            ishomeModalOpen:false,
            skills:{
                c:false,
                cpp:false,
                java:false,
                python:false,
                nodejs:false,
                reactjs:false,
                rubyonrails:false,
                angularjs:false,
                devops:false,
            },
            employee:[
                {
                    id:1,
                    name:'Harshit Gupta',
                    image:'assets/images/harshit.png',
                    phone:'+917003214924',
                    email:'harshitanandgupta@gmail.com',
                    experience:[
                        'XYZ Limited',
                        'TechSolutions Limited'
                    ],
                    projects :[
                        'https://link1.com',
                        'https://link2.com'
                    ],
                    certificates:[
                        'Certification 1',
                        'Certification 2'
                    ],
                    bio:'This is a test bio of a Employee.This is a test bio of a Employee.This is a test bio of a Employee.This is a test bio of a Employee.',
                    skills:[
                        'c','cpp','python'
                    ]
               },
               {
                id:2,
                name:'Rahul Gupta',
                image:'assets/images/harshit.png',
                phone:'+917003214924',
                email:'harshitanandgupta@gmail.com',
                experience:[
                    'XYZ Limited',
                    'TechSolutions Limited'
                ],
                projects :[
                    'https://link1.com',
                    'https://link2.com'
                ],
                certificates:[
                    'Certification 1',
                    'Certification 2'
                ],
                bio:'This is a test bio of a Employee.This is a test bio of a Employee.This is a test bio of a Employee.This is a test bio of a Employee.',
                skills:[
                    'c','nodejs','python'
                ]
                }
            ]
        }
        this.changeSkill=this.changeSkill.bind(this)
        this.toggleHomeModal=this.toggleHomeModal.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this);

    }
    changeSkill(updatedskill){
        this.setState({
            skills:updatedskill
        })
    }
    toggleHomeModal(){
        this.setState(
            {
                ishomeModalOpen:!this.state.ishomeModalOpen
            }
        )
        console.log(this.state.ishomeModalOpen)
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.checked;
        const name = target.name;
        this.changeSkill(
          {...this.state.skills,[name]: value}
        );
    }
    handleSubmit(event){
        this.toggleHomeModal()
        // alert(`C:${this.state.c} CPP : ${this.state.cpp}`);
        event.preventDefault()
        this.render()
    }
    render(){
        const Profile=({match}) => {
            return (
                <ProfileView emp={this.state.employee.filter((item)=>item.id===parseInt(match.params.id,10))[0]}/>
            )
        }
        return (
            <div>
            <HeaderComponent />
            <Modal isOpen={this.state.ishomeModalOpen} toggle={this.toggleHomeModal}>
            <ModalHeader toggle={this.toggleHomeModal}>ADD SKILLS</ModalHeader>
            <ModalBody className="modal-bdy">
                <Form className="form" onSubmit={(values)=>this.handleSubmit(values)}>
                    <div>
                        <div className="inputGroup">
                            <input id="c" name="c" type="checkbox" onChange={this.handleInputChange} defaultChecked={this.state.skills.c}/>
                            <label htmlFor="c" >C</label>
                        </div>
                        
                        <div className="inputGroup">
                            <input id="cpp" name="cpp" type="checkbox" onChange={this.handleInputChange} defaultChecked={this.state.skills.cpp}/>
                            <label htmlFor="cpp">C++</label>
                        </div>
                        <div className="inputGroup">
                            <input id="python" name="python" type="checkbox" onChange={this.handleInputChange} defaultChecked={this.state.skills.python}/>
                            <label htmlFor="python">Python</label>
                        </div>
                        <div className="inputGroup">
                            <input id="java" name="java" type="checkbox" onChange={this.handleInputChange} defaultChecked={this.state.skills.java}/>
                            <label htmlFor="java">Java</label>
                        </div>
                        <div className="inputGroup">
                            <input id="reactjs" name="reactjs" type="checkbox" onChange={this.handleInputChange} defaultChecked={this.state.skills.reactjs}/>
                            <label htmlFor="reactjs">React JS</label>
                        </div>
                        <div className="inputGroup">
                            <input id="angularjs" name="angularjs" type="checkbox" onChange={this.handleInputChange} defaultChecked={this.state.skills.angularjs}/>
                            <label htmlFor="angularjs">Angular JS</label>
                        </div>
                        <div className="inputGroup">
                            <input id="nodejs" name="nodejs" type="checkbox" onChange={this.handleInputChange} defaultChecked={this.state.skills.nodejs}/>
                            <label htmlFor="nodejs">Node JS</label>
                        </div>
                        <div className="inputGroup">
                            <input id="devops" name="devops" type="checkbox" onChange={this.handleInputChange} defaultChecked={this.state.skills.devops}/>
                            <label htmlFor="devops">DevOps</label>
                        </div>
                        <div className="inputGroup">
                            <input id="rubyonrails" name="rubyonrails" type="checkbox" onChange={this.handleInputChange} defaultChecked={this.state.skills.rubyonrails}/>
                            <label htmlFor="rubyonrails">Ruby on Rails</label>
                        </div>
                    </div>
                    <Button type="submit" color="primary">
                            Add
                    </Button>
                </Form>
                
            </ModalBody>
          </Modal>
            <Switch>
                <Route path="/home" component={()=><SearchEmployee skills={this.state.skills} 
                employee={this.state.employee} changeSkill={this.changeSkill} 
                toggleModal={this.toggleHomeModal} isModalopen={this.state.ishomeModalOpen}/> } />
                <Route exact path="/profile/:id" component={Profile}/>
                <Redirect to="/home" />
            </Switch>
            
            </div>
            
        )
    }
}

export default MainComponent