import React from 'react'
import firebase from '../libs/firebase'

export default class Register extends React.Component{
    state = {
        name:'',
        data:[]
    }
    changeName(e){
        this.setState({name:e.target.value})
    }
    addUser = async() => {
        const fb = await firebase()
        // console.log(this.state)
        fb.database().ref('/name').push({name:this.state.name})
    }
    
    async componentDidMount(){
        const fb = await firebase()
        fb.database().ref('/name').on('value',(snap)=>{
            this.setState({data:snap.val()})
        })
    }

    async deleteDataInFirebase(key){
        const fb = await firebase()
        fb.database().ref(`/name/${key}`).remove()
    }
    
    render(){
        return(
            <div>
                <p>{'Name : '+this.state.name}</p>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" onChange={this.changeName.bind(this)} value={this.state.name} className="form-control" />
                <p>&nbsp;</p>
                <p>
                    <button onClick={()=>this.addUser()} className="btn btn-primary">ADD TO DB</button>               
                </p> 
                <ul className="list-group">
                    {Object.keys(this.state.data).map((key)=><li key={key} onClick={()=>this.deleteDataInFirebase(key)} className="list-group-item">{this.state.data[key].name}</li>)}
                </ul>
            </div>
        )
    }
}