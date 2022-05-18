// import React from "react"
import React, { Component } from "react"
// import Modal from "react-bootstrap/Modal"
// import Example from "./Modal.js"
// import ModalDialog from 'react-bootstrap/ModalDialog'
// import ModalHeader from 'react-bootstrap/ModalHeader'
// import ModalTitle from 'react-bootstrap/ModalTitle'
// import ModalBody from 'react-bootstrap/ModalBody'
// import ModalFooter from 'react-bootstrap/ModalFooter'
import { Container, Row, Col, Dropdown, Breadcrumb, Carousel, ListGroup, Button, Form} from "react-bootstrap"


class App extends Component {
  // constructor(){
  //   super();
  //   this.handleClose = this.handleClose.bind(this);
  // }
  //
  // handleClose(){
  //   this.state{{open: false}}
  // }
  render(){
    return(
      <Container fluid>
        <Row className="bg-dark">
          <Col>
            <Dropdown>
              <Dropdown.Toggle>Pilih Bahasa</Dropdown.Toggle>
            </Dropdown>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col>
            <img alt="Profil" src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" width="74" height="74"/>
            <br/><br/>
            <h5 className="text-light">Alan Saputra</h5>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col>
            <Breadcrumb className="bg-light">
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Berita</Breadcrumb.Item>
              <Breadcrumb.Item active>Bola</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Carousel>
              <Carousel.Item interval={1800}>
                <img className="d-block" alt="gambar 1" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600" width="1000" height="400"/>
                <Carousel.Caption>
                  <h4>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1800}>
                <img className="d-block" alt="gambar 2" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600" width="1000" height="400"/>
                <Carousel.Caption>
                  <h4>Seragam PSG Mirip Seragam Real Madrid</h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1800}>
                <img className="d-block" alt="gambar 3" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600" width="1000" height="400"/>
                <Carousel.Caption>
                  <h4>Inggris Mau Jadi Tim Terbaik di Dunia</h4>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col></Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
              <ListGroup.Item>Liga Premier Inggris</ListGroup.Item>
              <ListGroup.Item disabled>Divisi Primera</ListGroup.Item>
              <ListGroup.Item>Serie A</ListGroup.Item>
              <ListGroup.Item>Ligue 1</ListGroup.Item>
              <ListGroup.Item>Bundes Liga</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <div className="p-5 mb-4 bg-light rounded-3">
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">DIVISI PRIMERA</h1>
                <p className="col-md-12 fs-6">Main untuk Catalunya, Gerard Pique Minta Dihormati</p>
                <Button variant="primary">Read More</Button>
              </div>
            </div>
          </Col>
          <Col>
            <div align="center">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
              <br/>
              <h3>Silahkan Login</h3>
            </div>
            <Form>
              <Form.Group>
                <Form.Control type="email" placeholder="Masukan Email"></Form.Control>
              </Form.Group>
              <br/>
              <Form.Group>
                <Form.Control type="password" placeholder="Password"></Form.Control>
              </Form.Group>
              <br/>
              <Form.Group>
                <Form.Check type="checkbox" label="Terms & Condition"/>
              </Form.Group>
              <br/>
              {
                // <Button variant="primary" type="submit">Login</Button>
              }
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>
              <div className="modal-fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModallabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 classname="modal-title" id="exampleModalLabel">Login</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    Anda berhasil login
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save Username & Password</button>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
