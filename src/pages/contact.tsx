import React from 'react'
const Contact = () => {
    return (
        <div className='rica-page'>
            <div className='container contact-us-form'>
                <p>Feel free to send us a message. Just submit the form below, and we will get back at the earliest opportunity.</p>
                <form action="#" className='form-horizontal'>
                    <div className='form-data-fields'>
                        <div className='form-group row'>
                            <div className='col-md-12 no-padding-margin'>
                                <input type="text" id='name' className='form-control' placeholder='Enter name'/>
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className='col-md-12 no-padding-margin'>
                                <input type="text" id='email' className='form-control' placeholder='Enter email address'/>
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className='col-md-12 no-padding-margin'>
                                <input type="text" id='phone' className='form-control' placeholder='Enter phone number'/>
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className='col-md-12 no-padding-margin'>
                                <textarea id='message' className='form-control' rows={8} placeholder='Enter your message here'/>
                            </div>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <div className='col-md-12 no-padding-margin'>
                            <button className='btn contact-submit'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default Contact