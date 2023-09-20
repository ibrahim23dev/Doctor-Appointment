import React from 'react';
import "../Asset/Css/home.css";



const Doctor =()=> {
    return (
        <>
            <div>
                <header>
                    <h1>Dr. John Doe</h1>
                </header>

                    <section>
                        <h2>About Dr. John Doe</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et ligula sit amet massa
                            consectetur feugiat ut vitae nibh. Morbi blandit, sapien ut feugiat imperdiet, velit eros
                            feugiat velit, et tristique orci felis in arcu. Nullam vitae gravida orci. Nulla eu est
                            aliquet, bibendum urna a, lobortis sapien. Sed tincidunt ante nibh, ac eleifend elit
                            sollicitudin non. In a libero vel urna laoreet aliquet id id nulla. Fusce feugiat sapien nec
                            felis feugiat vehicula. Donec ac tellus urna. Donec tincidunt quis odio at euismod.</p>
                    </section>
                    <section>
                        <h2>Services Offered</h2>
                        <ul>
                            <li>General Check-up</li>
                            <li>Blood Tests</li>
                            <li>X-ray</li>
                            <li>Ultrasound</li>
                            <li>ECG</li>
                        </ul>
                    </section>
                    <section>
                        <h2>Contact Dr. John Doe</h2>
                        <form>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name"/>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email"/>
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message"></textarea>
                                    <button type="submit">Send Message</button>
                        </form>
                    </section>
            </div>
        </>
   )
};
export default Doctor;