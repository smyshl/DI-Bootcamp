

function FormComponent(props){

  const { state, handleChange } = props;

  const submitHandler = (e) => {
    e.target.preventDefault()
  }


    return (
    <div id="mainWrapper">
        
      <section id="inputData">

        <form>
          <div>
            <input type="text" id="firstName" placeholder="First Name" onChange={(e) => handleChange(e)} />
          </div>
           <div>
          <input type="text" id="secondName" placeholder="Second Name" onChange={(e) => handleChange(e)} />
          </div>
          <div>
            <input type="number" id="age" placeholder="Age" onChange={(e) => handleChange(e)} />
          </div>

          <fieldset>
            <legend>Gender:</legend>
            <div>
              <input
                type="radio"
                id="genderChoice1"
                name="gender"
                value="female"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="genderChoice1">Female</label>
            </div>

            <div>
              <input
                type="radio"
                id="genderChoice2"
                name="gender"
                value="male"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="genderChoice2">Male</label>
            </div>
          </fieldset>

          <div>
            Select your destination <br />
            <select name="destination" onChange={(e) => handleChange(e)}>
              <option value="" disabled>-- Please Choose a destination --</option>
              <option value="Japan">Japan</option>
              <option value="USA">USA</option>
              <option value="Israel">Israel</option>
              <option value="France">France</option>
            </select>
          </div>

          <fieldset onClick={(e) => handleChange(e)}>
            <legend>Dietary restrictions</legend>
            <div>
              <input
                type="checkbox"
                id="nutsFree"
                name="diet"
                value="nutsFree"
              />
              <label htmlFor="nutsFree">Nuts free</label>
            </div>
            <div>
              <input type="checkbox" id="lactoseFree" name="diet" value="lactoseFree" />
              <label htmlFor="lactoseFree">Lactose free</label>
            </div>
            <div>
              <input type="checkbox" id="vegan" name="diet" value="vegan" />
              <label htmlFor="vegan">Vegan</label>
            </div>
          </fieldset>
          <div id="submit">
              <input type="submit" id="submit_button"value="Submit" onSubmit={(e) => submitHandler(e)} />
             </div>
        </form>
      </section>

      <section id="enteredData">
        <div>
          <div><strong><u>Entered information:</u></strong></div>

          <div><strong>Your name:</strong> <br />
          {state.firstName} {state.secondName}</div>
          <div><strong>Your age:</strong>  <br />
          {state.age}</div>
          <div><strong>Your gender:</strong>  <br />
          {state.gender}</div>
          <div><strong>Your destination:</strong>  <br />
          {state.destination}</div>
          <div><strong>Your dietary restrictions:</strong></div>
          <ul>
            <li><strong>Nuts free:</strong> {state.diet && state.diet[0]?.nutsFree ? "Yes" : "No"}</li>
            <li><strong>Lactose free:</strong> {state.diet && state.diet[1]?.lactoseFree ? "Yes" : "No"}</li>
            <li><strong>Vegan meal:</strong> {state.diet && state.diet[2]?.vegan ? "Yes" : "No"}</li>
          </ul>
                                       
        </div>
      </section>

    </div>
    );
};

export default FormComponent;