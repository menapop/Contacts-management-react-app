const DynamicField = ({id,name , value , onTypeChange , onValueChange }) => {
  
    return (
        <div>
            <select  data-id={id}  name={name}  value={name}  onChange={onTypeChange}   >
               <option value=''> </option>
               <option value="position">position</option>
               <option value="title">title</option>
               <option value="Phone">Phone</option>
            </select>
            <input
                    data-id = {id}
                    type="text"
                    name={id}
                    placeholder={name}
                    value={value}
                    onChange={onValueChange}
                  />
        </div>
    )
}

export default DynamicField ;