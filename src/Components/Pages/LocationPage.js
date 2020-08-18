import React, { useState } from 'react';
import Header from "../Header";
import GoogleApiWrapper from "../MapChart";
import {Burger, Menu} from "../Hamburger/HamburgerMenu";

function LocationPage ({id}) {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <div>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>

            <GoogleApiWrapper location="Toronto"/>
        </div>
    );
}

export default LocationPage;