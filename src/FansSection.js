import React from 'react';
import Footer from './Footer';
import FansHeader from './FansHeader';
import './style.css';

class FansSection extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {

    }
  }
  render() {
    return (
	    <section class="middle-section">
	      <form action="" method="post">
	        <div>
	          <label for="name-input"><span class="required">*</span>Name:</label>
	          <input type="text" id="name-input" required />
	        </div>
	        <div>
	          <label for="email-input"><span class="required">*</span>Email:</label>
	          <input type="email" id="email-input" required />
	        </div>
	        <div>
	          <label for="tel-input">Telephone:</label>
	          <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="tel-input" />
	        </div>
	        <div id="phone-comment">
	          <span>Format: xxx-xxx-xxxx</span>
	        </div>
	        <div>
	          <label for="radio-btns-div">Dog Owner:</label>
	          <div id="radio-btns-div">
	            <input type="radio" name="dog-owner" value="Yes" />Yes
	            <input type="radio" name="dog-owner" value="No" checked />No
	          </div>
	        </div>
	        <div>
	          <label id="dog-breed-label">Dog Breed:</label>
	          <input type="text" id="dog-breed-input" required />
	        </div>
	        <div>
	          <label for="tel-input">Comment:</label>
	          <textarea type="text" class="textareaField" id="textareaInput"></textarea>
	        </div>
	        <div class="button">
	          <button class="btn btn-primary" type="submit"><i class="fa fa-paw"></i>&nbsp;&nbsp;Submit</button>
	        </div>
	      </form>
	    </section>
    );
  }
}

export default FansSection;