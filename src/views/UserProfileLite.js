import React from "react";
import { Container, Row, Col, Alert } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";

const UserProfileLite = () => (
  <div>
    <Container fluid className="px-0">
      <Alert className="alert-success mb-0">
        <i className="fa fa-check mx-2"></i> Success
      </Alert>
    </Container>
    <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="User Profile" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
      <Col lg="4">
        <UserDetails />
      </Col>
      <Col lg="8">
        <UserAccountDetails />
      </Col>
    </Row>
  </Container>
  </div>
  
);

export default UserProfileLite;
