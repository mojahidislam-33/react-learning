import { useId } from "react";

function UseId(){
    const emailId=useId();

    return(
        <div>
            <label htmlFor="emailId">
                Email
            </label>

            <input 
               id="emailId "
               type="email"
            />
        </div>
    );
}

export default UseId;