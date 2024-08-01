

function FormComponent(){


    return (
      <section>
        <header>Week 9 Day 3 Daily Challenge: Form Container</header>

        <form>
          <div>
            <input type="text" id="firstName" placeholder="First Name" />
          </div>
          <input type="text" id="secondtName" placeholder="Second Name" />
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
              <label for="genderChoice1">Female</label>
            </div>

            <div>
              <input
                type="radio"
                id="genderChoice2"
                name="gender"
                value="male"
              />
              <label for="genderChoice2">Male</label>
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
              <label for="nutsFree">Nuts free</label>
            </div>
            <div>
              <input type="checkbox" id="lactoseFree" name="diet" value="lactoseFree" />
              <label for="lactoseFree">Lactose free</label>
            </div>
            <div>
              <input type="checkbox" id="vegan" name="diet" value="vegan" />
              <label for="vegan">Vegan</label>
            </div>
          </fieldset>
          <div>
              <input type="submit" id="vegan" name="diet" value="Submit" />
             </div>
        </form>
      </section>
    );
};

export default FormComponent;