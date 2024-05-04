import React, { useState } from "react";
import {
  Nav,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
  NavDropdown,
  Breadcrumb,
  Collapse,
  Table,
  ProgressBar,
  Pagination,
  Popover,
  Tabs,
  Tab,
  OverlayTrigger,
} from "react-bootstrap";

function App() {
  const [open, setOpen] = useState(false);
  const munculPopover = (
    <Popover title="informasi">
      Website ini dibuat untuk memudahkan dalam pencarian informasi terkini
      tentang berita olahraga.
    </Popover>
  );
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Akses Sport</Navbar.Brand>
        <Nav>
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Berita</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Live Scores</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <NavDropdown title="Piala & Liga">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Transfer Pemain</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Tim</Nav.Link>
          </Nav.Item>
        </Nav>
        <Form className="d-flex ms-auto">
          <FormControl type="text" placeholder="silakan cari" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <Container>
        <Breadcrumb className="d-flex ms-auto">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Liga Inggris</Breadcrumb.Item>
          <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
        </Breadcrumb>
        <h4>Rumor Transfer Pemain</h4>
        <Tabs defaultActivekey="info" className="text-center">
          <Tab eventKey="home" title="Semua Transfer" />
          <Tab eventKey="info" title="Liga Primer Inggris" />
          <Tab eventKey="info" title="Serie A" />
          <Tab eventKey="info" title="Divisi Primera" />
          <Tab eventKey="info" title="Bundesliga" />
          <Tab eventKey="info" title="Liga 1 Indonesia" />
        </Tabs>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama Pemain</th>
              <th>Tim</th>
              <th>Transfer</th>
              <th>Proses Transfer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Cristiano Ronaldo</td>
              <td>Real Madrid</td>
              <td>Al-Nasr</td>
              <td>
                <ProgressBar striped animated now={80} label="80%" />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Lionel Messi</td>
              <td>Barcelona</td>
              <td>Persikabo</td>
              <td>
                <ProgressBar striped animated now={100} label="100%" />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Sal Priadi</td>
              <td>Persija</td>
              <td>Liverpool</td>
              <td>
                <ProgressBar striped animated now={10} label="10%" />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Erling Haaland</td>
              <td>Manchester City</td>
              <td>Persiraja Banda Aceh</td>
              <td>
                <ProgressBar striped animated now={65} label="65%" />
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Yan Sommer</td>
              <td>Inter Milan</td>
              <td>Galatasaray</td>
              <td>
                <ProgressBar striped animated now={90} label="90%" />
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Rafael Struict</td>
              <td>Ado Den Haag</td>
              <td>Liverpool</td>
              <td>
                <ProgressBar striped animated now={100} label="100%" />
              </td>
            </tr>
          </tbody>
        </Table>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={munculPopover}
        >
          <Button variant="primary">Informasi</Button>
        </OverlayTrigger>
        <Button onClick={() => setOpen(!open)} aria-expanded={open}>
          Versi Website
          <Collapse in={open} placement="right">
            <p>Akses Sport V1.0</p>
          </Collapse>
        </Button>
      </Container>
    </>
  );
}

export default App;
