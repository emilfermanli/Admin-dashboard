import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput } from "shards-react";
import {getUsersList,getSubscribes} from "../redux/actions/userAction"
import { connect } from "react-redux";
import PageTitle from "../components/common/PageTitle";
import {useSelector} from "react-redux"

const Tables = ({getUsersList,getSubscribes}) => {

  const subscribesList = useSelector(state => state.dataSubscribes)

  useEffect(() => {
    getSubscribes()
    getUsersList()
 
  }, [getUsersList,getSubscribes])

  const [userSearchResult, setUserSearchResult] = useState({
    search:null
  })

  const handleChange = (e) => {

    let value = e.target.value.trim().toLowerCase()

    setUserSearchResult({search:value})
  }
  console.log("table")
  
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Users List" subtitle="Blog Posts" className="text-sm-left" />
      </Row>
      
  
      {/* Default Light Table */}
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Users List</h6>
              <Form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
                  <InputGroup seamless >
                    <InputGroupAddon type="prepend">
                      <InputGroupText>
                        <i className="material-icons">search</i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <FormInput
                      onChange={(e) => handleChange(e)}
                      className="navbar-search"
                      placeholder="Search for something..."
                    />
                  </InputGroup>
              </Form>
            </CardHeader>
          <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      #
                    </th>
                    <th scope="col" className="border-0">
                      Name
                    </th>
                    <th scope="col" className="border-0">
                      Email
                    </th>                  
                  </tr>
                </thead>
                { 
                 subscribesList && 
                 subscribesList.filter((data) => {
                   if(userSearchResult.search == null)
                      return data
                    else if(data.Name.toLowerCase().includes(userSearchResult.search.toLowerCase()) || data.Email.toLowerCase().includes(userSearchResult.search.toLowerCase())){
                      return data
                 }}).map(index => (
                  <tbody>
                    <tr>
                      <td>{index.Id}</td>
                      <td>{index.Name}</td>
                      <td>{index.Email}</td>
                    </tr>                 
                  </tbody>
                ))
            }
              </table>
            </CardBody>
            
            
          </Card>
        </Col>
      </Row>
  
      {/* Default Dark Table */}
      {/* <Row>
        <Col>
          <Card small className="mb-4 overflow-hidden">
            <CardHeader className="bg-dark">
              <h6 className="m-0 text-white">Active Users</h6>
            </CardHeader>
            <CardBody className="bg-dark p-0 pb-3">
              <table className="table table-dark mb-0">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col" className="border-0">
                      #
                    </th>
                    <th scope="col" className="border-0">
                      First Name
                    </th>
                    <th scope="col" className="border-0">
                      Last Name
                    </th>
                    <th scope="col" className="border-0">
                      Country
                    </th>
                    <th scope="col" className="border-0">
                      City
                    </th>
                    <th scope="col" className="border-0">
                      Phone
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Ali</td>
                    <td>Kerry</td>
                    <td>Russian Federation</td>
                    <td>Gdańsk</td>
                    <td>107-0339</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Clark</td>
                    <td>Angela</td>
                    <td>Estonia</td>
                    <td>Borghetto di Vara</td>
                    <td>1-660-850-1647</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Jerry</td>
                    <td>Nathan</td>
                    <td>Cyprus</td>
                    <td>Braunau am Inn</td>
                    <td>214-4225</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Colt</td>
                    <td>Angela</td>
                    <td>Liberia</td>
                    <td>Bad Hersfeld</td>
                    <td>1-848-473-7416</td>
                  </tr>
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row> */}
    </Container>
  );
}


const mapDispatchToProps = {
  getUsersList,
  getSubscribes
}

export default connect(null, mapDispatchToProps)(Tables);
