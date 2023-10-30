import Button from 'react-bootstrap/Button';
import { useData } from "../hooks/useData";
import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import TimesheetList from './TimesheetList';

const UserList = () => {
  const { users } = useData();
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (uId: string) => () => {
    setUserId(uId);
    setShow(true);
  };

  return (
    <div>
      <h2>User Table</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={user.id}>
              <td>{idx + 1}</td>
              <td width={"2rem"} height={"2rem"}>
                <Image src={user.avatar?.link} alt={user.firstName} thumbnail />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.position}</td>
              <td>{user.phone}</td>
              <td><Button onClick={handleShow(user.id)}>Timesheet</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <TimesheetList show={show} onHide={handleClose} userId={userId} key={userId} />
    </div>
  );
};

export default UserList;
