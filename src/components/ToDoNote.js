import React from 'react';


class ToDoNote extends React.Component {


  //will be called only when component gets created. 
  constructor(props) {
    super(props);
    this.state = { textnote: this.props.noteData.inputtext, editMode: false }
  }

  handleEdit() {
    //shallow merging
    this.setState({ editMode: true });
  }


  handleSave() {
    this.setState({ textnote: this.state.textnote, editMode: false });
  }

  handleChanges(e) {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  render() {
    // var id_note = "note" + this.props.noofnotes;
    var readOnly1 = this.state.editMode == false ? true : false;
    return (
      <div>
        <textarea readOnly={readOnly1} name="textnote" value={this.state.textnote} onChange={() => this.handleChanges}></textarea>
        <button onClick={() => this.handleEdit()}>Edit</button>
        <button onClick={() => this.props.onDelete()}>Delete</button>
        <button onClick={() => this.handleSave()}>Save</button>
      </div >
    )

  }
}


export default ToDoNote;