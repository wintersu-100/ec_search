import React from 'react';
import Contact_button from './contact_button.js/Contact_button';

class Contact extends React.Component {
    render() {
        const buttonName = {name: "Contact", introduction:"あああ",}

        return (
            <div>
                <div className="contact-btn contact-opacity　btn no_underline">
                    <p>あいうえお</p>
                    {
                        <Contact_button
                        name={buttonName.name}
                        />
                    }
                </div>
            </div>
        )
    }
}

export default Contact;
