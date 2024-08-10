

function FormComponent(props){

  const { handleChange } = props;

  
    return (
      <section>
        <header>Week 9 Day 3 Daily Challenge: Form Container</header>

        <form>
          <div>
            <input type="text" id="firstName" placeholder="First Name" onChange={(e) => handleChange(e)}/>
          </div>
           <div>
          <input type="text" id="secondtName" placeholder="Second Name" />
          </div>
          <div>
            <input type="text" id="age" placeholder="Age" />
          </div>

          <fieldset>
            <legend>Gender:</legend>
            <div>
              <input
                type="radio"
                id="genderChoice1"
                name="gender"
                value="female"
              />
              <label htmlFor="genderChoice1">Female</label>
            </div>

            <div>
              <input
                type="radio"
                id="genderChoice2"
                name="gender"
                value="male"
              />
              <label htmlFor="genderChoice2">Male</label>
            </div>
          </fieldset>

          <div>
            Select your destination <br />
            <select name="destination">
              <option value="" disabled>-- Please Choose a destination --</option>
              <option value="Japan">Japan</option>
              <option value="USA">USA</option>
              <option value="Israel">Israel</option>
              <option value="France">France</option>
            </select>
          </div>

          <fieldset>
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
              <input type="submit" id="submit_button"value="Submit" />
             </div>
        </form>
      </section>
    );
};

export default FormComponent;