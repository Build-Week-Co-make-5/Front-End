import React, { useState } from "react";
import styled from "styled-components";

function UserSignup() {
  const [AuthenticationStatus, setAuthenticationStatus] = useState(`none`);

  console.log(AuthenticationStatus);

  return (
    <form>
      <input type="text" placeholder="Admin Code" />
    </form>
  );
}

export default UserSignup;
