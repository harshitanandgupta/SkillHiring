import React,{Component} from 'react'
class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            address:'',
            email:'',
            phone:'',
            designation:'',
            bio:'',
            skills:{
                'default':50
            },
            experience:{
                exp1:{
                    orgname:'',
                    startyear:'',
                    endyear:'',
                    description:''
                }
            },
            education:{
                edu1:{
                    name:'',
                    startyear:'',
                    endyear:'',
                    degree:''
                }
            }
        }
        this.skillonClick=this.skillonClick.bind(this)
        this.skillselectchange=this.skillselectchange.bind(this)
        this.skillsliderchange=this.skillsliderchange.bind(this)
        this.nameInputChange=this.nameInputChange.bind(this)
        this.exponClick=this.exponClick.bind(this)
        this.orgCross=this.orgCross.bind(this)
        this.handleInputChange=this.handleInputChange.bind(this)
        this.eduonClick=this.eduonClick.bind(this)
        this.eduCross=this.eduCross.bind(this)

    }
    skillonClick(){
        this.setState({
            skills:{
                ...this.state.skills,'default':'50'
            }
        })
    }
    skillselectchange(event){
        const upd=this.state.skills
        delete upd.default
        upd[event.target.value]='50'
        upd[event.target.id]=undefined
        this.setState({
            skills:upd
        })
    }
    skillsliderchange(event){
        const upd=this.state.skills
        upd[event.target.id]=event.target.value
        this.setState({
            skills:upd
        })
    }
    nameInputChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    exponClick(){
        const exp_no='exp'+(Object.keys(this.state.experience).length+1).toString()
        this.setState({
            experience:{
                ...this.state.experience,
                [exp_no]:{
                    orgname:'',
                    startyear:'',
                    endyear:'',
                    description:''
                }
            }
        })
    }
    orgCross(event){
        this.setState({
            experience:{
                ...this.state.experience,
                [event.target.id]:undefined
            }
        })
    }
    eduonClick(){
        const edu_no='edu'+(Object.keys(this.state.education).length+1).toString()
        this.setState({
            education:{
                ...this.state.education,
                [edu_no]:{
                    name:'',
                    startyear:'',
                    endyear:'',
                    degree:''
                }
            }
        })
    }
    eduCross(event){
        this.setState({
            education:{
                ...this.state.education,
                [event.target.id]:undefined
            }
        })
    }
    handleInputChange(event){
        var ret=event.target.id.split("_")
        if(ret[0]==="org"){
            const index='exp'+(ret[2]).toString()
            const property=ret[1]
            this.setState({
                experience:{
                    ...this.state.experience,
                    [index]:{
                        ...this.state.experience[index],
                        [property]:event.target.value
                    }
                }
            })
        }
        if(ret[0]==="edu"){
            const index='edu'+(ret[2]).toString()
            const property=ret[1]
            this.setState({
                education:{
                    ...this.state.education,
                    [index]:{
                        ...this.state.education[index],
                        [property]:event.target.value
                    }
                }
            })
        }
    }
    render(){
         console.log(this.state.experience)
        const renderskill=Object.keys(this.state.skills).map((item)=>{
            if(this.state.skills[item]!== undefined)
            return (
            <div className="w3-row-padding">
            <div className="w3-third">
                <select className="w3-select" name="option" value={item} onChange={this.skillselectchange} id={item}>
                <option value="default" disabled>Choose</option>
                <option value="c">C</option>
                <option value="cpp">CPP</option>
                <option value="python">PYTHON</option>
                </select>
            </div>
            <div className="w3-twothird pl-2 pt-2"><p >Rating : <input type="range" min="1" max="100" value={this.state.skills[item]} id={item} onChange={this.skillsliderchange}/></p></div>
            </div>
            )
            else
            return (
                <div></div>
            )
        })
        var exp_count=0
        const renderorg=Object.keys(this.state.experience).map((item)=>{
            if(this.state.experience[item]!== undefined){
                const index=item.charAt(item.length-1)
                exp_count++;
            return (
                <div className="mb-4">
                    <i className="fa fa-times plus-2 pull-right fa-lg" id={item} onClick={this.orgCross}></i>
                    <label htmlFor={`org_orgname_${index}`}><b>{exp_count}. Organisation Name </b></label>
                    <input id={`org_orgname_${index}`} className="w3-input w3-animate-input" type="text" style={{width:"50%"}} placeholder="Company Name"
                    value={this.state.experience[item].orgname} onChange={this.handleInputChange}></input>
                    <br/>
                    <div className="w3-half"> 
                        <label htmlFor={`org_startyear_${index}`}><b>Start Year</b></label>
                        <input name={`org_startyear_${index}`} id={`org_startyear_${index}`} className="w3-input w3-animate-input" type="text" placeholder="Month,Year"
                        value={this.state.experience[item].startyear} style={{width:"60%"}} onChange={this.handleInputChange}></input>
                    </div>
                    <div className="w3-half"> 
                        <label htmlFor={`org_endyear_${index}`}><b>End Year</b></label>
                        <input name={`org_endyear_${index}`} id={`org_endyear_${index}`} className="w3-input w3-animate-input" type="text" placeholder="Month,Year"
                        value={this.state.experience[item].endyear}  style={{width:"60%"}} onChange={this.handleInputChange}></input>
                    <br/>
                    </div>
                    <label htmlFor={`org_description_${index}`}><b>Description</b></label>
                    <textarea id={`org_description_${index}`} className="w3-input w3-animate-input" type="text"  placeholder="Describe Your Role"
                    value={this.state.experience[item].description} name={`org_description_year${index}`} onChange={this.handleInputChange}></textarea>
                    <hr/>
                </div>
            )}
            else
            return(<div></div>)

        })
        var edu_count=0;
        const renderedu=Object.keys(this.state.education).map((item)=>{
            if(this.state.education[item]!== undefined){
                const index=item.charAt(item.length-1)
                edu_count++;
            return (
                <div className="mb-4">
                    <i className="fa fa-times plus-2 pull-right fa-lg" id={item} onClick={this.eduCross}></i>
                    <label htmlFor={`edu_name_${index}`}><b>{edu_count}. Institute  Name </b></label>
                    <input id={`edu_name_${index}`} className="w3-input w3-animate-input" type="text" style={{width:"50%"}} placeholder="Institue Name"
                    value={this.state.education[item].name} onChange={this.handleInputChange}></input>
                    <br/>
                    <div className="w3-half"> 
                        <label htmlFor={`edu_startyear_${index}`}><b>Start Year</b></label>
                        <input name={`edu_startyear_${index}`} id={`edu_startyear_${index}`} className="w3-input w3-animate-input" type="text" placeholder="Year"
                        value={this.state.education[item].startyear} style={{width:"60%"}} onChange={this.handleInputChange}></input>
                    </div>
                    <div className="w3-half"> 
                        <label htmlFor={`edu_endyear_${index}`}><b>End Year</b></label>
                        <input name={`edu_endyear_${index}`} id={`edu_endyear_${index}`} className="w3-input w3-animate-input" type="text" placeholder="Year"
                        value={this.state.education[item].endyear}  style={{width:"60%"}} onChange={this.handleInputChange}></input>
                    <br/>
                    </div>
                    <label htmlFor={`edu_degree_${index}`}><b>Degree</b></label>
                    <input id={`edu_degree_${index}`} className="w3-input w3-animate-input" type="text"  placeholder="Degree Awarded"
                    value={this.state.education[item].degree} name={`edu_degree_${index}`} onChange={this.handleInputChange}></input>
                    <hr/>
                </div>
            )}
            else
            return(<div></div>)

        })
        return (
            <div className="w3-container">
                <h2 className="w3-text-black w3-center">Employee Registration Form</h2>
            <div className="w3-third">
                <div className="w3-card-4 w3-margin-right w3-margin-bottom p-3">
                    <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-user fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Personal Info</h2>
                    <label htmlFor="name"><b>Name</b></label>
                    <input name="name" id="name" className="w3-input w3-animate-input" type="text" style={{width:"50%"}} placeholder="Enter Your Name"
                    value={this.state.name} onChange={this.nameInputChange}></input>
                    <br/>
                    <label htmlFor="address"><b>Address</b></label>
                    <input name="address" id="address" className="w3-input w3-animate-input" value={this.state.address} type="text" style={{width:"80%"}} placeholder="Enter Your Place" onChange={this.nameInputChange}></input>
                    <br/>
                    <label htmlFor="email"><b>Email</b></label>
                    <input name="email" id="email" className="w3-input w3-animate-input" type="text" style={{width:"80%"}} value={this.state.email} placeholder="Enter Your Email" onChange={this.nameInputChange}></input>
                    <br/>
                    <label htmlFor="phone"><b>Phone Number</b></label>
                    <input name="phone" id="phone" className="w3-input w3-animate-input" type="text" style={{width:"50%"}} value={this.state.phone} placeholder="Enter Your Phone" onChange={this.nameInputChange}></input>
                    <br/>
                    <label htmlFor="designation"><b>Designation</b></label>
                    <input name="designation" id="designation" className="w3-input w3-animate-input" type="text" style={{width:"30%"}} value={this.state.designation} placeholder="Designation" onChange={this.nameInputChange}></input>
                    <br/>
                    <label htmlFor="bio"><b>Bio</b></label>
                    <textarea name="bio" id="bio" className="w3-input w3-animate-input" style={{width:"100%"}} value={this.state.bio} placeholder="Describe Yourself" onChange={this.nameInputChange}></textarea>
                </div>
                <div className="w3-card-4  w3-margin-right w3-margin-bottom p-3">
                    <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-asterisk  fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                    Skills <i className="fa fa-plus-circle plus-2 pull-right" onClick={this.skillonClick}></i>
                    </h2>
                    {renderskill}
                </div>
            </div>
            <div className="w3-third">
                <div className="w3-card-4 w3-margin-bottom p-3">
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                Work Experience <i className="fa fa-plus-circle plus-2 pull-right" onClick={this.exponClick}></i></h2>
                {renderorg}
                </div>
                <div className="w3-card-4 w3-margin-bottom p-3">
                    <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                    Education <i className="fa fa-plus-circle plus-2 pull-right" onClick={this.eduonClick}></i></h2>
                    {renderedu}
                </div>
            </div>
                
            </div>
        )
    }
}

export default Register