import React, { useState } from 'react';
import Header from "../Header";
import GoogleApiWrapper from "../MapChart";
import {Burger, Menu} from "../Hamburger/HamburgerMenu";

import "../../CSS/Page.css";

function LocationPage ({id}) {

    const [open, setOpen] = useState(false);

    return (
        <div style={{display:'flex'}}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />

            <div id="left-menu">
                <center>
                    <h3>
                        Lipsum Ipsum
                    </h3>
                </center>

                <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius eu eros ut lacinia. Aliquam placerat, sapien a molestie egestas, leo velit condimentum diam, in condimentum enim dolor vel tellus. Sed rhoncus diam ut metus tristique, ac aliquam arcu tincidunt. Pellentesque eleifend tincidunt ultricies. Nullam rhoncus nisl eu tellus consequat, lacinia placerat justo interdum. Ut tincidunt augue at augue tincidunt sodales. Duis rhoncus eget nisi eget auctor. Aliquam cursus blandit orci, sit amet mattis lorem fringilla vitae. Nam in nisi ut dolor consequat tincidunt. Morbi sed sapien vitae nisl pulvinar pharetra ac in sem. Fusce et eros ut nisl fermentum placerat et id ante. Sed mi risus, pretium eget mi rhoncus, ullamcorper tempor orci. Proin sed quam porta ex consectetur convallis. Suspendisse pretium auctor mattis. Donec efficitur erat erat, eu imperdiet quam lacinia at. Pellentesque neque odio, posuere sed purus quis, pulvinar blandit metus.

                Integer ac efficitur quam. Curabitur rutrum gravida dolor, vitae sagittis magna posuere quis. Proin interdum nibh vel dui sollicitudin, ut vestibulum dolor sagittis. Nunc dui metus, ultricies eget urna ut, pulvinar bibendum sem. Mauris a lacus auctor, laoreet velit vel, aliquam diam. Vivamus blandit mauris vel mi euismod, at fringilla ante eleifend. Suspendisse potenti.

                Praesent sagittis, dui vel sagittis iaculis, lectus tellus dapibus diam, eget gravida purus ligula quis ex. Nullam rutrum, odio ut vehicula pretium, augue nibh varius mi, et ornare dolor magna ac justo. Aliquam erat volutpat. Morbi tristique mi vel lorem feugiat, non tristique risus consectetur. Donec luctus odio sit amet tristique pharetra. Suspendisse ut vestibulum sem. Phasellus eget egestas mi. In nulla nunc, ultricies vitae tristique luctus, venenatis vel mi. Nullam ac eros viverra, rutrum erat vitae, aliquam sapien. Nunc lectus nisi, pellentesque sed faucibus vitae, cursus eu mi.

                Aenean suscipit venenatis enim, quis blandit quam ornare id. Fusce felis diam, rhoncus nec eros a, bibendum sodales magna. Sed sit amet lacus fermentum, elementum diam ut, sodales mi. Nullam aliquet, nibh eu semper rutrum, neque ante consequat augue, ut semper erat massa non orci. Integer sapien tortor, pharetra id ante nec, fringilla pulvinar nibh. Ut porta nisi et enim blandit luctus. Integer in dui urna. In hac habitasse platea dictumst. Ut id tellus eget ligula rhoncus tristique. Maecenas et sapien ac ipsum dignissim suscipit. Duis mollis hendrerit turpis nec aliquam. In augue arcu, sodales ac iaculis eu, condimentum a orci. Sed euismod, velit quis tincidunt auctor, mauris dolor pretium lorem, et tempus mauris massa sit amet augue. Donec turpis enim, tempor id malesuada maximus, pretium vitae lectus.
                </p>
            </div>

            <GoogleApiWrapper location="Toronto"/>
        </div>
    );
}

export default LocationPage;