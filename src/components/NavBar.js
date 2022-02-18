import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksStyle = links.map((links)=>{
    return <a href={"#"+links} key={links}>{links}</a>
  })
  return <nav>{linksStyle}</nav>;
}

export default NavBar;
