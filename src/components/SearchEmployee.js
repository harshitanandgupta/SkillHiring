import React,{Component} from 'react'
import {Badge,Media} from 'reactstrap'
import {Stagger,Fade} from 'react-animation-components'
import {Link} from 'react-router-dom'
function RenderEmployee({employee}) {
    
    return (
          
          <Fade in>
            <div key={employee.id} className="col-12 mt-5">
                <Media tag="li" className="empmedia">
                <Media left middle>
                    <Media object src={employee.image} alt={employee.name} className="empimg ml-3 mt-3 mb-3"/>
                </Media>
                <Media body className="ml-5 mt-3 mb-1 empdet">
                    <Media heading>{employee.name}</Media>
                    <h5>Top Skills of the employee</h5>
                    <ul className="empskill">
                        <li><strong>{employee.skills[0].type.toUpperCase()}</strong></li>
                        <li><strong>{employee.skills[1].type.toUpperCase()}</strong></li>
                        <li><strong>{employee.skills[2].type.toUpperCase()}</strong></li>
                    </ul>
                </Media>
                <Link to={`/profile/${employee.id}`}>
                    <Media right><button className="button m-2 mt-5 mr-4"><span>View Profile</span></button></Media>   
                </Link>
                </Media>
            </div>
          </Fade>
          
    );

}

class SearchEmployee extends Component{
    isanyFilter(req_skill){
        var ret=false
        Object.keys(req_skill).forEach((skill)=>{
            if(req_skill[skill]===true)
            ret=true
        })
        return ret
    }
    matchedSkillCount(empskill,req_skill){
        let count=0;
        Object.keys(req_skill).forEach((skill)=>{
            if(req_skill[skill]===true)
            {
                empskill.forEach((item)=>{
                    if(item.type===skill)
                    count=count+1
                })
            }
        })
        return count;
    }
    compare(a, b) {
        
        let comparison = 0;
        if (a.count  > b.count) 
          comparison = -1;
        else 
          comparison = 1;
        
        return comparison;
    }
    render(){
        const state_keys=Object.keys(this.props.skills).map((item)=>{
            if(this.props.skills[item]===true)
            return (
            <h3 className="pr-2"><Badge color="info" pill >{item.toUpperCase()}</Badge></h3>
            )
            return <div></div>
        });
        // console.log(this.matchedSkillCount(this.props.employee[0].skills,this.props.skills))
        console.log(this.isanyFilter(this.props.skills))
        var result=[]
        if(this.isanyFilter(this.props.skills) === true){
            this.props.employee.forEach((item)=> {
                var ret=this.matchedSkillCount(item.skills,this.props.skills)
                if( ret > 0)
                result.push({...item,count:ret})
            })
            result.sort(this.compare)
        }
        else
        result=this.props.employee
        var emplist;
        if(result.length === 0)
        emplist=(
            <h3>Sorry , No Registered Employee has this skill!</h3>
        )
        else
        emplist=result.map((item)=>{
            return (
                <RenderEmployee employee={item} />
            )
        })
        return(
            <div>
            <div className="container">
                <div className="row pt-4">
                    <span className="plus"><i className="fa fa-plus-circle plus-1" onClick={this.props.toggleModal}></i>    Add skills to filter</span>
                </div>
            </div>
            
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
                        {/* <RenderEmployee employee={this.props.employee[0]}/>
                        <RenderEmployee employee={this.props.employee[1]}/>
                        <RenderEmployee employee={this.props.employee[2]}/> */}
                        {emplist}
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