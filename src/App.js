import React, { Component } from 'react'
import './App.css'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

class App extends Component {


    render() {
        return (
            <div className="App">
                <div className="main">
                    <h1 className="small-bottom-margin" id="header">List of Names</h1>
                    <div id="new-name-form-container" className="small-bottom-margin">
                        <form>
                        <input type="text" name="" placeholder="Add a name" />
                        <Button 
                            type="submit" 
                            id="add-name-btn" 
                            varient="contained" 
                            style={{ 
                                backgroundColor: "#FFE548" 
                            }}
                        >Add</Button>
                        </form>
                    </div>
                    <ul id="todo-list-container" className="list-group"></ul>
                </div>
                <Button variant="contained" color="secondary" id="reset-list-of-names-btn" startIcon={<DeleteIcon />} size="large">Reset Names</Button>
            </div>
        )
    }
}
export default App