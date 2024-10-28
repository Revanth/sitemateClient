import logo from './logo.svg';
import './App.css';

function App() {
  const jiraIssue = { 'ID': 'Bug001', 'Title': 'Sample Title', 'Description': 'Sample description' }

  const apiCallCreate = async () => {
    try {
      const res = await fetch('http://localhost:3001/sitemate/api/create', {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(jiraIssue)
      })
    }
    catch (e) {
      console.log('Create Api ' + ' error: ' + e)
    }
  }

  const apiCallRead = async () => {
    try {
      const res = await fetch('http://localhost:3001/sitemate/api/read')
      console.log('Response:', await res.json())
    }
    catch (e) {
      console.log('Read Api ' + ' error: ' + e)
    }
  }

  const apiCallUpdate = async () => {
    try {
      const res = await fetch('http://localhost:3001/sitemate/api/update', {
        method: 'PUT',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(jiraIssue)
      })
      console.log('Response:', res)
    }
    catch (e) {
      console.log('Update Api ' + ' error: ' + e)
    }
  }

  const apiCallDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3001/sitemate/api/delete/${id}`, {
        method: 'DELETE'
      })
      console.log('Response:', res)
    }
    catch (e) {
      console.log('Delete Api ' + ' error: ' + e)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={apiCallCreate}>Create</button>
          <button onClick={apiCallRead}>Read</button>
          <button onClick={apiCallUpdate}>Update</button>
          <button onClick={() => apiCallDelete('Bug001')}>Delete</button>
        </div>
      </header>
    </div>
  );
}

export default App;
