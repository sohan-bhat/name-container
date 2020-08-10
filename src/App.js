import React from 'react'
import './App.css'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="add-name">
                    <div className="box">
                        <form>
                            <input type="text" name="" placeholder="Add a name" />
                            <input type="submit" name="" value="Add" />
                        </form>
                    </div>
                </div>
                    <div className="list-of-names">
                        <ul className=""></ul>
                    </div>
            </div>
        </div>
    )
}

export default App