import React,{Component} from 'react'
import {Modal,ModalBody,ModalHeader,Button,Form, Badge,Media} from 'reactstrap'
import {Stagger,Fade} from 'react-animation-components'
function RenderEmployee({employee}) {
    
    return (
          
          <Fade in>
            <div key={employee.id} className="col-12 mt-5">
                <Media tag="li" className="empmedia">
                <Media left middle>
                    <Media object src={employee.image} alt={employee.name} className="empimg ml-3 mt-3"/>
                </Media>
                <Media body className="ml-5 mt-3 mb-1 empdet">
                    <Media heading>{employee.name}</Media>
                    <h5>Top Skills of the employee</h5>
                    <ul className="empskill">
                        <li><strong>{employee.skills[0].toUpperCase()}</strong></li>
                        <li><strong>{employee.skills[1].toUpperCase()}</strong></li>
                        <li><strong>{employee.skills[2].toUpperCase()}</strong></li>
                    </ul>
                </Media>
                    
                 <Media right><button className="button m-2 mt-5 mr-4"><span>View Profile</span></button></Media>   
                </Media>
            </div>
          </Fade>
          
    );

}

class SearchEmployee extends Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpen:false,
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
        this.toggleModal=this.toggleModal.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    toggleModal(){
        this.setState({
          isModalOpen: !this.state.isModalOpen
        })
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.checked;
        const name = target.name;
        this.setState({
          skills:{...this.state.skills,[name]: value}
        });
    }

    handleSubmit(event){
        this.toggleModal()
        // alert(`C:${this.state.c} CPP : ${this.state.cpp}`);
        event.preventDefault()
    }

    render(){
        const state_keys=Object.keys(this.state.skills).map((item)=>{
            if(this.state.skills[item]===true)
            return (
            <h3 className="pr-2"><Badge color="info" pill >{item.toUpperCase()}</Badge></h3>
            )
        });
        
        return(
            <div>
            <div className="container">
                <div className="row pt-4">
                    <span className="plus"><i className="fa fa-plus-circle plus-1" onClick={this.toggleModal}></i>    Add skills to filter</span>
                </div>
            </div>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>ADD SKILLS</ModalHeader>
            <ModalBody className="modal-bdy">
                <Form className="form" onSubmit={(values)=>this.handleSubmit(values)}>
                    <div>
                        <div className="inputGroup">
                            <input id="c" name="c" type="checkbox" onChange={this.handleInputChange} defaultChecked={this.state.skills.c}/>
                            <label for="c">C</label>
                        </div>
                        
                        <div className="inputGroup">
                            <input id="cpp" name="cpp" type="checkbox" onChange={this.handleInputChange} defaultChecked={this.state.skills.cpp}/>
                            <label for="cpp">C++</label>
                        </div>
                        <div className="inputGroup">
                            <input id="python" name="python" type="checkbox" onChange={this.handleInputChange} defaultChecked={this.state.skills.python}/>
                            <label for="python">Python</label>
                        </div>
                        <div className="inputGroup">
                            <input id="java" name="java" type="checkbox" onChange={this.handleInputChange} defaultChecked={this.state.skills.java}/>
                            <label for="java">Java</label>
                        </div>
                        <div className="inputGroup">
                            <input id="reactjs" name="reactjs" type="checkbox" onChange={this.handleInputChange} defaultChecked={this.state.skills.reactjs}/>
                            <label for="reactjs">React JS</label>
                        </div>
                        <div className="inputGroup">
                            <input id="angularjs" name="angularjs" type="checkbox" onChange={this.handleInputChange} defaultChecked={this.state.skills.angularjs}/>
                            <label for="angularjs">Angular JS</label>
                        </div>
                        <div className="inputGroup">
                            <input id="nodejs" name="nodejs" type="checkbox" onChange={this.handleInputChange} defaultChecked={this.state.skills.nodejs}/>
                            <label for="nodejs">Node JS</label>
                        </div>
                        <div className="inputGroup">
                            <input id="devops" name="devops" type="checkbox" onChange={this.handleInputChange} defaultChecked={this.state.skills.devops}/>
                            <label for="devops">DevOps</label>
                        </div>
                        <div className="inputGroup">
                            <input id="rubyonrails" name="rubyonrails" type="checkbox" onChange={this.handleInputChange} defaultChecked={this.state.skills.rubyonrails}/>
                            <label for="rubyonrails">Ruby on Rails</label>
                        </div>
                    </div>
                    <Button type="submit" color="primary">
                            Add
                    </Button>
                </Form>
                
            </ModalBody>
          </Modal>
            <div className="container">
                <div className="row pt-1">
                    {state_keys}
                </div>
            </div>
            <div className="container">
                <div className="row row-content pt-1">
                    <div className="col-12">
                    <Stagger in >
                    <Media list>
                        <RenderEmployee employee={this.state.employee[0]}/>
                        <RenderEmployee employee={this.state.employee[1]}/>
                    </Media>
                    </Stagger>
                    </div>
                
                </div>
            </div>
         </div>
        )
    }
}
export default SearchEmployee