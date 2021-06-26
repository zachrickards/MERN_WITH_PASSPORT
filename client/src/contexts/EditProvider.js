import React, { createContext, useReducer, useContext } from "react";

const EditContext = createContext();

const READ_STATE = {
    toggle: true,
    button: "Edit",
    hideInput: "none",
    hideRead: "",
    icon: "edit",
    color: "blue",
  }

  const SAVE_STATE = {
    toggle: false,
    button: "Save",
    hideInput: "",
    hideRead: "none",
    icon: "save",
    color: "green",
  }

  //actions
  const CLICK_EDIT = "CLICK_EDIT"
  const CLICK_SAVE = "CLICK_SAVE"

  const stateReducer = (state, action) => {
    switch (action.type) {
      case CLICK_EDIT:
        return READ_STATE;
      case CLICK_SAVE:
        //post request
        return SAVE_STATE;
      default:
        return READ_STATE;
    }
  };

  function EditProvider({children}) {
    const [state, dispatch] = useReducer(stateReducer, READ_STATE);

    const value = {state, dispatch}

    return (
        <EditContext.Provider value={value}>
            {children}
        </EditContext.Provider>
    )
  };

  function useEditContext() {
      const context = useContext(EditContext);
      if (context === undefined) {
          throw new Error('useEditContext must be used within an EditProvider')
      }
      return context;
  }

  export default EditContext;
  export {EditProvider, useEditContext}