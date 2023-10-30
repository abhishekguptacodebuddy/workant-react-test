import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import { useData } from '../hooks/useData';
import convertUTCTimeToUserTime from '../util/convertUTCTimeToUserTime';

type TimesheetListPropsType = {
  show: boolean;
  onHide: () => void;
  userId: string
}

const TimesheetList: React.FC<TimesheetListPropsType> = ({ show, onHide, userId }) => {
  const { timesheets } = useData();
  const [selectedMonth, setSelectedMonth] = useState('');

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(event.target.value);
  };

  const filteredTimesheets = timesheets.filter(timesheet => timesheet.userId === userId).filter((timesheet) => {
    if (!selectedMonth) return true;
    return new Date(timesheet.startTime).getMonth() === Number(selectedMonth);
  });

  return (
    <Modal show={show} onHide={onHide} fullscreen>
      <Modal.Header closeButton>
        <Modal.Title>Timesheet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <label htmlFor="monthSelect">Filter by Month:</label>
          <select id="monthSelect" onChange={handleMonthChange}>
            <option value="">All</option>
            <option value={0}>January</option>
            <option value={1}>February</option>
            <option value={2}>March</option>
            <option value={3}>April</option>
            <option value={4}>May</option>
            <option value={5}>June</option>
            <option value={6}>July</option>
            <option value={7}>August</option>
            <option value={8}>September</option>
            <option value={9}>October</option>
            <option value={10}>November</option>
            <option value={11}>December</option>
          </select>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Assessment</th>
                <th>Break(in minutes)</th>
                <th>Time(in minutes)</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Status</th>
                <th>Location Checked</th>
              </tr>
            </thead>
            <tbody>
              {filteredTimesheets.map((timesheet, idx) => (
                <tr key={timesheet.id}>
                  <td>{idx + 1}</td>
                  <td>{timesheet.assessment}</td>
                  <td>{timesheet.breakMinutes}</td>
                  <td>{timesheet.minutes}</td>
                  <td>{convertUTCTimeToUserTime(timesheet.startTime)}</td>
                  <td>{convertUTCTimeToUserTime(timesheet.endTime)}</td>
                  <td>{timesheet.status}</td>
                  <td>{timesheet.locationChecked ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>


  );
};

export default TimesheetList;
