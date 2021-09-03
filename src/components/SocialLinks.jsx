import React from "react";

import { Button } from "reactstrap";
import cf from "./../assets/img/icons/common/cf.png"
import cc from "./../assets/img/icons/common/cc.jpeg"
import { socialLinks } from "./../portfolio";

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg">
      <Button
        className="btn-icon-only rounded-circle ml-1"
        color="github"
        href={socialLinks.github}
        target="_blank"
      >
        <span className="btn-inner--icon">
          <i className="fa fa-github" />
        </span>
      </Button>
      <Button
        className="btn-icon-only rounded-circle ml-1"
        color="instagram"
        href={socialLinks.gmail}
        target="_blank"
      >
        <span className="btn-inner--icon">
          <i className="fa fa-google" />
        </span>
      </Button>
      <Button
        className="btn-icon-only rounded-circle ml-1"
        color="twitter"
        href={socialLinks.linkedin}
        target="_blank"
      >
        <span className="btn-inner--icon">
          <i className="fa fa-linkedin" />
        </span>
      </Button>
      <Button
        className="btn-icon-only rounded-circle ml-1"
        href={socialLinks.codeforces}
        target="_blank"
      >
        <span className="btn-inner--icon">
          <img src={cf} width="15px" height="15px" alt="cf"/>
        </span>
      </Button>
      <Button
        className="btn-icon-only rounded-circle ml-1"
        href={socialLinks.codechef}
        target="_blank"
      >
        <span className="btn-inner--icon">
          <img src={cc} width="25px" height="25px" alt="cc"/>
        </span>
      </Button>
    </div>
  );
};

export default SocialLinks;
