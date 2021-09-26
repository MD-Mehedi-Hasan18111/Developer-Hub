import React, { useState, useEffect } from 'react';
import SingleDeveloper from "./../SingleDeveloper/SingleDeveloper";
import './Developers.css';
import SingleMember from "./../SingleMember/SingleMember";


const Developers = () => {

    // load data for state declare
    const [developers, setDevelopers] = useState([]);

    // added developer team member
    const [members, setMembers] = useState([]);

    // fetch data from json file
    useEffect(() => {
        fetch('./developers.JSON')
            .then(res => res.json())
            .then(data => setDevelopers(data))
    }, [])

    // event handler
    const addDeveloper = (developer) => {
        const existMember = members.find(dv => dv.name === developer.name);
        if (!existMember) {
            const newMembers = [...members, developer];
            setMembers(newMembers);
        }
        else {
            alert("This Member already added!");
        }
    }

    // total salary
    let totalSalary = 0;
    for (const member of members) {
        totalSalary += member.salary;
    }

    // console.log(developers);

    return (
        <div style={{ margin: "0 50px" }}>
            <div className="developer-area row">
                <div className="cart col-lg-3">
                    <div className="sticky-top cart-container ">
                        <h2>Member added: {members.length}</h2>
                        <h4>Total Salary: $ {totalSalary}</h4>
                        {
                            members.map(member => <SingleMember
                                key={member.name}
                                member={member}
                            />)
                        }
                    </div>
                </div>
                <div className="developers-container col-lg-9">
                    <h2 className="ms-4 mb-3 text-center">Select Developer for make a Team!</h2>
                    <div class="alert alert-danger mb-4" role="alert">
                        Maximum 10 Member can add the team.
                    </div>
                    <div className="developers row g-4">
                        {
                            developers.map(developer => <SingleDeveloper
                                key={developer.name}
                                developer={developer}
                                addDeveloper={addDeveloper}
                            />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Developers;