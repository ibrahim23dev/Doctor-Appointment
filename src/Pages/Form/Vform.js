import React from 'react';

const Vform = () => {
    return (
        <>
            <div className="card">
            <h4 className="text-center">Vedio Consultation</h4>
            <form action="">
                <label className="text-white">Personal Information*</label>
               <div>
               <label id="name">Patients Name</label>
                   <input type="text" name="name" placeholder="Enter Name"/>
                   <label id="name">Patients Email Id</label>
                   <input type="email" name="name" placeholder="Patients Email Ide"/>
                   <label id="name">Patients Contact Number</label>
                   <input type="text" name="tel" ng-model="tel" ng-intl-tel-input data-default-country="gb"/>
               </div>
            </form>
            </div>
        </>
    );
};

export default Vform;