import React from 'react';
import ToDoNote from './ToDoNote';


// This is the Parent Component  
// It will call the child component ToDoNote
/* State consists of arr which stores array of objects . One object denotes one to-do-note. That's why we need array of objects because this parent component will consists many to-do notes */

class ToDoList extends React.Component {



  constructor(props) {
    super(props);
    this.state = { arr: [], todoinput: "" };
  }





  handleDelete(i) {
    /* The splice() method returns the removed item(s) in an array and slice() method returns the selected element(s) in an array, as a new array object */

    this.state.arr.splice(i, 1);
    var tempa1 = this.state.arr;

    this.setState({
      arr: tempa1
    })
  }





  // For adding new note
  handleAdd() {

    //Validates whether note is blank or not
    if (this.state.todoinput.trim() != "") {

      var temparr = this.state.arr.concat(
        { inputtext: this.state.todoinput }
      );


      this.setState({
        arr: temparr

      })
    }
    else {
      alert("Please enter a valid note")
    }
  }






  handleChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }






  render() {

    let todonotes =
      this.state.arr.map((item, index) => (

        //adding key is important in the child
        < ToDoNote key={item.inputtext + index + new Date().getTime()} noteData={item} onDelete={() => (this.handleDelete(index))
        } inputdata={item.inputtext} />
      ))

    return (
      <div>
        <input id="inputID" type="text" onChange={this.handleChanges} name="todoinput"></input>
        <button id="addButton" onClick={() => this.handleAdd()}> Add a new note<br></br></button>
        <div style={{ color: "red" }}> Your To-Do Notes are here :</div>
        {
          todonotes
        }
      </div >
    )

  }
}

export default ToDoList;