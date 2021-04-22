import React from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNotes, startUploading } from '../../actions/notes'

export const NotesAppBar = () => {

    const day = moment().format("dddd, MMMM Do YYYY")
    

    const { active } = useSelector(state => state.notes)

    const dispatch = useDispatch()

    const handleSave = () => {

        dispatch( startSaveNotes( active ) )

    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if ( file ) {
            dispatch( startUploading( file ) );
           document.querySelector('#fileSelector').value = '';
        }
    }

    return (
        <div className="notes__appbar">
            <span> { day } </span>

            <input 
                id="fileSelector"
                name= "file"
                style={{ display: 'none' }}
                type= "file"
                onChange={ handleFileChange }
            />

            <div>
                <button 
                    className="btn"
                    onClick={ handlePictureClick }
                >
                    Picture
                </button>

                <button 
                    className="btn"
                    onClick={ handleSave }
                >
                    Save
                </button>

            </div>

        </div>
    )
}
