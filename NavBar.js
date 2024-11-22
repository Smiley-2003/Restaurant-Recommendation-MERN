// NavBar.js

import React from &quot;react&quot;;
import { Nav, Navbar, Container } from &quot;react-bootstrap&quot;;

export default function NavBar() {
    return (
        &lt;div&gt;
            &lt;Navbar bg=&quot;dark&quot; data-bs-theme=&quot;dark&quot;&gt;
                &lt;Container&gt;
                    &lt;Navbar.Brand href=&quot;#home&quot;&gt;
                        Restro - find your restaurant
                    &lt;/Navbar.Brand&gt;
                    &lt;Nav className=&quot;me-auto&quot;&gt;&lt;/Nav&gt;
                &lt;/Container&gt;
            &lt;/Navbar&gt;
        &lt;/div&gt;
    );
}
