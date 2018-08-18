import React from 'react'

class Contact extends React.Component {
    render() {
        return (

            <section className="offset60">
                <h3></h3>
                <p id="description"></p>
                <div id="messages"></div>
                <form id="form-contact" method="post" name="form-contact">
                    <fieldset id="person_data">
                        <div className="form-group" id="email-group">
                            <label for="email">Email: <input className="required mail" id="email" name="email" placeholder="Email" required="" type="email" value="" /></label>
                        </div>
                        <div className="form-group" id="first-group">
                            <label for="first_name">First Name: <input className="required" id="first_name" name="first_name" placeholder="First Name" required="" type="text" value="" /></label>
                        </div>
                        <div className="form-group" id="last-group">
                            <label for="last_name">Last Name: <input className="required" id="last_name" name="last_name" placeholder="Last Name" required="" type="text" value="" /></label>
                            <div className="form-group" id="message-group">
                                <label for="message">Message:
          <textarea className="edit required" cols="17" id="message" name="message" placeholder="Message" rows="2"></textarea></label>
                            </div>
                        </div>
                    </fieldset><button className="button" type="submit">Submit</button>
                </form>
            </section>

        )
    }
}

export default Contact