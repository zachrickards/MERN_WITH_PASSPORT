import React from 'react';

const SaveButton = ({saveChanges}) => {
    return (
        <button 
        className="btn bg-success text-white"
        style={{
            margin: '1rem',
            padding: '.5rem', 
            fontWeight: '600',
            }}
        onClick={saveChanges}
        >
            Save Changes
        </button>
    )
}

export default SaveButton;
